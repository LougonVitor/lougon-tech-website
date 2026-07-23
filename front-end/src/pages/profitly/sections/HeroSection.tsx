import { Icon } from '../components/icons'
import { SECTION_IDS } from '../data/constants'
import './HeroSection.css'

const TRACKS = [
    {
        id: SECTION_IDS.investments,
        title: 'Organizar meus investimentos',
        iconName: 'wallet' as const,
        iconClass: 'pf-hero-track-icon-purple',
    },
    {
        id: SECTION_IDS.finance,
        title: 'Controlar minhas finanças pessoais',
        iconName: 'coins' as const,
        iconClass: 'pf-hero-track-icon-teal',
    },
    {
        id: SECTION_IDS.analysis,
        title: 'Analisar ações com mais profundidade',
        iconName: 'chart' as const,
        iconClass: 'pf-hero-track-icon-blue',
    },
]

export function HeroSection() {
    return (
        <section id={SECTION_IDS.hero} className="pf-section pf-hero">
            <div className="pf-hero-layout">
                <div>
                    <div className="pf-hero-logo">
                        <span className="pf-hero-logo-mark">
                            <Icon name="trendingUp" size={17} />
                        </span>
                        Profitly
                    </div>

                    <div className="pf-eyebrow pf-hero-badge">Seu assistente financeiro inteligente</div>
                    <h1 className="pf-title pf-hero-title">
                        Entenda seu dinheiro.<br />Tome <span className="pf-accent">decisões melhores</span>.
                    </h1>
                    <p className="pf-sub">
                        A Profitly reúne seus investimentos e sua vida financeira em um só lugar — e transforma tudo isso
                        em insights claros para você evoluir sua saúde financeira.
                    </p>

                    <div className="pf-hero-actions">
                        <a href={`#${SECTION_IDS.founder}`} className="pf-btn-primary">
                            Conhecer o Plano Fundador <Icon name="arrowRight" size={16} />
                        </a>
                        <a href={`#${SECTION_IDS.investments}`} className="pf-btn-outline">
                            Ver funcionalidades
                        </a>
                    </div>

                    <div className="pf-hero-rating">
                        <span className="pf-hero-stars">★★★★★</span>
                        Construído para quem leva a sério a própria vida financeira
                    </div>

                    <p style={{ fontSize: 13, color: 'var(--pf-text-dim)', marginTop: 28, fontWeight: 500 }}>
                        Qual o seu principal objetivo hoje?
                    </p>
                    <div className="pf-hero-tracks">
                        {TRACKS.map((track) => (
                            <a key={track.id} href={`#${track.id}`} className="pf-hero-track">
                                <span className={`pf-hero-track-icon ${track.iconClass}`}>
                                    <Icon name={track.iconName} size={16} />
                                </span>
                                <span className="pf-hero-track-title">{track.title}</span>
                                <span className="pf-hero-track-arrow">
                                    Explorar <Icon name="arrowRight" size={12} />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pf-hero-mock" aria-hidden="true">
                    <div className="pf-hero-mock-top">
                        <span className="pf-hero-mock-brand">Visão Geral</span>
                        <div className="pf-hero-mock-tabs">
                            <span>Carteira</span>
                            <span>Finanças</span>
                        </div>
                    </div>

                    <div className="pf-hero-mock-grid">
                        <div className="pf-hero-mock-score">
                            <div className="pf-hero-mock-score-inner">
                                <span className="pf-hero-mock-score-num">84</span>
                                <span className="pf-hero-mock-score-label">saúde</span>
                            </div>
                        </div>

                        <div className="pf-hero-mock-stats">
                            <div className="pf-hero-mock-stat">
                                <div className="pf-hero-mock-stat-label">Patrimônio</div>
                                <div className="pf-hero-mock-stat-value">R$ 125.430</div>
                            </div>
                            <div className="pf-hero-mock-stat">
                                <div className="pf-hero-mock-stat-label">No mês</div>
                                <div className="pf-hero-mock-stat-value up">+8,75%</div>
                            </div>
                            <div className="pf-hero-mock-stat">
                                <div className="pf-hero-mock-stat-label">Receitas</div>
                                <div className="pf-hero-mock-stat-value">R$ 8.750</div>
                            </div>
                            <div className="pf-hero-mock-stat">
                                <div className="pf-hero-mock-stat-label">Despesas</div>
                                <div className="pf-hero-mock-stat-value">R$ 4.680</div>
                            </div>
                        </div>
                    </div>

                    <div className="pf-hero-mock-chart">
                        <div className="pf-hero-mock-chart-label">
                            <span>Evolução do patrimônio</span>
                            <span>6 meses</span>
                        </div>
                        <svg viewBox="0 0 280 60" width="100%" height="60" preserveAspectRatio="none">
                            <polyline
                                points="0,45 40,42 80,38 120,30 160,32 200,18 240,20 280,8"
                                fill="none"
                                stroke="#8F66EE"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
