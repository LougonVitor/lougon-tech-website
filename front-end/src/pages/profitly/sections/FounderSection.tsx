import { Icon } from '../components/icons'
import { PlanCard } from '../components/PlanCard'
import { FOUNDER_PLAN_PRICE_LABEL, FOUNDER_PLAN_SPOTS, PROFITLY_LAUNCH_LABEL, SECTION_IDS } from '../data/constants'
import { PLANS } from '../data/plans'
import './FounderSection.css'

const PERKS = [
    { icon: 'target' as const, title: `${FOUNDER_PLAN_SPOTS} vagas`, text: 'Acesso limitado e exclusivo, sem exceções.' },
    {
        icon: 'coins' as const,
        title: FOUNDER_PLAN_PRICE_LABEL,
        text: 'O valor mais baixo que a Profitly já vai oferecer.',
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
                    A Profitly será lançada em {PROFITLY_LAUNCH_LABEL}. Enquanto isso, quem assina o Plano Fundador
                    paga menos e garante acesso antecipado a tudo que vier depois — para sempre.
                </p>

                <div className="pf-founder-offer">
                    <span className="pf-founder-offer-price">{FOUNDER_PLAN_PRICE_LABEL}</span>
                    <span className="pf-founder-offer-text">
                        <strong>Somente para as {FOUNDER_PLAN_SPOTS} primeiras vagas.</strong>
                        Preço vitalício de fundador — depois das {FOUNDER_PLAN_SPOTS} assinaturas, acabou.
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
                    Apenas as {FOUNDER_PLAN_SPOTS} primeiras vagas entram no Plano Fundador por{' '}
                    {FOUNDER_PLAN_PRICE_LABEL}.
                </p>
            </div>
        </section>
    )
}
