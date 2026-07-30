import './Header.css'
import { DEMO_REQUEST_MAILTO } from '../../config/links'
import { HOME_SECTION_IDS } from '../../config/sections'

const NAV_LINKS = [
    { id: HOME_SECTION_IDS.products, label: 'Produtos' },
    { id: HOME_SECTION_IDS.differentials, label: 'Diferenciais' },
    { id: HOME_SECTION_IDS.contact, label: 'Contato' },
]

export function Header() {
    return (
        <nav className="header-nav">
            <div className="header-logo">
                <img src="/lougon_favicon.svg" alt="Lougon.tech" className="header-logo-icon" />
                lougon<span>.tech</span>
            </div>

            <div className="header-nav-links">
                {NAV_LINKS.map((link) => (
                    <a key={link.id} href={`#${link.id}`}>
                        {link.label}
                    </a>
                ))}
            </div>

            <a className="header-nav-cta" href={DEMO_REQUEST_MAILTO}>
                Solicitar demonstração
            </a>
        </nav>
    )
}
