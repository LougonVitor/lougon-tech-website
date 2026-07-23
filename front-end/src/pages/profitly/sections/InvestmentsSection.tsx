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
                        <FeatureItem
                            icon="brain"
                            title="Análise inteligente da carteira com IA"
                            description="A IA analisa sua carteira e aponta possíveis pontos de melhoria e riscos de concentração."
                        />
                        <FeatureItem
                            icon="calendar"
                            title="Relatório diário e semanal de desempenho"
                            description="Um resumo automático de como seus ativos performaram, direto para você."
                        />
                        <FeatureItem
                            icon="sparkles"
                            title="Assessor de investimentos por IA"
                            description="Uma IA que analisa sua carteira continuamente e fornece insights personalizados."
                        />
                        <FeatureItem
                            icon="scan"
                            title="Integração automática com a B3"
                            description="Sincronização direta com a B3, sem precisar importar extrato manualmente."
                        />
                        <FeatureItem
                            icon="layers"
                            title="Integração direta com corretoras"
                            description="Dados de carteira e investimentos trazidos automaticamente direto da sua corretora."
                        />
                    </div>
                </div>

                <div className="pf-inv-visual-slot" />
            </div>
        </section>
    )
}
