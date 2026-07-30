import type { IconName } from '../components/icons'
import {
    FOUNDER_PLAN_PRICE_LABEL,
    FOUNDER_PLAN_REGULAR_PRICE_LABEL,
    FOUNDER_PLAN_SPOTS,
    PROFITLY_LAUNCH_LABEL,
} from './constants'

export interface PlanFeature {
    text: string
    /* Funcionalidade prometida ao plano, mas que ainda não está no ar. */
    soon?: boolean
    /* Destaque visual para o diferencial mais importante do plano. */
    highlight?: boolean
}

export interface PlanFeatureGroup {
    icon: IconName
    title: string
    features: PlanFeature[]
}

export type PlanCtaAction = 'leadForm' | 'quiz'

export interface Plan {
    id: string
    name: string
    tagline: string
    priceLabel: string
    /* Preço cheio exibido riscado ao lado do `priceLabel`, como sinal de promoção. */
    priceStrikeLabel?: string
    priceNote: string
    badge?: string
    featured?: boolean
    /* Aviso exibido acima dos grupos de funcionalidades (ex.: herda tudo de outro plano). */
    includesNote?: string
    groups: PlanFeatureGroup[]
    ctaLabel: string
    ctaAction: PlanCtaAction
}

export const PLANS: Plan[] = [
    {
        id: 'free',
        name: 'Plano Grátis',
        tagline: 'O essencial para acompanhar a sua carteira e analisar ações da B3.',
        priceLabel: 'R$ 0',
        priceNote: 'Para sempre, sem cartão de crédito',
        groups: [
            {
                icon: 'wallet',
                title: 'Carteira de investimentos',
                features: [
                    { text: 'Adicione ativos manualmente' },
                    { text: 'Adicione ativos importando pelo extrato da B3' },
                    { text: 'Analise a evolução do seu patrimônio, renda e proventos' },
                    {
                        text: 'Personalização completa da forma como sua carteira é apresentada — gráficos, classes etc. Deixe seus investimentos do seu jeito de analisar',
                        soon: true,
                    },
                ],
            },
            {
                icon: 'chart',
                title: 'Tela de análise de ações',
                features: [
                    { text: 'Preço teto por Graham' },
                    { text: 'Dividendos' },
                    { text: 'Cotação' },
                    { text: 'Vários indicadores fundamentalistas' },
                    { text: 'Notícias do mercado de ações e dos seus ativos', soon: true },
                    { text: 'Comparador de ativos' },
                    { text: 'Acesso ao mercado global de ações', soon: true },
                ],
            },
        ],
        ctaLabel: 'Avise-me no lançamento',
        ctaAction: 'leadForm',
    },
    {
        id: 'founder',
        name: 'Plano Fundador',
        tagline:
            'Muito mais barato que o plano comum, vitalício no mesmo preço e com todas as funcionalidades futuras inclusas — inclusive as que outros planos não vão ter.',
        priceLabel: FOUNDER_PLAN_PRICE_LABEL,
        priceStrikeLabel: FOUNDER_PLAN_REGULAR_PRICE_LABEL,
        priceNote: `Somente para as ${FOUNDER_PLAN_SPOTS} primeiras vagas · vitalício · lançamento em ${PROFITLY_LAUNCH_LABEL}`,
        badge: `${FOUNDER_PLAN_SPOTS} vagas · ${FOUNDER_PLAN_PRICE_LABEL} vitalício`,
        featured: true,
        includesNote: 'Tudo o que tem no Plano Grátis, e muito mais:',
        groups: [
            {
                icon: 'wallet',
                title: 'Carteira de investimentos',
                features: [
                    { text: 'Integração automática com a B3', soon: true },
                    { text: 'Integração automática com corretoras', soon: true },
                    { text: 'Declaração de IRPF', soon: true },
                    { text: 'Análise avançada de ações' },
                ],
            },
            {
                icon: 'chart',
                title: 'Tela de análise de ações',
                features: [
                    { text: 'Análise semanal por IA de como está cada ativo da sua carteira', soon: true },
                    { text: 'Notícias no seu WhatsApp dos ativos que você escolher', soon: true },
                    { text: 'Três diferentes cálculos de preço teto' },
                    { text: 'Análise da sua carteira por meio de IA', soon: true },
                ],
            },
            {
                icon: 'coins',
                title: 'Finanças pessoais',
                features: [
                    { text: 'Área completa de finanças pessoais' },
                    { text: 'Análise de gastos e rendas por meio de IA' },
                    { text: 'Relatório mensal da sua saúde financeira' },
                    { text: 'Insights de melhoria' },
                    { text: 'Indicação de cursos para o seu perfil de gasto', soon: true },
                ],
            },
            {
                icon: 'whatsapp',
                title: 'Canal direto com quem desenvolve',
                features: [
                    {
                        text: 'Acesso ao WhatsApp exclusivo dos desenvolvedores para sugerir melhorias e reportar bugs',
                        highlight: true,
                    },
                ],
            },
        ],
        ctaLabel: `Quero uma das ${FOUNDER_PLAN_SPOTS} vagas`,
        ctaAction: 'quiz',
    },
]
