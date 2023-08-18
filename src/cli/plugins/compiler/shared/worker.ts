import { parentPort } from 'node:worker_threads'
import { Message } from './message.js'

export const createWorker = <
    TMainToWorkerMessage extends Message,
    TWorkerToMainMessage extends Message,
>(): {
    send(message: TWorkerToMainMessage): void
    onReceive<T extends TMainToWorkerMessage['type']>(
        type: T,
        handler: (message: Extract<TMainToWorkerMessage, { type: T }>) => void,
    ): void
} => {
    if (!parentPort) throw new Error('Unexpected missing parentPort')
    const mainPort = parentPort

    return {
        send(message) {
            mainPort.postMessage(message)
        },

        onReceive(type, handler) {
            mainPort.on('message', (message: TMainToWorkerMessage) => {
                if (message.type !== type) return

                handler(message as never)
            })
        },
    }
}
