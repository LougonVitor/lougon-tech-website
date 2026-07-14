import './Contact.css'

export function Contact() {
    return(
    <>
    <section className="cta-band" id="contact">
        <h2>Ready to modernize your business — or your portfolio?</h2>
        <p>Schedule a free demo for your company, or try Profitly for your own investments.</p>
        <div className="cta-actions">
            <button className="btn-primary" /* style="font-size:15px; padding:13px 32px;" */>Schedule a free demo</button>
            <a className="btn-outline cta-link" href="https://profitly.lougon.tech" target="_blank" rel="noopener noreferrer">Try Profitly</a>
        </div>
    </section>
    </>
    )
}