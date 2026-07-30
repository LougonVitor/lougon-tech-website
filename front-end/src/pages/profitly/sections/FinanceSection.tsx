import { TrackSection, type TrackFeature } from '../components/TrackSection'
import { SECTION_IDS } from '../data/constants'

import finHero from '../../../assets/profitly/fin-hero.png'
import finExpenses from '../../../assets/profitly/fin-expenses.png'
import finGoals from '../../../assets/profitly/fin-goals.png'

const SLIDES = [
    { src: finHero, alt: 'Painel de finanças pessoais do Profitly' },
    { src: finExpenses, alt: 'Evolução de gastos e renda do Profitly' },
    { src: finGoals, alt: 'Objetivos e metas do Profitly' },
]

const FEATURES: TrackFeature[] = [
    {
        icon: 'receipt',
        title: 'Orçamento mensal com limites de gasto',
        description: 'Rendas e gastos categorizados, com alerta ao passar do limite.',
    },
    {
        icon: 'chart',
        title: 'Comparação mês a mês',
        description: 'A variação dos seus gastos e o planejado contra o real.',
    },
    {
        icon: 'wallet',
        title: 'Linha de investimento conectada',
        description: "A linha 'Investimento' puxa automaticamente da sua carteira.",
    },
    {
        icon: 'brain',
        title: 'Análise dos gastos com IA',
        description: 'Padrões, anomalias e oportunidades de economia no orçamento.',
    },
    {
        icon: 'palette',
        title: 'Visualização 100% personalizável',
        description: 'Monte os gráficos do seu jeito de analisar.',
    },
]

export function FinanceSection() {
    return (
        <TrackSection
            id={SECTION_IDS.finance}
            eyebrow={{ icon: 'coins', text: 'Trilha de finanças pessoais' }}
            title={
                <>
                    Organize sua <span className="pf-accent">vida financeira</span> em um só lugar
                </>
            }
            intro="Orçamento mensal, gastos recorrentes e alertas de limite — sem precisar de planilha, e já conectado com a sua carteira de investimentos."
            features={FEATURES}
            slides={SLIDES}
        />
    )
}
