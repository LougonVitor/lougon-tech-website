import { Link } from 'react-router-dom'
import './Products.css'
import { useLanguage } from '../../i18n/LanguageContext'

export function Products() {
    const { t } = useLanguage();

    return (
    <>
    <section className="product-section" id="products">
        <div className="product-section-label">{t.products.label}</div>
        <h2 className="product-section-title">{t.products.title}</h2>
        <p className="product-section-sub">{t.products.sub}</p>

        <div className="product-products">

        <Link className="product-card product-card-profitly" to="/profitly">
            <div className="product-live-badge"><span className="product-live-dot"></span>{t.products.liveBeta}</div>

            <div className="product-card-icon product-card-icon-gradient">
                <i className="ti ti-chart-candle" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">{t.products.profitlyName}</div>

            <p className="product-card-desc">{t.products.profitlyDesc}</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-gradient">{t.products.tagB2C}</span>
                <span className="product-tag product-tag-blue">{t.products.tagInvesting}</span>
                <span className="product-tag product-tag-gray">{t.products.tagRealTime}</span>
            </div>
            <span className="product-card-link">{t.products.openProfitly} <i className="ti ti-arrow-right" aria-hidden="true"></i></span>
        </Link>

        <div className="product-card product-card-audit">
            <div className="product-coming-soon">{t.products.inDevelopment}</div>

            <div className="product-card-icon product-card-icon-blue">
                <i className="ti ti-clipboard-check" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">{t.products.auditName}</div>

            <p className="product-card-desc">{t.products.auditDesc}</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-blue">{t.products.tagCompliance}</span>
                <span className="product-tag product-tag-teal">{t.products.tagReporting}</span>
                <span className="product-tag product-tag-gray">{t.products.tagMultiUser}</span>
            </div>
            <a className="product-card-link">{t.products.learnMore} <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="product-card product-card-dental">
            <div className="product-coming-soon">{t.products.inDevelopment}</div>

            <div className="product-card-icon product-card-icon-teal">
                <i className="ti ti-tooth" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">{t.products.dentalName}</div>

            <p className="product-card-desc">{t.products.dentalDesc}</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-teal">{t.products.tagScheduling}</span>
                <span className="product-tag product-tag-blue">{t.products.tagPatientRecords}</span>
                <span className="product-tag product-tag-gray">{t.products.tagBilling}</span>
            </div>
            <a className="product-card-link">{t.products.learnMore} <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="product-card product-card-plus" /* style="border-style: dashed; opacity: 0.75;" */>
            <div className="product-coming-soon">{t.products.comingSoon}</div>

            <div className="product-card-icon product-card-icon-sky">
                <i className="ti ti-sparkles" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">{t.products.moreName}</div>

            <p className="product-card-desc">{t.products.moreDesc}</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-gray">{t.products.tagInDevelopment}</span>
            </div>
            <a className="product-card-link" href="mailto:tech@lougon.tech?subject=Product%20idea%20for%20Lougon.tech">{t.products.suggestIdea} <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        </div>
    </section>
    </>
    )
}
