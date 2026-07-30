import { TrackSection, type TrackFeature } from '../components/TrackSection'
import { SECTION_IDS } from '../data/constants'

import invWallet from '../../../assets/profitly/inv-wallet.png'
import invStockAnalysis from '../../../assets/profitly/inv-stock-analysis.png'
import invStockComparator from '../../../assets/profitly/inv-stock-comparator.png'

const SLIDES = [
    { src: invWallet, alt: 'Carteira de investimentos do Profitly' },
    { src: invStockAnalysis, alt: 'Análise de ativo do Profitly' },
    { src: invStockComparator, alt: 'Comparador de ações do Profitly' },
]

const FEATURES: TrackFeature[] = [
    {
        icon: 'globe',
        title: 'Carteira unificada, com ativos globais',
        description: 'Ações, FIIs, fundos, Tesouro, cripto e ativos internacionais em um só painel.',
    },
    {
        icon: 'scan',
        title: 'Análise avançada por ativo',
        description: '30+ indicadores, preço justo (Graham, Bazin, Gordon) e Magic Number de FIIs.',
    },
    {
        icon: 'brain',
        title: 'Assessor de investimentos com IA',
        description: 'A IA acompanha sua carteira, aponta riscos e sugere melhorias.',
    },
    {
        icon: 'layers',
        title: 'Integração automática com B3 e corretoras',
        description: 'Sincronização direta, sem importar extrato manualmente.',
    },
    {
        icon: 'palette',
        title: 'Visualização 100% personalizável',
        description: 'Monte os gráficos do seu jeito de analisar.',
    },
]

export function InvestmentsSection() {
    return (
        <TrackSection
            id={SECTION_IDS.investments}
            className="pf-section-alt"
            eyebrow={{ icon: 'wallet', text: 'Trilha de investimentos' }}
            title={
                <>
                    Controle total da sua <span className="pf-accent">carteira de investimentos</span>
                </>
            }
            intro="Ações, FIIs, fundos, Tesouro Direto e criptomoedas — tudo centralizado, com análises que hoje só investidores avançados costumam ter acesso."
            features={FEATURES}
            slides={SLIDES}
        />
    )
}
