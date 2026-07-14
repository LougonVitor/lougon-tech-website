import './Products.css'

export function Products() {
    return (
    <>
    <section className="product-section" id="products">
        <div className="product-section-label">Our products</div>
        <h2 className="product-section-title">Software for businesses and investors</h2>
        <p className="product-section-sub">Purpose-built systems designed to solve real problems — for companies running their operations, and for people managing their own money.</p>

        <div className="product-products">

        <a className="product-card product-card-profitly" href="https://profitly.lougon.tech" target="_blank" rel="noopener noreferrer">
            <div className="product-live-badge"><span className="product-live-dot"></span>Live beta</div>

            <div className="product-card-icon product-card-icon-gradient">
                <i className="ti ti-chart-candle" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">Profitly</div>

            <p className="product-card-desc">Our B2C investing platform. Compare assets, track the Brazilian market in real time, and manage your own portfolio — dividends, rankings, and market pulse in one place.</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-gradient">B2C</span>
                <span className="product-tag product-tag-blue">Investing</span>
                <span className="product-tag product-tag-gray">Real-time data</span>
            </div>
            <span className="product-card-link">Open Profitly <i className="ti ti-arrow-up-right" aria-hidden="true"></i></span>
        </a>

        <div className="product-card product-card-audit">
            <div className="product-card-icon product-card-icon-blue">
                <i className="ti ti-clipboard-check" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">Audit System</div>

            <p className="product-card-desc">Complete audit management platform. Plan, execute, and report internal and external audits with full traceability and compliance control.</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-blue">Compliance</span>
                <span className="product-tag product-tag-teal">Reporting</span>
                <span className="product-tag product-tag-gray">Multi-user</span>
            </div>
            <a className="product-card-link">Learn more <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="product-card product-card-dental">
            <div className="product-card-icon product-card-icon-teal">
                <i className="ti ti-tooth" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">Dental System</div>

            <p className="product-card-desc">A complete clinic management solution — scheduling, patient records, billing, and treatment history all in one place.</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-teal">Scheduling</span>
                <span className="product-tag product-tag-blue">Patient records</span>
                <span className="product-tag product-tag-gray">Billing</span>
            </div>
            <a className="product-card-link">Learn more <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="product-card product-card-plus" /* style="border-style: dashed; opacity: 0.75;" */>
            <div className="product-coming-soon">Coming soon</div>

            <div className="product-card-icon product-card-icon-sky">
                <i className="ti ti-sparkles" aria-hidden="true"></i>
            </div>

            <div className="product-card-name">More on the way</div>

            <p className="product-card-desc">We're constantly building new solutions. Have a specific need? Let's talk — we might be working on exactly what you need.</p>

            <div className="product-card-tags">
                <span className="product-tag product-tag-gray">In development</span>
            </div>
            <a className="product-card-link" /* onclick="sendPrompt('I want to suggest a product idea for Lougon.tech')" */>Suggest an idea <i className="ti ti-arrow-right" aria-hidden="true"></i></a>
        </div>

        </div>
    </section>
    </>
    )
}
