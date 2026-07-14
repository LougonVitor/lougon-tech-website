import './Statistic.css'
import { useLanguage } from '../../i18n/LanguageContext'

export function Statistic() {
    const { t } = useLanguage();

    return (
    <>
    <div className="statistics-container">
        <div className="statistic-box">
            <div className="statistic-box-num">3+</div>
            <div className="statistic-box-label">{t.statistics.productsLaunched}</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">100%</div>
            <div className="statistic-box-label">{t.statistics.cloudBased}</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">24/7</div>
            <div className="statistic-box-label">{t.statistics.support}</div>
        </div>
            <div className="statistic-box">
            <div className="statistic-box-num">BR</div>
            <div className="statistic-box-label">{t.statistics.madeInBrazil}</div>
        </div>
    </div>
    </>
    )
}