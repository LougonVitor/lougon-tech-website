import './Hero.css'
import { HOME_SECTION_IDS } from '../../config/sections'

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-orb hero-orb-blue" aria-hidden="true" />
            <div className="hero-orb hero-orb-purple" aria-hidden="true" />

            <div className="hero-badge">Soluções de software B2B e B2C</div>
            <h1 className="hero-title">
                Sistemas inteligentes para <em>empresas e investidores</em>
            </h1>
            <p className="hero-sub">
                A Lougon.tech desenvolve softwares sob medida que simplificam operações, garantem conformidade e
                impulsionam o crescimento — para empresas de todos os tamanhos e para investidores que gerenciam
                suas próprias carteiras.
            </p>

            <div className="hero-actions">
                <a className="btn-primary" href={`#${HOME_SECTION_IDS.products}`}>
                    Conheça nossos produtos
                </a>
                <a className="btn-outline" href={`#${HOME_SECTION_IDS.contact}`}>
                    Fale conosco
                </a>
            </div>
        </section>
    )
}
