import { Plugin } from 'esbuild'

export const preBuildPlugin = (): Plugin => ({
    name: 'PreBuild',
    setup(build) {
        let startTime: number

        build.onStart(() => {
            startTime = Date.now()

            console.log()
            console.log('Building...')
        })

        build.onEnd(async (result) => {
            if (result.errors.length) return

            const duration = Date.now() - startTime
            console.log('Bundling:', duration, 'ms')
        })
    },
})
