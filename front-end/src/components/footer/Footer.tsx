import './Footer.css'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
    const { t } = useLanguage();

    return (
    <>
    <footer className="footer">
        <div className="footer-logo">
            <img src="/lougon_favicon.svg" alt="Lougon.tech" className="footer-logo-icon" />
            lougon<span>.tech</span>
        </div>
        <div className="footer-copy">{t.footer.copy}</div>
    </footer>
    </>
    )
}
