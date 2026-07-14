import './Statistic.css'

export function Statistic() {
    return (
    <>
    <div className="statistics-container">
        <div className="statistic-box">
            <div className="statistic-box-num">3+</div>
            <div className="statistic-box-label">Products launched</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">100%</div>
            <div className="statistic-box-label">Cloud-based</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">24/7</div>
            <div className="statistic-box-label">Support</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">BR</div>
            <div className="statistic-box-label">Made in Brazil</div>
        </div>
    </div>
    </>
    )
}