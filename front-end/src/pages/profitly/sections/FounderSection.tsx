import { Icon } from '../components/icons'
import { useCountdown } from '../hooks/useCountdown'
import { FOUNDER_PLAN_SPOTS, PROFITLY_LAUNCH_DATE, SECTION_IDS } from '../data/constants'
import './FounderSection.css'

const FOUNDER_CONTACT_MAILTO = 'mailto:tech@lougon.tech?subject=Quero%20ser%20fundador%20da%20Profitly'

function pad(value: number) {
    return value.toString().padStart(2, '0')
}

const PERKS = [
    { icon: 'target' as const, title: '50 vagas', text: 'Acesso limitado e exclusivo, sem exceções.' },
    { icon: 'coins' as const, title: 'Preço imperdível', text: 'O valor mais baixo que a Profitly já vai oferecer.' },
    { icon: 'lock' as const, title: 'Vitalício', text: 'O preço de fundador não muda, para sempre.' },
    { icon: 'sparkles' as const, title: 'Tudo incluso', text: 'Acesso a todas as funcionalidades futuras, sem custo extra.' },
]

export function FounderSection() {
    const countdown = useCountdown(PROFITLY_LAUNCH_DATE)

    return (
        <section id={SECTION_IDS.founder} className="pf-section pf-founder">
            <div className="pf-founder-content">
                <div className="pf-founder-crown">
                    <Icon name="crown" size={26} />
                </div>

                <div className="pf-eyebrow">Plano Fundador · Lançamento 05/09/2026</div>
                <h2 className="pf-title pf-title-lg">Seja um fundador da Profitly</h2>
                <p className="pf-sub pf-founder-sub">
                    Enquanto a Profitly está em desenvolvimento, quem assina o Plano Fundador paga menos e garante
                    acesso antecipado a tudo que vier depois — para sempre.
                </p>

                <div className="pf-countdown" aria-label="Contagem regressiva para o lançamento">
                    {countdown.isPast ? (
                        <div className="pf-countdown-unit">
                            <div className="pf-countdown-num">🎉</div>
                            <div className="pf-countdown-label">Lançado</div>
                        </div>
                    ) : (
                        <>
                            <div className="pf-countdown-unit">
                                <div className="pf-countdown-num">{countdown.days}</div>
                                <div className="pf-countdown-label">Dias</div>
                            </div>
                            <div className="pf-countdown-unit">
                                <div className="pf-countdown-num">{pad(countdown.hours)}</div>
                                <div className="pf-countdown-label">Horas</div>
                            </div>
                            <div className="pf-countdown-unit">
                                <div className="pf-countdown-num">{pad(countdown.minutes)}</div>
                                <div className="pf-countdown-label">Min</div>
                            </div>
                            <div className="pf-countdown-unit">
                                <div className="pf-countdown-num">{pad(countdown.seconds)}</div>
                                <div className="pf-countdown-label">Seg</div>
                            </div>
                        </>
                    )}
                </div>

                <div className="pf-founder-perks">
                    {PERKS.map((perk) => (
                        <div key={perk.title} className="pf-founder-perk">
                            <span className="pf-founder-perk-icon">
                                <Icon name={perk.icon} size={22} />
                            </span>
                            <span className="pf-founder-perk-text">
                                <strong>{perk.title}</strong>
                                {perk.text}
                            </span>
                        </div>
                    ))}
                </div>

                <a href={FOUNDER_CONTACT_MAILTO} className="pf-btn-primary">
                    Quero ser fundador da Profitly <Icon name="arrowRight" size={16} />
                </a>
                <p className="pf-founder-spots">Apenas {FOUNDER_PLAN_SPOTS} vagas disponíveis para o Plano Fundador.</p>
            </div>
        </section>
    )
}
