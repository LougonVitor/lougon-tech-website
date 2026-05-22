import './Header.css';

export function Header() {
    return (
    <>
        <nav className="header-nav">
            <div className="header-logo">lougon<span>.tech</span></div>
            <div className="header-nav-links">
                <a>Products</a>
                <a>Solutions</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <button className="header-nav-cta">Request a demo</button>
        </nav>
    </>
    )
}