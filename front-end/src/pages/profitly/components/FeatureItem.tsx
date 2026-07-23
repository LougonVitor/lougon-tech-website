import type { ReactNode } from 'react'
import { Icon } from './icons'
import './FeatureItem.css'

type IconProps = Parameters<typeof Icon>[0]

interface FeatureItemProps {
    icon: IconProps['name']
    title: string
    description: ReactNode
    status?: 'live' | 'soon'
}

export function FeatureItem({ icon, title, description, status = 'live' }: FeatureItemProps) {
    return (
        <div className="pf-feature">
            <div className={`pf-feature-icon ${status === 'soon' ? 'pf-feature-icon-soon' : ''}`}>
                <Icon name={icon} size={19} />
            </div>
            <div className="pf-feature-body">
                <div className="pf-feature-head">
                    <span className="pf-feature-title">{title}</span>
                    {status === 'soon' && <span className="pf-pill pf-pill-soon">Em breve</span>}
                </div>
                <p className="pf-feature-desc">{description}</p>
            </div>
        </div>
    )
}
