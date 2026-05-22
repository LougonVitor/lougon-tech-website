import './Hero.css'

export function Hero() {
    return(
    <>
    <section className="hero">
        <div className="hero-badge">B2B Software Solutions</div>
        <h1 className="hero-title">Smart systems for <em>modern businesses</em></h1>
        <p className="hero-sub">Lougon.tech builds purpose-built software that simplifies operations, ensures compliance, and drives growth — for every industry.</p>
        
        <div className="hero-actions">
            <button className="btn-primary" /* onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})" */>Explore our products</button>
            <button className="btn-outline">Talk to us</button>
        </div>
    </section>
    </>
    )
}