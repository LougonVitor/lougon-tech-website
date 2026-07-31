import type { IconName } from '../components/icons'
import {
    FOUNDER_PLAN_PRICE_LABEL,
    FOUNDER_PLAN_REGULAR_PRICE_LABEL,
    FOUNDER_PLAN_SPOTS,
    FOUNDER_PLAN_SPOTS_TAKEN,
    PROFITLY_LAUNCH_LABEL,
} from './constants'

export interface PlanFeature {
    text: string
    /* Funcionalidade prometida ao plano, mas que ainda não está no ar. */
    soon?: boolean
    /* `false` troca a marca de check pela de indisponível: existe só no Plano Fundador. */
    included: boolean
}

export interface PlanFeatureGroup {
    icon: IconName
    title: string
    features: PlanFeature[]
}

export type PlanCtaAction = 'leadForm' | 'quiz'

/* Vagas limitadas do plano, exibidas como barra de progresso. */
export interface PlanSpots {
    taken: number
    total: number
}

/* Benefício exclusivo destacado acima da lista de funcionalidades. */
export interface PlanPerk {
    icon: IconName
    text: string
}

export interface Plan {
    id: string
    name: string
    tagline: string
    priceLabel: string
    /* Preço cheio exibido riscado ao lado do `priceLabel`, como sinal de promoção. */
    priceStrikeLabel?: string
    /* Ressalva curta ao lado do preço (ex.: a cobrança que gera esse valor). */
    priceHint?: string
    priceNote: string
    badge?: string
    featured?: boolean
    spots?: PlanSpots
    perk?: PlanPerk
    groups: PlanFeatureGroup[]
    /* Fecho exibido abaixo da lista de funcionalidades. */
    footNote?: string
    ctaLabel: string
    ctaAction: PlanCtaAction
}

interface FeatureDefinition {
    text: string
    soon?: boolean
    /* Também disponível no Plano Grátis. Sem a marca, a funcionalidade é só do Fundador. */
    free?: boolean
}

interface FeatureGroupDefinition {
    icon: IconName
    title: string
    features: FeatureDefinition[]
}

/* Lista única para os dois cards: o Fundador tem tudo, o Grátis só o que está marcado
   como `free`. Assim os planos ficam comparáveis linha a linha, em vez de cada card
   mostrar funcionalidades que o outro nem cita. */
const FEATURE_GROUPS: FeatureGroupDefinition[] = [
    {
        icon: 'wallet',
        title: 'Investimento',
        features: [
            {
                text: 'Carteira completa para acompanhar seus investimentos, proventos, EUA',
                free: true,
            },
            { text: 'Preço teto por Graham', free: true },
            { text: 'Tela de comparador de ativos, com comparação fundamentalista', free: true },
            {
                text: 'Personalização completa da forma como sua carteira é apresentada — gráficos, classes etc. Deixe seus investimentos do seu jeito de analisar',
                free: true,
            },
            { text: 'Notícias pelo WhatsApp dos ativos que você possui na carteira', free: true },
            { text: 'Preço teto por Bazin, Gordon e média ponderada dos três preços teto' },
            {
                text: 'IA que acompanha seus investimentos e as ações que você deseja comprar, fornecendo insights na velocidade que só uma IA consegue',
            },
            { text: 'Integração com a B3 e com corretoras de investimento', soon: true },
            { text: 'Declaração de IRPF', soon: true },
        ],
    },
    {
        icon: 'coins',
        title: 'Finanças pessoais',
        features: [
            { text: 'Tela para controle de gastos, renda, cartão de crédito, metas e dívidas' },
            { text: 'IA que analisa a sua saúde financeira e fornece insights' },
            { text: 'Indicação de cursos para o seu perfil de gasto' },
        ],
    },
]

function groupsFor(plan: 'free' | 'founder'): PlanFeatureGroup[] {
    return FEATURE_GROUPS.map((group) => ({
        icon: group.icon,
        title: group.title,
        features: group.features.map(({ text, soon, free }) => ({
            text,
            soon,
            included: plan === 'founder' || Boolean(free),
        })),
    }))
}

export const PLANS: Plan[] = [
    {
        id: 'free',
        name: 'Plano Grátis',
        tagline: 'O essencial para acompanhar a sua carteira e analisar ações da B3 e dos EUA.',
        priceLabel: 'R$ 0',
        priceNote: 'Para sempre, sem cartão de crédito',
        groups: groupsFor('free'),
        ctaLabel: 'Avise-me no lançamento',
        ctaAction: 'leadForm',
    },
    {
        id: 'founder',
        name: 'Plano Fundador',
        tagline:
            'Para quem ajuda a construir a Profitly ainda na fase de desenvolvimento e garante o menor preço que a plataforma vai ter.',
        priceLabel: FOUNDER_PLAN_PRICE_LABEL,
        priceStrikeLabel: FOUNDER_PLAN_REGULAR_PRICE_LABEL,
        priceHint: 'no plano anual',
        priceNote: `Somente para as ${FOUNDER_PLAN_SPOTS} primeiras vagas · vitalício · lançamento em ${PROFITLY_LAUNCH_LABEL}`,
        badge: `${FOUNDER_PLAN_SPOTS} vagas · ${FOUNDER_PLAN_PRICE_LABEL} vitalício`,
        featured: true,
        spots: { taken: FOUNDER_PLAN_SPOTS_TAKEN, total: FOUNDER_PLAN_SPOTS },
        perk: {
            icon: 'whatsapp',
            text: 'Acesso ao WhatsApp exclusivo dos desenvolvedores para sugerir melhorias e reportar bugs',
        },
        groups: groupsFor('founder'),
        footNote:
            'Muito mais está por vir: comprando o Plano Fundador agora, você garante acesso a tudo que ainda será construído e participa fornecendo insights e ideias.',
        ctaLabel: `Quero uma das ${FOUNDER_PLAN_SPOTS} vagas`,
        ctaAction: 'quiz',
    },
]
