export interface LeadPayload {
    name: string
    email: string
    phone: string
}

/*
 * Ainda sem backend: o formulário guarda o lead aqui até a integração com o
 * Google Sheets (via Apps Script Web App ou similar) ser configurada. Trocar
 * o corpo desta função pela chamada real quando o endpoint existir.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
    console.info('Lead capturado (aguardando integração com Google Sheets):', payload)
}
