import { Plugin } from 'esbuild'

export const createPlugin = (name: string, onEnd: () => Promise<void>): Plugin => ({
    name,
    setup(build) {
        build.onEnd(async (result) => {
            if (result.errors.length) return

            try {
                await onEnd()
            } catch (error) {
                return {
                    errors: [
                        {
                            text: error instanceof Error && error.stack ? error.stack : `${error}`,
                        },
                    ],
                }
            }
        })
    },
})

export const stopwatch = async (name: string, fn: () => Promise<void>): Promise<void> => {
    const startTime = Date.now()

    await fn()

    const duration = Date.now() - startTime
    console.log(`${name}:`, duration, 'ms')
}
