import './Hero.css'

export function Hero() {
    return(
    <>
    <section className="hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-blue" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-purple" aria-hidden="true"></div>

        <div className="hero-badge">B2B &amp; B2C Software Solutions</div>
        <h1 className="hero-title">Smart systems for <em>businesses and investors</em></h1>
        <p className="hero-sub">Lougon.tech builds purpose-built software that simplifies operations, ensures compliance, and drives growth — for companies of every size, and for individual investors managing their own portfolios.</p>

        <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({behavior:'smooth'})}>Explore our products</button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Talk to us</button>
        </div>
    </section>
    </>
    )
}
