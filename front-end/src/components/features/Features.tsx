import './Features.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { EarlyAccessCTA } from '../earlyAccess/EarlyAccessCTA'

export function Features() {
    const { t } = useLanguage();

    return (
    <>
    <section className="features">
        <div className="features-inner">
            <div className="section-label" id="why">{t.features.label}</div>

            <h2 className="section-title" /* style="margin:0 0 6px;" */>{t.features.title}</h2>

            <p className="section-sub" /* style="margin:0;" */>{t.features.sub}</p>

            <div className="feat-grid">
                <div className="feat-item">
                    <div className="feat-icon"><i className="ti ti-cloud" aria-hidden="true"></i></div>
                    <div className="feat-title">{t.features.cloudTitle}</div>
                    <p className="feat-desc">{t.features.cloudDesc}</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon"><i className="ti ti-lock" aria-hidden="true"></i></div>
                    <div className="feat-title">{t.features.secureTitle}</div>
                    <p className="feat-desc">{t.features.secureDesc}</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon" /* style="background:#e1f5ee; color:#0f6e56" */><i className="ti ti-headset" aria-hidden="true"></i></div>
                    <div className="feat-title">{t.features.supportTitle}</div>
                    <p className="feat-desc">{t.features.supportDesc}</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon" /* style="background:#e1f5ee; color:#0f6e56" */><i className="ti ti-refresh" aria-hidden="true"></i></div>
                    <div className="feat-title">{t.features.evolvingTitle}</div>
                    <p className="feat-desc">{t.features.evolvingDesc}</p>
                </div>
            </div>

            <EarlyAccessCTA align="center" label={t.earlyAccess.button} note={t.earlyAccess.note} />
        </div>
    </section>
    </>
    )
}