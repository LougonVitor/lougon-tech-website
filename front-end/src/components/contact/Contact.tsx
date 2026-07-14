import './Contact.css'
import { useLanguage } from '../../i18n/LanguageContext'

export function Contact() {
    const { t } = useLanguage();

    return(
    <>
    <section className="cta-band" id="contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.sub}</p>
        <div className="cta-actions">
            <a className="btn-primary cta-link" href="mailto:tech@lougon.tech?subject=Demo%20request">{t.contact.scheduleDemo}</a>
            <a className="btn-outline cta-link" href="https://profitly.lougon.tech" target="_blank" rel="noopener noreferrer">{t.contact.tryProfitly}</a>
        </div>
    </section>
    </>
    )
}