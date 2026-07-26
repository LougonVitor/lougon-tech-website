import './EarlyAccessCTA.css'
import { WHATSAPP_GROUP_URL } from '../../config/links'

const DEFAULT_LABEL = 'Tenha acesso antecipado e barato'

interface EarlyAccessCTAProps {
    label?: string;
    note?: string;
    align?: 'left' | 'center';
    compact?: boolean;
}

export function EarlyAccessCTA({
    label = DEFAULT_LABEL,
    note,
    align = 'left',
    compact = false,
}: EarlyAccessCTAProps) {
    const classes = ['ea-cta', `ea-cta-${align}`]
    if (compact) classes.push('ea-cta-compact')

    return (
        <div className={classes.join(' ')}>
            <a
                className="ea-cta-btn"
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="ti ti-brand-whatsapp ea-cta-btn-icon" aria-hidden="true"></i>
                {label}
                <i className="ti ti-arrow-right ea-cta-btn-arrow" aria-hidden="true"></i>
            </a>
            {note && <span className="ea-cta-note">{note}</span>}
        </div>
    )
}
