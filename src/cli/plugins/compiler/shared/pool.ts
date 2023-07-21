import { Worker } from 'node:worker_threads'

export type WorkerPool = {
    prepare(count: number): void
    obtain(count: number): Promise<Worker[]>
}

export const createPool = (url: URL): WorkerPool => {
    const loadingWorkers: Set<Worker> = new Set()
    const readiedWorkers: Set<Worker> = new Set()

    const queue: [count: number, resolve: (value: Worker[]) => void][] = []

    const prepare = (count: number) => {
        for (let i = 0; i < count; i++) {
            const worker = new Worker(url)
            loadingWorkers.add(worker)

            const onOnline = () => {
                worker.off('online', onOnline)
                worker.off('exit', onExit)

                loadingWorkers.delete(worker)
                readiedWorkers.add(worker)
                onUpdate()
            }

            const onExit = () => {
                worker.off('online', onOnline)
                worker.off('exit', onExit)

                loadingWorkers.delete(worker)
                prepare(1)
            }

            worker.on('online', onOnline)
            worker.on('exit', onExit)
        }
    }

    const obtain = (count: number) =>
        new Promise<Worker[]>((resolve) => {
            queue.push([count, resolve])
            onUpdate()
        })

    const onUpdate = () => {
        while (queue.length) {
            const [count, resolve] = queue[0]

            if (readiedWorkers.size >= count) {
                queue.shift()

                const workers = [...readiedWorkers].slice(0, count)

                for (const worker of workers) {
                    readiedWorkers.delete(worker)
                }

                resolve(workers)
                continue
            }

            const total = loadingWorkers.size + readiedWorkers.size
            if (total < count) prepare(count - total)

            break
        }
    }

    return {
        prepare,
        obtain,
    }
}
