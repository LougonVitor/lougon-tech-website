import { Icon } from '../components/icons'
import { PlanCard } from '../components/PlanCard'
import {
    FOUNDER_PLAN_PRICE_LABEL,
    FOUNDER_PLAN_SPOTS,
    FOUNDER_PLAN_SPOTS_TAKEN,
    PROFITLY_LAUNCH_LABEL,
    PROFITLY_LAUNCH_LABEL_TITLE,
    SECTION_IDS,
} from '../data/constants'
import { PLANS } from '../data/plans'
import './FounderSection.css'

const SPOTS_LEFT = FOUNDER_PLAN_SPOTS - FOUNDER_PLAN_SPOTS_TAKEN

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

                <div className="pf-founder-offer">
                    <span className="pf-founder-offer-price">{PROFITLY_LAUNCH_LABEL_TITLE}</span>
                    <span className="pf-founder-offer-text">
                        <strong>Data de lançamento da Profitly</strong>
                        O Plano Fundador garante o preço mais baixo da plataforma, congelado para sempre, e todas as
                        funcionalidades que vierem depois.
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
                    Restam {SPOTS_LEFT} das {FOUNDER_PLAN_SPOTS} vagas do Plano Fundador por{' '}
                    {FOUNDER_PLAN_PRICE_LABEL} vitalícios.
                </p>
            </div>
        </section>
    )
}
