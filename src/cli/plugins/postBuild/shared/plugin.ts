import { Plugin } from 'esbuild'
import fs from 'fs-extra'
import path from 'node:path'
import { hash } from 'sonolus-core'
import { FullSonolusCLIConfig } from '../../../config.js'
import { createPlugin } from '../../utils.js'

export const createPostBuildPlugin =
    (filenames: string[]) =>
    (config: FullSonolusCLIConfig): Plugin =>
        createPlugin('PostBuild', async () => {
            const buffers = await Promise.all(
                filenames.map((filename) => fs.readFile(path.join(config.dev, filename))),
            )
            const files = buffers.map((buffer, index) => [filenames[index], hash(buffer)])

            console.log()
            for (const [filename, hash] of files) {
                console.log(hash, filename)
            }
        })
