import './WhatsAppGroupFab.css'
import { WHATSAPP_GROUP_URL } from '../../config/links'

interface WhatsAppGroupFabProps {
    /* Texto que aparece ao lado do ícone no hover (e como aria-label). */
    label?: string;
}

export function WhatsAppGroupFab({ label = 'Acesso antecipado no WhatsApp' }: WhatsAppGroupFabProps) {
    return (
        <a
            className="wa-group-fab"
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            <span className="wa-group-fab-ring" aria-hidden="true"></span>
            <i className="ti ti-brand-whatsapp wa-group-fab-icon" aria-hidden="true"></i>
            <span className="wa-group-fab-label">{label}</span>
        </a>
    )
}
