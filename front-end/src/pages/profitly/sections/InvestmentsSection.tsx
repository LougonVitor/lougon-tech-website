import { FeatureItem } from '../components/FeatureItem'
import { Icon } from '../components/icons'
import { SlideShow } from '../components/SlideShow'
import { SECTION_IDS } from '../data/constants'
import '../components/SplitPanel.css'

import invWallet from '../../../assets/profitly/inv-wallet.png'
import invStockAnalysis from '../../../assets/profitly/inv-stock-analysis.png'
import invStockComparator from '../../../assets/profitly/inv-stock-comparator.png'

const investmentSlides = [
    { src: invWallet, alt: 'Carteira de investimentos do Profitly' },
    { src: invStockAnalysis, alt: 'Análise de ativo do Profitly' },
    { src: invStockComparator, alt: 'Comparador de ações do Profitly' },
]

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
                    <p className="pf-sub" style={{ marginBottom: 14 }}>
                        Ações, FIIs, fundos, Tesouro Direto e criptomoedas — tudo centralizado, com análises que hoje
                        só investidores avançados costumam ter acesso.
                    </p>
                    <div className="pf-inv-list">
                        <FeatureItem
                            icon="globe"
                            title="Carteira unificada, com ativos globais"
                            description="Ações, FIIs, fundos, Tesouro, cripto e ativos internacionais em um só painel."
                        />
                        <FeatureItem
                            icon="scan"
                            title="Análise avançada por ativo"
                            description="30+ indicadores, preço justo (Graham, Bazin, Gordon) e Magic Number de FIIs."
                        />
                        <FeatureItem
                            icon="brain"
                            title="Assessor de investimentos com IA"
                            description="A IA acompanha sua carteira, aponta riscos e sugere melhorias."
                        />
                        <FeatureItem
                            icon="layers"
                            title="Integração automática com B3 e corretoras"
                            description="Sincronização direta, sem importar extrato manualmente."
                        />
                        <FeatureItem
                            icon="palette"
                            title="Visualização 100% personalizável"
                            description="Monte os gráficos do seu jeito de analisar."
                        />
                    </div>
                    <a href={`#${SECTION_IDS.founder}`} className="pf-inv-cta">
                        Saiba tudo o que a Profitly pode te oferecer
                        <Icon name="arrowRight" size={15} />
                    </a>
                </div>

                <div className="pf-inv-visual-slot">
                    <SlideShow images={investmentSlides} />
                </div>
            </div>
        </section>
    )
}
