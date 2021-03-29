import { SArchetype } from './archetype'
import { SBucket } from './bucket'
import { SScript } from './script'

export type SEngineData = {
    buckets: SBucket[]
    archetypes: SArchetype[]
    scripts: (SScript | (() => SScript))[]
}
