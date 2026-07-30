import { Link } from 'react-router-dom'
import './Contact.css'
import { DEMO_REQUEST_MAILTO } from '../../config/links'
import { HOME_SECTION_IDS } from '../../config/sections'

export function Contact() {
    return (
        <section className="cta-band" id={HOME_SECTION_IDS.contact}>
            <h2>Pronto para modernizar sua empresa — ou sua carteira?</h2>
            <p>Agende uma demonstração gratuita para sua empresa ou experimente a Profitly para seus próprios investimentos.</p>

            <div className="cta-actions">
                <a className="btn-primary cta-link" href={DEMO_REQUEST_MAILTO}>
                    Agendar demonstração gratuita
                </a>
                <Link className="btn-outline cta-link" to="/profitly">
                    Experimentar a Profitly
                </Link>
            </div>
        </section>
    )
}
