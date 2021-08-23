export type SUI = {
    scope?: string
    primaryMetric: SMetric
    secondaryMetric: SMetric
    menuVisibility: SVisibility
    judgmentVisibility: SVisibility
    comboVisibility: SVisibility
    primaryMetricVisibility: SVisibility
    secondaryMetricVisibility: SVisibility
    judgmentAnimation: SAnimation
    comboAnimation: SAnimation
    judgmentErrorStyle: SJudgmentErrorStyle
    judgmentErrorPlacement: SJudgmentErrorPlacement
    judgmentErrorMin: number
}

export type SMetric =
    | 'arcade'
    | 'accuracy'
    | 'life'
    | 'perfectRate'
    | 'errorHeatmap'

export type SVisibility = {
    scale: number
    alpha: number
}

export type SAnimation = {
    scale: STween
    alpha: STween
}

export type STween = {
    from: number
    to: number
    duration: number
    ease: string
}

export type SJudgmentErrorStyle =
    | 'none'
    | 'plus'
    | 'minus'
    | 'arrowUp'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'triangleUp'
    | 'triangleDown'
    | 'triangleLeft'
    | 'triangleRight'

export type SJudgmentErrorPlacement = 'both' | 'left' | 'right'
