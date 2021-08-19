export type SUI = {
    scope?: string
    primaryMetric: SMetric
    secondaryMetric: SMetric
}

export type SMetric = 'arcade' | 'accuracy' | 'life'
