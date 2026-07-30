import { Link } from 'react-router-dom'
import './Products.css'
import { PRODUCT_IDEA_MAILTO, productInterestMailto } from '../../config/links'
import { HOME_SECTION_IDS } from '../../config/sections'

type TagTone = 'blue' | 'teal' | 'gray' | 'gradient'

interface Product {
    name: string
    description: string
    cardClass: string
    iconClass: string
    tablerIcon: string
    /* Etiqueta no canto do card. Com `live`, vira o selo verde com ponto pulsante. */
    status: { label: string; live?: boolean }
    tags: { label: string; tone: TagTone }[]
    /* Destino do card inteiro: rota interna (`to`) ou link externo/mailto (`href`). */
    link: { label: string; to?: string; href?: string }
}

const PRODUCTS: Product[] = [
    {
        name: 'Profitly',
        description:
            'Nossa plataforma de investimentos B2C. Compare ativos, acompanhe o mercado brasileiro em tempo real e gerencie sua própria carteira — dividendos, rankings e o pulso do mercado em um só lugar.',
        cardClass: 'product-card-profitly',
        iconClass: 'product-card-icon-gradient',
        tablerIcon: 'ti-chart-candle',
        status: { label: 'Beta ao vivo', live: true },
        tags: [
            { label: 'B2C', tone: 'gradient' },
            { label: 'Investimentos', tone: 'blue' },
            { label: 'Dados em tempo real', tone: 'gray' },
        ],
        link: { label: 'Abrir Profitly', to: '/profitly' },
    },
    {
        name: 'Sistema de Auditoria',
        description:
            'Plataforma completa de gestão de auditorias. Planeje, execute e reporte auditorias internas e externas com total rastreabilidade e controle de conformidade.',
        cardClass: 'product-card-audit',
        iconClass: 'product-card-icon-blue',
        tablerIcon: 'ti-clipboard-check',
        status: { label: 'Em desenvolvimento' },
        tags: [
            { label: 'Conformidade', tone: 'blue' },
            { label: 'Relatórios', tone: 'teal' },
            { label: 'Multiusuário', tone: 'gray' },
        ],
        link: { label: 'Saiba mais', href: productInterestMailto('Sistema de Auditoria') },
    },
    {
        name: 'Sistema Odontológico',
        description:
            'Uma solução completa de gestão de clínicas — agendamento, prontuários, faturamento e histórico de tratamentos em um só lugar.',
        cardClass: 'product-card-dental',
        iconClass: 'product-card-icon-teal',
        tablerIcon: 'ti-tooth',
        status: { label: 'Em desenvolvimento' },
        tags: [
            { label: 'Agendamento', tone: 'teal' },
            { label: 'Prontuários', tone: 'blue' },
            { label: 'Faturamento', tone: 'gray' },
        ],
        link: { label: 'Saiba mais', href: productInterestMailto('Sistema Odontológico') },
    },
    {
        name: 'Mais por vir',
        description:
            'Estamos sempre desenvolvendo novas soluções. Tem uma necessidade específica? Vamos conversar — talvez já estejamos trabalhando exatamente nisso.',
        cardClass: 'product-card-plus',
        iconClass: 'product-card-icon-sky',
        tablerIcon: 'ti-sparkles',
        status: { label: 'Em breve' },
        tags: [{ label: 'Em desenvolvimento', tone: 'gray' }],
        link: { label: 'Sugerir uma ideia', href: PRODUCT_IDEA_MAILTO },
    },
]

function ProductCardContent({ product }: { product: Product }) {
    return (
        <>
            {product.status.live ? (
                <div className="product-live-badge">
                    <span className="product-live-dot" />
                    {product.status.label}
                </div>
            ) : (
                <div className="product-coming-soon">{product.status.label}</div>
            )}

            <div className={`product-card-icon ${product.iconClass}`}>
                <i className={`ti ${product.tablerIcon}`} aria-hidden="true" />
            </div>

            <div className="product-card-name">{product.name}</div>
            <p className="product-card-desc">{product.description}</p>

            <div className="product-card-tags">
                {product.tags.map((tag) => (
                    <span key={tag.label} className={`product-tag product-tag-${tag.tone}`}>
                        {tag.label}
                    </span>
                ))}
            </div>

            <span className="product-card-link">
                {product.link.label} <i className="ti ti-arrow-right" aria-hidden="true" />
            </span>
        </>
    )
}

function ProductCard({ product }: { product: Product }) {
    const className = `product-card ${product.cardClass}`

    /* O card inteiro é clicável — por isso o rótulo interno é só um <span>. */
    return product.link.to ? (
        <Link className={className} to={product.link.to}>
            <ProductCardContent product={product} />
        </Link>
    ) : (
        <a className={className} href={product.link.href}>
            <ProductCardContent product={product} />
        </a>
    )
}

export function Products() {
    return (
        <section className="product-section" id={HOME_SECTION_IDS.products}>
            <div className="product-section-label">Nossos produtos</div>
            <h2 className="product-section-title">Software para empresas e investidores</h2>
            <p className="product-section-sub">
                Sistemas sob medida para resolver problemas reais — para empresas que gerenciam suas operações e
                para pessoas que administram seu próprio dinheiro.
            </p>

            <div className="product-products">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    )
}
