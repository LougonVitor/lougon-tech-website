import { FeatureItem } from '../components/FeatureItem'
import { Icon } from '../components/icons'
import { SlideShow } from '../components/SlideShow'
import { SECTION_IDS } from '../data/constants'
import '../components/SplitPanel.css'

import finHero from '../../../assets/profitly/fin-hero.png'
import finExpenses from '../../../assets/profitly/fin-expenses.png'
import finGoals from '../../../assets/profitly/fin-goals.png'

const financeSlides = [
    { src: finHero, alt: 'Painel de finanças pessoais do Profitly' },
    { src: finExpenses, alt: 'Evolução de gastos e renda do Profitly' },
    { src: finGoals, alt: 'Objetivos e metas do Profitly' },
]

export function FinanceSection() {
    return (
        <section id={SECTION_IDS.finance} className="pf-section">
            <div className="pf-eyebrow">
                <Icon name="coins" size={14} /> Trilha de finanças pessoais
            </div>
            <h2 className="pf-title pf-title-md">
                Organize sua <span className="pf-accent">vida financeira</span> em um só lugar
            </h2>

            <div className="pf-inv-layout">
                <div className="pf-inv-intro">
                    <p className="pf-sub" style={{ marginBottom: 20 }}>
                        Orçamento mensal, gastos recorrentes e alertas de limite — sem precisar de planilha, e já
                        conectado com a sua carteira de investimentos.
                    </p>
                    <div className="pf-inv-list">
                        <FeatureItem
                            icon="receipt"
                            title="Orçamento mensal com limites de gasto"
                            description="Salário, rendas e gastos categorizados, com alertas visuais ao chegar a 80% e ultrapassar 100% do limite."
                        />
                        <FeatureItem
                            icon="chart"
                            title="Comparação mês a mês"
                            description="Veja a variação dos seus gastos e a precisão do que foi planejado contra o real."
                        />
                        <FeatureItem
                            icon="wallet"
                            title="Linha de investimento conectada"
                            description="A linha 'Investimento' do orçamento pode puxar automaticamente da sua carteira."
                        />
                        <FeatureItem
                            icon="brain"
                            title="Análise dos gastos com IA"
                            description="A IA identifica padrões, anomalias e oportunidades de economia no seu orçamento."
                        />
                        <FeatureItem
                            icon="palette"
                            title="Visualização 100% personalizável"
                            description="Monte os gráficos e análises das suas finanças do seu jeito, do jeito que facilita a sua leitura."
                        />
                    </div>
                    <a href={`#${SECTION_IDS.founder}`} className="pf-inv-cta">
                        Saiba tudo o que a Profitly pode te oferecer
                        <Icon name="arrowRight" size={15} />
                    </a>
                </div>

                <div className="pf-inv-visual-slot">
                    <SlideShow images={financeSlides} />
                </div>
            </div>
        </section>
    )
}
