import './Features.css'
import { HOME_SECTION_IDS } from '../../config/sections'

const FEATURES = [
    {
        tablerIcon: 'ti-cloud',
        title: '100% na nuvem',
        description: 'Sem necessidade de instalação. Acesse seus sistemas de qualquer dispositivo, em qualquer lugar.',
    },
    {
        tablerIcon: 'ti-lock',
        title: 'Seguro por padrão',
        description: 'Seus dados são criptografados e protegidos seguindo as melhores práticas de segurança.',
    },
    {
        tablerIcon: 'ti-headset',
        title: 'Suporte local',
        description: 'Pessoas reais baseadas no Brasil, prontas para ajudar quando você mais precisar.',
    },
    {
        tablerIcon: 'ti-refresh',
        title: 'Sempre evoluindo',
        description: 'Atualizações regulares baseadas no feedback dos clientes, sem custo adicional.',
    },
]

export function Features() {
    return (
        <section className="features" id={HOME_SECTION_IDS.differentials}>
            <div className="features-inner">
                <div className="section-label">Por que a Lougon</div>
                <h2 className="section-title">Construído de forma diferente, por design</h2>
                <p className="section-sub">
                    Nos importamos com os detalhes que tornam o software realmente agradável de usar — seja você uma
                    empresa ou um investidor individual.
                </p>

                <div className="feat-grid">
                    {FEATURES.map((feature) => (
                        <div key={feature.title} className="feat-item">
                            <div className="feat-icon">
                                <i className={`ti ${feature.tablerIcon}`} aria-hidden="true" />
                            </div>
                            <div className="feat-title">{feature.title}</div>
                            <p className="feat-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
