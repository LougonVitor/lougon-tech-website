import { Icon, type IconName } from '../components/icons'
import { SECTION_IDS } from '../data/constants'
import './AdvancedAnalysisSection.css'

interface AnalysisIdea {
    icon: IconName
    title: string
    description: string
}

const IDEAS: AnalysisIdea[] = [
    {
        icon: 'brain',
        title: 'IA que percorre os relatórios trimestrais das empresas',
        description: 'Uma IA que lê os relatórios trimestrais das empresas e resume os pontos que realmente importam para a sua análise.',
    },
    {
        icon: 'scan',
        title: 'Scanner de mercado multi-critério',
        description: 'Filtros combinando indicadores fundamentalistas e técnicos para encontrar oportunidades em segundos.',
    },
    {
        icon: 'flask',
        title: 'Backtesting de estratégias',
        description: 'Simule como uma estratégia de compra/venda teria performado no histórico real de preços.',
    },
    {
        icon: 'shield',
        title: 'Simulador de risco de carteira',
        description: 'Value at Risk, correlação entre ativos e cenários de estresse para dimensionar o risco real.',
    },
    {
        icon: 'bell',
        title: 'Alertas inteligentes personalizados',
        description: 'Receba um aviso quando um preço, indicador ou evento relevante mudar para um ativo que você acompanha.',
    },
    {
        icon: 'trendingUp',
        title: 'Fluxo institucional e volume anômalo',
        description: 'Sinais de movimentação atípica de grandes players para identificar mudanças de tendência mais cedo.',
    },
]

export function AdvancedAnalysisSection() {
    return (
        <section id={SECTION_IDS.analysis} className="pf-section pf-section-alt pf-analysis">
            <div className="pf-eyebrow">
                <Icon name="scan" size={14} /> Trilha de análise avançada de ações
            </div>
            <h2 className="pf-title pf-title-md">
                Ferramentas para investidores que levam <span className="pf-accent">análise a sério</span>
            </h2>
            <p className="pf-sub">
                Esta trilha ainda está em construção. Estas são as próximas frentes que estamos avaliando para
                investidores profissionais — e o Plano Fundador vai moldar o que entra primeiro.
            </p>

            <div className="pf-analysis-grid">
                {IDEAS.map((idea) => (
                    <div key={idea.title} className="pf-analysis-card">
                        <div className="pf-analysis-card-icon">
                            <Icon name={idea.icon} size={18} />
                        </div>
                        <div className="pf-analysis-card-title">{idea.title}</div>
                        <p className="pf-analysis-card-desc">{idea.description}</p>
                        <span className="pf-pill pf-pill-soon pf-analysis-card-pill">Em avaliação</span>
                    </div>
                ))}
            </div>

            <div className="pf-analysis-note">
                <Icon name="layers" size={15} />
                Alimentada pelos dados automáticos da integração com a B3 e corretoras, sem precisar de importação manual.
            </div>
        </section>
    )
}
