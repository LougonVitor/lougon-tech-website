/* Links externos (WhatsApp e e-mail) usados em mais de um componente. */

const WHATSAPP_NUMBER = '5528999354057'

export const CONTACT_EMAIL = 'tech@lougon.tech'

/* Conversa direta no WhatsApp da empresa, com a mensagem já preenchida. */
function whatsAppUrl(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function mailtoUrl(subject: string) {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

/* Contato geral, a partir do botão flutuante do site. */
export const WHATSAPP_CONTACT_URL = whatsAppUrl('Olá! Vim pelo site da Lougon.tech e gostaria de saber mais.')

/* Interesse no Plano Fundador da Profitly. */
export const WHATSAPP_EARLY_ACCESS_URL = whatsAppUrl('Olá, me interessei no plano fundador!')

export const DEMO_REQUEST_MAILTO = mailtoUrl('Solicitação de demonstração')
export const PRODUCT_IDEA_MAILTO = mailtoUrl('Ideia de produto para a Lougon.tech')

export function productInterestMailto(productName: string) {
    return mailtoUrl(`Quero saber mais sobre o ${productName}`)
}
