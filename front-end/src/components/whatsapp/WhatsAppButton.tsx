import './WhatsAppButton.css'
import { WHATSAPP_CONTACT_URL } from '../../config/links'

interface WhatsAppButtonProps {
    /* Sobe o botão para não colidir com o widget de acesso antecipado. */
    stacked?: boolean
}

export function WhatsAppButton({ stacked = false }: WhatsAppButtonProps) {
    return (
        <a
            className={`whatsapp-fab${stacked ? ' whatsapp-fab-stacked' : ''}`}
            href={WHATSAPP_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <span className="whatsapp-fab-ring" aria-hidden="true" />
            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
        </a>
    )
}
