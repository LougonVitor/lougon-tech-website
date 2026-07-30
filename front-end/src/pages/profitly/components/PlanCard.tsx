import { useCallback, useState } from 'react'
import type { Plan } from '../data/plans'
import { Icon } from './icons'
import { LeadFormModal } from './LeadFormModal'
import { FounderQuizModal } from './FounderQuizModal'
import './PlanCard.css'

interface PlanCardProps {
    plan: Plan
}

export function PlanCard({ plan }: PlanCardProps) {
    const [modalOpen, setModalOpen] = useState(false)
    /* Estável entre renders: o Modal usa `onClose` como dependência de efeito. */
    const closeModal = useCallback(() => setModalOpen(false), [])

    return (
        <div className={`pf-plan ${plan.featured ? 'pf-plan-featured' : ''}`}>
            {plan.badge && (
                <span className="pf-plan-badge">
                    <Icon name="crown" size={13} /> {plan.badge}
                </span>
            )}

            <div className="pf-plan-head">
                <h3 className="pf-plan-name">{plan.name}</h3>
                <p className="pf-plan-tagline">{plan.tagline}</p>
                <div className="pf-plan-price">
                    {plan.priceStrikeLabel && (
                        <span className="pf-plan-price-old">{plan.priceStrikeLabel}</span>
                    )}
                    {plan.priceLabel}
                    {plan.priceHint && <span className="pf-plan-price-hint">{plan.priceHint}</span>}
                </div>
                <div className="pf-plan-price-note">{plan.priceNote}</div>

                {plan.spots && (
                    <div className="pf-plan-spots">
                        <div className="pf-plan-spots-head">
                            <span className="pf-plan-spots-count">
                                <strong>
                                    {plan.spots.taken} de {plan.spots.total}
                                </strong>{' '}
                                vagas preenchidas
                            </span>
                            <span className="pf-plan-spots-urgency">
                                <Icon name="clock" size={12} />
                                Corra: restam {plan.spots.total - plan.spots.taken}
                            </span>
                        </div>
                        <div
                            className="pf-plan-spots-track"
                            role="progressbar"
                            aria-valuenow={plan.spots.taken}
                            aria-valuemin={0}
                            aria-valuemax={plan.spots.total}
                            aria-label={`${plan.spots.taken} de ${plan.spots.total} vagas preenchidas`}
                        >
                            <span
                                className="pf-plan-spots-fill"
                                style={{ width: `${Math.round((plan.spots.taken / plan.spots.total) * 100)}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {plan.includesNote && (
                <div className="pf-plan-includes">
                    <Icon name="sparkles" size={15} /> {plan.includesNote}
                </div>
            )}

            <div className="pf-plan-groups">
                {plan.groups.map((group) => (
                    <div key={group.title} className="pf-plan-group">
                        <div className="pf-plan-group-title">
                            <Icon name={group.icon} size={15} /> {group.title}
                        </div>
                        <ul className="pf-plan-features">
                            {group.features.map((feature) => (
                                <li
                                    key={feature.text}
                                    className={`pf-plan-feature ${feature.highlight ? 'pf-plan-feature-highlight' : ''}`}
                                >
                                    <span className={`pf-plan-feature-mark ${feature.soon ? 'pf-plan-feature-mark-soon' : ''}`}>
                                        <Icon name={feature.soon ? 'clock' : 'check'} size={12} />
                                    </span>
                                    <span className="pf-plan-feature-text">
                                        {feature.text}
                                        {feature.soon && (
                                            <span className="pf-pill pf-pill-soon pf-plan-feature-pill">
                                                Em desenvolvimento
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <button
                type="button"
                className={plan.featured ? 'pf-btn-primary pf-plan-cta' : 'pf-btn-outline pf-plan-cta'}
                onClick={() => setModalOpen(true)}
            >
                {plan.ctaLabel} <Icon name="arrowRight" size={15} />
            </button>

            {modalOpen &&
                (plan.ctaAction === 'quiz' ? (
                    <FounderQuizModal onClose={closeModal} />
                ) : (
                    <LeadFormModal onClose={closeModal} />
                ))}
        </div>
    )
}
