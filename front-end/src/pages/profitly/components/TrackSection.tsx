import type { ReactNode } from 'react'
import { FeatureItem } from './FeatureItem'
import { Icon, type IconName } from './icons'
import { SlideShow } from './SlideShow'
import { SECTION_IDS } from '../data/constants'
import './SplitPanel.css'

export interface TrackFeature {
    icon: IconName
    title: string
    description: string
}

interface TrackSectionProps {
    id: string
    /* Classes extras da seção (ex.: `pf-section-alt` para alternar o fundo). */
    className?: string
    eyebrow: { icon: IconName; text: string }
    /* Recebe JSX porque o título destaca parte do texto com `pf-accent`. */
    title: ReactNode
    intro: string
    features: TrackFeature[]
    slides: { src: string; alt: string }[]
}

/* Layout compartilhado das trilhas de investimentos e de finanças pessoais:
   texto com a lista de recursos à esquerda e o carrossel de prints à direita. */
export function TrackSection({ id, className, eyebrow, title, intro, features, slides }: TrackSectionProps) {
    return (
        <section id={id} className={`pf-section${className ? ` ${className}` : ''}`}>
            <div className="pf-eyebrow">
                <Icon name={eyebrow.icon} size={14} /> {eyebrow.text}
            </div>
            <h2 className="pf-title pf-title-md">{title}</h2>

            <div className="pf-inv-layout">
                <div className="pf-inv-intro">
                    <p className="pf-sub pf-inv-sub">{intro}</p>

                    <div className="pf-inv-list">
                        {features.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                    <a href={`#${SECTION_IDS.founder}`} className="pf-inv-cta">
                        Saiba tudo o que a Profitly pode te oferecer
                        <Icon name="arrowRight" size={15} />
                    </a>
                </div>

                <div className="pf-inv-visual-slot">
                    <SlideShow images={slides} />
                </div>
            </div>
        </section>
    )
}
