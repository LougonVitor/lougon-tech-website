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
            <button className="header-nav-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Request a demo</button>
        </nav>
    </>
    )
}
