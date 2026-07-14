import './WhatsAppButton.css'

export function WhatsAppButton() {
    const phone = '5528999354057';
    const message = encodeURIComponent('Olá! Vim pelo site da Lougon.tech e gostaria de saber mais.');

    return (
        <a
            className="whatsapp-fab"
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <span className="whatsapp-fab-ring"></span>
            <i className="ti ti-brand-whatsapp" aria-hidden="true"></i>
        </a>
    )
}
