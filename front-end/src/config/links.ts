/* Links externos usados em mais de uma página. */

/* WhatsApp da empresa, com mensagem padrão pré-preenchida. */
const WHATSAPP_COMPANY_NUMBER = '5528999354057'
const WHATSAPP_COMPANY_DEFAULT_MESSAGE = 'Olá, me interessei no plano fundador!'
export const WHATSAPP_GROUP_URL = `https://wa.me/${WHATSAPP_COMPANY_NUMBER}?text=${encodeURIComponent(WHATSAPP_COMPANY_DEFAULT_MESSAGE)}`
