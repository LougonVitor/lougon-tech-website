import type { CSSProperties } from 'react'

export type IconName =
    | 'wallet'
    | 'chart'
    | 'target'
    | 'sparkles'
    | 'brain'
    | 'calendar'
    | 'layers'
    | 'trendingUp'
    | 'arrowLeft'
    | 'arrowRight'
    | 'check'
    | 'x'
    | 'lock'
    | 'crown'
    | 'clock'
    | 'shield'
    | 'coins'
    | 'receipt'
    | 'bell'
    | 'scan'
    | 'flask'
    | 'globe'
    | 'whatsapp'
    | 'palette'

const TABLER_CLASS: Record<IconName, string> = {
    wallet: 'ti-wallet',
    chart: 'ti-chart-bar',
    target: 'ti-target-arrow',
    sparkles: 'ti-sparkles',
    brain: 'ti-brain',
    calendar: 'ti-calendar',
    layers: 'ti-stack-2',
    trendingUp: 'ti-trending-up',
    arrowLeft: 'ti-arrow-left',
    arrowRight: 'ti-arrow-right',
    check: 'ti-check',
    x: 'ti-x',
    lock: 'ti-lock',
    crown: 'ti-crown',
    clock: 'ti-clock',
    shield: 'ti-shield-check',
    coins: 'ti-coin',
    receipt: 'ti-receipt-2',
    bell: 'ti-bell',
    scan: 'ti-radar-2',
    flask: 'ti-flask',
    globe: 'ti-world',
    whatsapp: 'ti-brand-whatsapp',
    palette: 'ti-palette',
}

interface IconProps {
    name: IconName
    size?: number
    className?: string
    style?: CSSProperties
}

export function Icon({ name, size = 22, className, style }: IconProps) {
    return (
        <i
            className={`ti ${TABLER_CLASS[name]} ${className ?? ''}`}
            style={{ fontSize: size, lineHeight: 1, ...style }}
            aria-hidden="true"
        />
    )
}
