import './Header.css';
import { useLanguage } from '../../i18n/LanguageContext';

export function Header() {
    const { language, toggleLanguage, t } = useLanguage();

    return (
    <>
        <nav className="header-nav">
            <div className="header-logo">
                <img src="/lougon_favicon.svg" alt="Lougon.tech" className="header-logo-icon" />
                lougon<span>.tech</span>
            </div>
            <div className="header-nav-links">
                <a href="#products">{t.header.products}</a>
                <a href="#why">{t.header.solutions}</a>
                <a href="#why">{t.header.about}</a>
                <a href="#contact">{t.header.contact}</a>
            </div>
            <div className="header-nav-right">
                <button
                    type="button"
                    className="lang-toggle"
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                >
                    <span className={language === 'en' ? 'lang-toggle-option lang-toggle-active' : 'lang-toggle-option'}>EN</span>
                    <span className={language === 'pt' ? 'lang-toggle-option lang-toggle-active' : 'lang-toggle-option'}>PT</span>
                </button>
                <a className="header-nav-cta" href="mailto:tech@lougon.tech?subject=Demo%20request">{t.header.cta}</a>
            </div>
        </nav>
    </>
    )
}
