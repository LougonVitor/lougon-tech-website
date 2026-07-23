import { Icon } from '../components/icons'
import { SECTION_IDS } from '../data/constants'
import './HeroSection.css'

const TRACKS = [
    {
        id: SECTION_IDS.investments,
        title: 'Organizar meus investimentos',
        iconName: 'wallet' as const,
        iconClass: 'pf-hero-track-icon-purple',
        cardClass: 'pf-hero-track-purple',
    },
    {
        id: SECTION_IDS.finance,
        title: 'Controlar minhas finanças pessoais',
        iconName: 'coins' as const,
        iconClass: 'pf-hero-track-icon-teal',
        cardClass: 'pf-hero-track-teal',
    },
    {
        id: SECTION_IDS.analysis,
        title: 'Analisar ações com mais profundidade',
        iconName: 'chart' as const,
        iconClass: 'pf-hero-track-icon-blue',
        cardClass: 'pf-hero-track-blue',
    },
]

const EXPENSE_SLICES = [
    { label: 'Moradia', pct: 35, color: '#8F66EE' },
    { label: 'Alimentação', pct: 25, color: '#5ba4e8' },
    { label: 'Transporte', pct: 15, color: '#34d49a' },
    { label: 'Outros', pct: 25, color: '#f0b23e' },
]

const VALUATIONS = [
    { label: 'Graham', value: 'R$ 45,42', delta: '▲ 115% potencial', tone: 'up', bar: 82 },
    { label: 'Bazin', value: 'R$ 33,80', delta: '▲ 60% potencial', tone: 'up', bar: 60 },
    { label: 'Gordon', value: 'R$ 5,10', delta: '▼ 76% sobrepreço', tone: 'down', bar: 12 },
]

function donutGradient() {
    let cursor = 0
    const stops = EXPENSE_SLICES.map((slice) => {
        const start = cursor
        cursor += slice.pct
        return `${slice.color} ${start * 3.6}deg ${cursor * 3.6}deg`
    })
    return `conic-gradient(${stops.join(', ')})`
}

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
                    </div>

                    <div className="pf-hero-free-strip">
                        <div className="pf-hero-free-head">
                            <span className="pf-hero-free-badge">
                                <Icon name="check" size={13} /> Grátis para sempre
                            </span>
                            <div className="pf-hero-free-items">
                                <span><Icon name="chart" size={14} /> Análise de ações</span>
                                <span><Icon name="target" size={14} /> Preço teto</span>
                                <span><Icon name="wallet" size={14} /> Carteira de investimentos</span>
                            </div>
                        </div>
                        <a href={`#${SECTION_IDS.founder}`} className="pf-hero-free-note">
                            <Icon name="crown" size={15} />
                            <span>
                                Recursos avançados de IA só no <b>Plano Fundador</b> — por tempo limitado, preço único e vagas limitadas.
                            </span>
                        </a>
                    </div>

                    <div className="pf-hero-rating">
                        <span className="pf-hero-stars">★★★★★</span>
                        Construído para quem leva a sério a própria vida financeira
                    </div>

                    <h2 className="pf-hero-tracks-title">Qual o seu principal objetivo hoje?</h2>
                    <div className="pf-hero-tracks">
                        {TRACKS.map((track) => (
                            <a key={track.id} href={`#${track.id}`} className={`pf-hero-track ${track.cardClass}`}>
                                <span className={`pf-hero-track-icon ${track.iconClass}`}>
                                    <Icon name={track.iconName} size={18} />
                                </span>
                                <span className="pf-hero-track-title">{track.title}</span>
                                <span className="pf-hero-track-arrow">
                                    Explorar <Icon name="arrowRight" size={12} />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pf-hero-stage" aria-hidden="true">
                    <div className="pf-hero-laptop">
                        <div className="pf-hero-laptop-top">
                            <span className="pf-hero-laptop-brand">
                                <span className="pf-hero-logo-mark pf-hero-logo-mark-sm">
                                    <Icon name="trendingUp" size={12} />
                                </span>
                                Profitly
                            </span>
                            <span className="pf-hero-laptop-nav">Visão Geral</span>
                        </div>

                        <div className="pf-hero-stats-row">
                            <div className="pf-hero-stat-ring">
                                <div
                                    className="pf-hero-ring"
                                    style={{ background: 'conic-gradient(#34d49a 0deg 302deg, rgba(255,255,255,0.08) 302deg 360deg)' }}
                                >
                                    <div className="pf-hero-ring-inner">
                                        <span className="pf-hero-ring-num">84</span>
                                        <span className="pf-hero-ring-label">de 100</span>
                                    </div>
                                </div>
                                <span className="pf-hero-stat-caption">Saúde financeira</span>
                            </div>

                            <div className="pf-hero-stat-card">
                                <span className="pf-hero-stat-card-label">Receitas</span>
                                <span className="pf-hero-stat-card-value">R$ 3.289,35</span>
                                <span className="pf-hero-stat-card-delta up">↑ 12,5% este mês</span>
                            </div>

                            <div className="pf-hero-stat-card">
                                <span className="pf-hero-stat-card-label">Despesas</span>
                                <span className="pf-hero-stat-card-value">R$ 1.397,89</span>
                                <span className="pf-hero-stat-card-delta down">↓ 3,4% este mês</span>
                            </div>

                            <div className="pf-hero-stat-card pf-hero-stat-card-accent">
                                <span className="pf-hero-stat-card-label">Investido no mês</span>
                                <span className="pf-hero-stat-card-value">R$ 500,00</span>
                                <span className="pf-hero-stat-card-delta">↑ aportes do mês</span>
                            </div>
                        </div>

                        <div className="pf-hero-chart-card">
                            <div className="pf-hero-chart-head">
                                <div>
                                    <span className="pf-hero-chart-title">Evolução do patrimônio</span>
                                    <div className="pf-hero-chart-value">
                                        R$ 125.430 <span className="up">+8,75% no mês</span>
                                    </div>
                                </div>
                                <div className="pf-hero-chart-legend">
                                    <span><i className="pf-hero-dot pf-hero-dot-purple" />Patrimônio</span>
                                    <span><i className="pf-hero-dot pf-hero-dot-gray" />IBOV</span>
                                </div>
                            </div>

                            <svg className="pf-hero-chart-svg" viewBox="0 0 300 84" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="pfHeroArea" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#8F66EE" stopOpacity="0.35" />
                                        <stop offset="100%" stopColor="#8F66EE" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="0,60 40,55 80,50 120,38 160,42 200,20 240,24 280,6 300,4 300,84 0,84"
                                    fill="url(#pfHeroArea)"
                                />
                                <polyline
                                    points="0,68 40,64 80,62 120,58 160,60 200,52 240,54 280,44 300,46"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.28)"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                    strokeLinecap="round"
                                />
                                <polyline
                                    points="0,60 40,55 80,50 120,38 160,42 200,20 240,24 280,6 300,4"
                                    fill="none"
                                    stroke="#8F66EE"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <div className="pf-hero-chart-footer">
                                <div>
                                    <span className="pf-hero-chart-foot-label">Aportado</span>
                                    <span className="pf-hero-chart-foot-value">R$ 98.200</span>
                                </div>
                                <div>
                                    <span className="pf-hero-chart-foot-label">Rentab.</span>
                                    <span className="pf-hero-chart-foot-value up">+27,7%</span>
                                </div>
                                <div>
                                    <span className="pf-hero-chart-foot-label">vs IBOV</span>
                                    <span className="pf-hero-chart-foot-value up">+14,3%</span>
                                </div>
                            </div>
                        </div>

                        <div className="pf-hero-bottom-row">
                            <div className="pf-hero-donut-card">
                                <span className="pf-hero-mini-title">Gastos por categoria</span>
                                <div className="pf-hero-donut" style={{ background: donutGradient() }}>
                                    <div className="pf-hero-donut-hole" />
                                </div>
                                <div className="pf-hero-donut-legend">
                                    {EXPENSE_SLICES.map((slice) => (
                                        <span key={slice.label}>
                                            <i className="pf-hero-dot" style={{ background: slice.color }} />
                                            {slice.label} <b>{slice.pct}%</b>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pf-hero-price-card">
                                <div className="pf-hero-price-head">
                                    <span className="pf-hero-price-badge">BB</span>
                                    <span className="pf-hero-mini-title">Preço teto · BBAS3</span>
                                    <span className="pf-hero-price-current">atual R$ 21,09</span>
                                </div>

                                <div className="pf-hero-methods">
                                    {VALUATIONS.map((method) => (
                                        <div key={method.label} className="pf-hero-method">
                                            <span className="pf-hero-method-label">{method.label.toUpperCase()}</span>
                                            <span className="pf-hero-method-value">{method.value}</span>
                                            <span className={`pf-hero-method-delta ${method.tone}`}>{method.delta}</span>
                                            <div className="pf-hero-method-bar">
                                                <i style={{ width: `${method.bar}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pf-hero-avg-bar">
                                    <div className="pf-hero-avg-bar-head">
                                        <span>Média dos 3 métodos</span>
                                        <span className="up">24,96% abaixo do justo</span>
                                    </div>
                                    <div className="pf-hero-avg-bar-value">R$ 28,11</div>
                                    <div className="pf-hero-avg-bar-track">
                                        <i style={{ width: '68%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pf-hero-phone">
                        <div className="pf-hero-phone-notch" />
                        <div className="pf-hero-phone-brand">
                            <span className="pf-hero-logo-mark pf-hero-logo-mark-sm">
                                <Icon name="trendingUp" size={11} />
                            </span>
                            Profitly
                        </div>

                        <div className="pf-hero-phone-ring-wrap">
                            <div
                                className="pf-hero-ring pf-hero-phone-ring"
                                style={{ background: 'conic-gradient(#34d49a 0deg 302deg, rgba(255,255,255,0.08) 302deg 360deg)' }}
                            >
                                <div className="pf-hero-ring-inner">
                                    <span className="pf-hero-ring-num">84</span>
                                    <span className="pf-hero-ring-label">de 100</span>
                                </div>
                            </div>
                        </div>
                        <div className="pf-hero-phone-status">Boa · +6 pts no mês</div>

                        <div className="pf-hero-phone-bars">
                            <div className="pf-hero-phone-bar-row">
                                <span>Poupança</span>
                                <span className="pf-hero-phone-bar-tag up">Ótima</span>
                            </div>
                            <div className="pf-hero-phone-bar-track"><i style={{ width: '88%', background: 'var(--pf-teal)' }} /></div>

                            <div className="pf-hero-phone-bar-row">
                                <span>Endividamento</span>
                                <span className="pf-hero-phone-bar-tag warn">Atenção</span>
                            </div>
                            <div className="pf-hero-phone-bar-track"><i style={{ width: '46%', background: 'var(--pf-amber)' }} /></div>

                            <div className="pf-hero-phone-bar-row">
                                <span>Reserva</span>
                                <span className="pf-hero-phone-bar-tag">80%</span>
                            </div>
                            <div className="pf-hero-phone-bar-track"><i style={{ width: '80%', background: 'var(--pf-blue)' }} /></div>
                        </div>

                        <div className="pf-hero-phone-invest">
                            <span className="pf-hero-mini-title">Investimentos</span>
                            <div className="pf-hero-phone-invest-value">R$ 12.650,00</div>
                            <div className="pf-hero-phone-invest-delta up">↑ 9,2% este mês</div>
                            <svg viewBox="0 0 120 30" width="100%" height="26" preserveAspectRatio="none">
                                <polyline
                                    points="0,24 20,20 40,22 60,14 80,16 100,6 120,8"
                                    fill="none"
                                    stroke="#34d49a"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="pf-hero-phone-alert">
                            <Icon name="bell" size={12} /> Alerta inteligente
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
