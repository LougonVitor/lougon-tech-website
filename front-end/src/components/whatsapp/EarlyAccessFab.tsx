import './EarlyAccessFab.css'
import { WHATSAPP_EARLY_ACCESS_URL } from '../../config/links'

interface EarlyAccessFabProps {
    /* Texto que aparece ao lado do ícone no hover (e como aria-label). */
    label?: string
}

/* Widget fixo que abre a conversa de acesso antecipado no WhatsApp. */
export function EarlyAccessFab({ label = 'Acesso antecipado no WhatsApp' }: EarlyAccessFabProps) {
    return (
        <a
            className="early-access-fab"
            href={WHATSAPP_EARLY_ACCESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            <span className="early-access-fab-ring" aria-hidden="true" />
            <i className="ti ti-brand-whatsapp early-access-fab-icon" aria-hidden="true" />
            <span className="early-access-fab-label">{label}</span>
        </a>
    )
}
