import './Hero.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { EarlyAccessCTA } from '../earlyAccess/EarlyAccessCTA'

export function Hero() {
    const { t } = useLanguage();

    return(
    <>
    <section className="hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-blue" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-purple" aria-hidden="true"></div>

        <div className="hero-badge">{t.hero.badge}</div>
        <h1 className="hero-title">{t.hero.titlePrefix}<em>{t.hero.titleEm}</em></h1>
        <p className="hero-sub">{t.hero.sub}</p>

        <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({behavior:'smooth'})}>{t.hero.exploreProducts}</button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>{t.hero.talkToUs}</button>
        </div>

        <EarlyAccessCTA align="center" label={t.earlyAccess.button} note={t.earlyAccess.note} />
    </section>
    </>
    )
}
