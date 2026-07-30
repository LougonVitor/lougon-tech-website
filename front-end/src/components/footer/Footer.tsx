import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="/lougon_favicon.svg" alt="Lougon.tech" className="footer-logo-icon" />
                lougon<span>.tech</span>
            </div>
            <div className="footer-copy">
                © {new Date().getFullYear()} Lougon.tech · Todos os direitos reservados
            </div>
        </footer>
    )
}
