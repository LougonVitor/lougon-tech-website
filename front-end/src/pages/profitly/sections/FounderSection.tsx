import { Icon } from '../components/icons'
import { PlanCard } from '../components/PlanCard'
import {
    FOUNDER_PLAN_PRICE_LABEL,
    FOUNDER_PLAN_REGULAR_PRICE_LABEL,
    FOUNDER_PLAN_SPOTS,
    FOUNDER_PLAN_SPOTS_TAKEN,
    PROFITLY_LAUNCH_LABEL,
    SECTION_IDS,
} from '../data/constants'
import { PLANS } from '../data/plans'
import './FounderSection.css'

const SPOTS_LEFT = FOUNDER_PLAN_SPOTS - FOUNDER_PLAN_SPOTS_TAKEN

const SPOTS_FILLED_PERCENT = Math.round((FOUNDER_PLAN_SPOTS_TAKEN / FOUNDER_PLAN_SPOTS) * 100)

const STEPS = [
    {
        icon: 'flask' as const,
        title: 'A Profitly ainda está sendo construída',
        text: `O lançamento é em ${PROFITLY_LAUNCH_LABEL}. Até lá, quem é fundador usa a plataforma antes de todo mundo e ajuda a desenvolvê-la: as sugestões e os bugs reportados no grupo dos devs entram na fila de prioridade.`,
    },
    {
        icon: 'coins' as const,
        title: 'Por ajudar nessa fase, você paga muito menos',
        text: `Essa é a nossa contrapartida por você entrar antes do lançamento e construir a Profitly junto com a gente: ${FOUNDER_PLAN_PRICE_LABEL} em vez dos ${FOUNDER_PLAN_REGULAR_PRICE_LABEL}/mês que o plano vai custar depois.`,
    },
    {
        icon: 'lock' as const,
        title: 'E esse preço nunca muda para você',
        text: 'Enquanto a assinatura estiver ativa, o valor de fundador fica congelado para sempre. O preço sobe para quem chegar depois — nunca para quem esteve aqui desde o começo.',
    },
]

const PERKS = [
    { icon: 'target' as const, title: `${FOUNDER_PLAN_SPOTS} vagas`, text: 'Acesso limitado e exclusivo, sem exceções.' },
    {
        icon: 'coins' as const,
        title: FOUNDER_PLAN_PRICE_LABEL,
        text: `Em vez de ${FOUNDER_PLAN_REGULAR_PRICE_LABEL}/mês — o valor mais baixo que a Profitly já vai oferecer.`,
    },
    { icon: 'lock' as const, title: 'Vitalício', text: 'O preço de fundador não muda, para sempre.' },
    { icon: 'sparkles' as const, title: 'Tudo incluso', text: 'Acesso a todas as funcionalidades futuras, sem custo extra.' },
]

export function FounderSection() {
    return (
        <section id={SECTION_IDS.founder} className="pf-section pf-founder">
            <div className="pf-founder-content">
                <div className="pf-founder-crown">
                    <Icon name="crown" size={26} />
                </div>

                <div className="pf-eyebrow">Plano Fundador · Lançamento em {PROFITLY_LAUNCH_LABEL}</div>
                <h2 className="pf-title pf-title-lg">Seja um fundador da Profitly</h2>
                <p className="pf-sub pf-founder-sub">
                    O Plano Fundador é para quem entra agora, ainda na fase de desenvolvimento, e ajuda a construir a
                    Profitly. Em troca, paga muito menos — e esse preço nunca muda.
                </p>

                <div className="pf-founder-how">
                    <div className="pf-founder-how-head">
                        <Icon name="crown" size={16} />
                        Como o Plano Fundador funciona
                    </div>
                    <ol className="pf-founder-steps">
                        {STEPS.map((step, index) => (
                            <li key={step.title} className="pf-founder-step">
                                <span className="pf-founder-step-number">{index + 1}</span>
                                <span className="pf-founder-step-body">
                                    <strong>
                                        <Icon name={step.icon} size={16} />
                                        {step.title}
                                    </strong>
                                    {step.text}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="pf-founder-offer">
                    <span className="pf-founder-offer-price">{PROFITLY_LAUNCH_LABEL}</span>
                    <span className="pf-founder-offer-text">
                        <strong>Data de lançamento da Profitly</strong>
                        O Plano Fundador garante preço vitalício e acesso antecipado a partir dessa data.
                    </span>
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

                <div className="pf-founder-perk pf-founder-perk-highlight">
                    <span className="pf-founder-perk-icon">
                        <Icon name="whatsapp" size={22} />
                    </span>
                    <span className="pf-founder-perk-text">
                        <strong>WhatsApp exclusivo com os devs</strong>
                        Fundadores entram no grupo direto com a equipe de desenvolvimento para sugerir
                        funcionalidades e reportar bugs.
                    </span>
                </div>

                <div className="pf-founder-spots-bar">
                    <div className="pf-founder-spots-head">
                        <span className="pf-founder-spots-count">
                            <strong>
                                {FOUNDER_PLAN_SPOTS_TAKEN} de {FOUNDER_PLAN_SPOTS}
                            </strong>{' '}
                            vagas preenchidas
                        </span>
                        <span className="pf-founder-spots-urgency">
                            <Icon name="clock" size={13} />
                            Corra: restam apenas {SPOTS_LEFT}
                        </span>
                    </div>
                    <div
                        className="pf-founder-spots-track"
                        role="progressbar"
                        aria-valuenow={FOUNDER_PLAN_SPOTS_TAKEN}
                        aria-valuemin={0}
                        aria-valuemax={FOUNDER_PLAN_SPOTS}
                        aria-label={`${FOUNDER_PLAN_SPOTS_TAKEN} de ${FOUNDER_PLAN_SPOTS} vagas preenchidas`}
                    >
                        <span className="pf-founder-spots-fill" style={{ width: `${SPOTS_FILLED_PERCENT}%` }} />
                    </div>
                </div>

                <div className="pf-plans">
                    {PLANS.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </div>

                <p className="pf-founder-fineprint">
                    <Icon name="shield" size={15} />
                    Quem entrar no Plano Fundador ajuda a bancar o desenvolvimento da plataforma e mantém o mesmo
                    preço de forma vitalícia, com todas as funcionalidades futuras liberadas — planos lançados
                    depois podem não incluir tudo isso.
                </p>

                <p className="pf-founder-spots">
                    Restam {SPOTS_LEFT} das {FOUNDER_PLAN_SPOTS} vagas do Plano Fundador por{' '}
                    {FOUNDER_PLAN_PRICE_LABEL} vitalícios.
                </p>
            </div>
        </section>
    )
}
