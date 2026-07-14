import './Header.css';

export function Header() {
    return (
    <>
        <nav className="header-nav">
            <div className="header-logo">
                <img src="/lougon_favicon.svg" alt="Lougon.tech" className="header-logo-icon" />
                lougon<span>.tech</span>
            </div>
            <div className="header-nav-links">
                <a href="#products">Products</a>
                <a href="#why">Solutions</a>
                <a href="#why">About</a>
                <a href="#contact">Contact</a>
            </div>
            <a className="header-nav-cta" href="mailto:tech@lougon.tech?subject=Demo%20request">Request a demo</a>
        </nav>
    </>
    )
}
