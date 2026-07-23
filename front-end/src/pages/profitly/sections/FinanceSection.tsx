import { FeatureItem } from '../components/FeatureItem'
import { Icon } from '../components/icons'
import { SECTION_IDS } from '../data/constants'
import '../components/SplitPanel.css'

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
                            title="Orçamento mensal completo"
                            description="Salário, rendas avulsas e gastos categorizados, com status de pago, parcial e pendente."
                        />
                        <FeatureItem
                            icon="calendar"
                            title="Gastos e rendas recorrentes"
                            description="Cadastre uma vez e o Profitly injeta automaticamente em todo período novo."
                        />
                        <FeatureItem
                            icon="bell"
                            title="Limites de gasto por categoria"
                            description="Alertas visuais quando você chega a 80% e ultrapassa 100% do limite definido."
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
                            icon="layers"
                            title="Exportação e importação em CSV"
                            description="Exporte seu histórico ou importe gastos em lote, com até 12 meses de retenção."
                        />
                    </div>
                </div>

                <div className="pf-inv-panel">
                    <div className="pf-inv-panel-head">
                        <Icon name="crown" size={18} className="pf-accent" />
                        <span className="pf-inv-panel-title">Exclusivo do Plano Fundador</span>
                    </div>
                    <p className="pf-inv-panel-sub">
                        Novas funcionalidades de finanças pensadas para quem quer ir além do controle básico de gastos.
                    </p>

                    <div className="pf-inv-panel-list">
                        <FeatureItem
                            status="soon"
                            icon="brain"
                            title="Análise dos gastos com IA"
                            description="A IA identifica padrões, anomalias e oportunidades de economia no seu orçamento."
                        />
                        <FeatureItem
                            status="soon"
                            icon="target"
                            title="Direcionamentos personalizados"
                            description="Conteúdos e cursos recomendados de acordo com o seu padrão de controle financeiro."
                        />
                        <FeatureItem
                            status="soon"
                            icon="sparkles"
                            title="Metas financeiras inteligentes"
                            description="Planejamento de metas com projeções ajustadas ao seu comportamento de gasto real."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
