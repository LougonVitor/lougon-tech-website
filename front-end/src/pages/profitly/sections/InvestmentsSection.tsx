import { FeatureItem } from '../components/FeatureItem'
import { Icon } from '../components/icons'
import { SECTION_IDS } from '../data/constants'
import '../components/SplitPanel.css'

export function InvestmentsSection() {
    return (
        <section id={SECTION_IDS.investments} className="pf-section pf-section-alt">
            <div className="pf-eyebrow">
                <Icon name="wallet" size={14} /> Trilha de investimentos
            </div>
            <h2 className="pf-title pf-title-md">
                Controle total da sua <span className="pf-accent">carteira de investimentos</span>
            </h2>

            <div className="pf-inv-layout">
                <div className="pf-inv-intro">
                    <p className="pf-sub" style={{ marginBottom: 20 }}>
                        Ações, FIIs, fundos, Tesouro Direto e criptomoedas — tudo centralizado, com análises que hoje
                        só investidores avançados costumam ter acesso.
                    </p>
                    <div className="pf-inv-list">
                        <FeatureItem
                            icon="layers"
                            title="Carteira unificada"
                            description="Ações, FIIs, fundos (fiagro, FI-Infra, FIDC, FIP), Tesouro Direto e cripto em um só painel."
                        />
                        <FeatureItem
                            icon="receipt"
                            title="Importação de extratos B3"
                            description="Importe o extrato da B3 quantas vezes quiser: reimportações não duplicam lançamentos."
                        />
                        <FeatureItem
                            icon="trendingUp"
                            title="Preço médio e lucro realizado"
                            description="Compras e vendas calculam preço médio automaticamente e mostram o lucro já realizado."
                        />
                        <FeatureItem
                            icon="chart"
                            title="Evolução do patrimônio"
                            description="Compare o quanto você aportou com o valor de mercado da carteira, mês a mês."
                        />
                        <FeatureItem
                            icon="coins"
                            title="Histórico de proventos"
                            description="Dividendos e JCP de ações, FIIs e fundos organizados automaticamente por data."
                        />
                        <FeatureItem
                            icon="scan"
                            title="Análise avançada por ativo"
                            description="30+ indicadores, preço justo (Graham, Bazin, Gordon), Magic Number de FIIs, Fear & Greed de cripto e mais."
                        />
                    </div>
                </div>

                <div className="pf-inv-panel">
                    <div className="pf-inv-panel-head">
                        <Icon name="crown" size={18} className="pf-accent" />
                        <span className="pf-inv-panel-title">Exclusivo do Plano Fundador</span>
                    </div>
                    <p className="pf-inv-panel-sub">
                        Assinando agora, você garante acesso a todas essas funcionalidades assim que forem lançadas —
                        sem pagar nada a mais por isso.
                    </p>

                    <div className="pf-inv-panel-list">
                        <FeatureItem
                            status="soon"
                            icon="brain"
                            title="Análise inteligente da carteira com IA"
                            description="A IA analisa sua carteira e aponta possíveis pontos de melhoria e riscos de concentração."
                        />
                        <FeatureItem
                            status="soon"
                            icon="calendar"
                            title="Relatório diário e semanal de desempenho"
                            description="Um resumo automático de como seus ativos performaram, direto para você."
                        />
                        <FeatureItem
                            status="soon"
                            icon="sparkles"
                            title="Assessor de investimentos por IA"
                            description="Uma IA que analisa sua carteira continuamente e fornece insights personalizados."
                        />
                    </div>

                    <div className="pf-inv-roadmap">
                        <span className="pf-inv-roadmap-chip">
                            <Icon name="scan" size={14} /> Integração automática com a B3
                        </span>
                        <span className="pf-inv-roadmap-chip">
                            <Icon name="layers" size={14} /> Integração direta com corretoras
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
