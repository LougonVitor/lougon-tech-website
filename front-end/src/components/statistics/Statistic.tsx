import './Statistic.css'

const STATS = [
    { value: '3+', label: 'Produtos lançados' },
    { value: '100%', label: 'Baseado na nuvem' },
    { value: '24/7', label: 'Suporte' },
    { value: 'BR', label: 'Feito no Brasil' },
]

export function Statistic() {
    return (
        <div className="statistics-container">
            {STATS.map((stat) => (
                <div key={stat.label} className="statistic-box">
                    <div className="statistic-box-num">{stat.value}</div>
                    <div className="statistic-box-label">{stat.label}</div>
                </div>
            ))}
        </div>
    )
}
