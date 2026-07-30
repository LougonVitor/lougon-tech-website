export interface LeadPayload {
    name: string
    email: string
    phone: string
    city?: string
    /* Respostas do quiz do Plano Fundador, já formatadas numa única linha. */
    answers?: string
    source?: string
    plan: string
}

/*
 * Endpoint do Google Apps Script Web App que grava o lead numa planilha do
 * Google Sheets. Configure VITE_GOOGLE_SHEETS_WEBHOOK_URL no .env do
 * front-end para ativar o envio real (veja front-end/README.md).
 */
const SHEETS_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string | undefined

export async function submitLead(payload: LeadPayload): Promise<void> {
    if (!SHEETS_WEBHOOK_URL) {
        console.info('Lead capturado (defina VITE_GOOGLE_SHEETS_WEBHOOK_URL para enviar ao Google Sheets):', payload)
        return
    }

    try {
        /*
         * mode: 'no-cors' + text/plain evita o preflight CORS que o Apps
         * Script Web App não responde. O script lê o corpo via
         * e.postData.contents e faz o parse do JSON manualmente.
         */
        await fetch(SHEETS_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload),
        })
    } catch (error) {
        console.error('Falha ao enviar lead para o Google Sheets:', error)
    }
}
