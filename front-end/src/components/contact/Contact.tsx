import { Link } from 'react-router-dom'
import './Contact.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { EarlyAccessCTA } from '../earlyAccess/EarlyAccessCTA'

export function Contact() {
    const { t } = useLanguage();

    return(
    <>
    <section className="cta-band" id="contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.sub}</p>
        <div className="cta-actions">
            <a className="btn-primary cta-link" href="mailto:tech@lougon.tech?subject=Demo%20request">{t.contact.scheduleDemo}</a>
            <Link className="btn-outline cta-link" to="/profitly">{t.contact.tryProfitly}</Link>
        </div>

        <EarlyAccessCTA align="center" label={t.earlyAccess.button} note={t.earlyAccess.note} />
    </section>
    </>
    )
}