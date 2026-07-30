# Enviar leads do site para o Google Sheets

Os formulários (`LeadFormModal`, do Plano Grátis, e o formulário no final do
`FounderQuizModal`, do Plano Fundador) chamam `submitLead` em
[`src/pages/profitly/data/leadSubmission.ts`](src/pages/profitly/data/leadSubmission.ts),
que envia os dados por `fetch` para uma URL de Google Apps Script Web App
definida em `VITE_GOOGLE_SHEETS_WEBHOOK_URL`. Sem essa variável configurada, o
lead só é logado no console (nada é enviado). Os dois formulários gravam na
mesma planilha; a coluna `Plano` identifica de qual formulário o lead veio
(`Grátis` ou `Fundador`). O Plano Grátis não pede cidade nem passa pelo quiz,
então as colunas `Cidade` e `Respostas` ficam vazias para esses leads.

## 1. Criar a planilha

1. Crie uma planilha nova no Google Sheets.
2. Na primeira linha, adicione os cabeçalhos: `Data`, `Origem`, `Nome`, `Email`, `Telefone`, `Cidade`, `Plano`, `Respostas`.

## 2. Criar o Apps Script

1. Na planilha, vá em **Extensões → Apps Script**.
2. Substitua o conteúdo por:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.source || '',
    data.name || '',
    data.email || '',
    data.phone || '',
    data.city || '',
    data.plan || '',
    data.answers || '',
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Salve o projeto (dê um nome, ex: "Leads Profitly").

## 3. Publicar como Web App

1. Clique em **Implantar → Nova implantação**.
2. Tipo: **App da Web**.
3. "Executar como": **Eu (seu e-mail)**.
4. "Quem pode acessar": **Qualquer pessoa**.
5. Clique em **Implantar** e autorize as permissões solicitadas.
6. Copie a **URL do app da Web** gerada (termina em `/exec`).

## 4. Configurar o front-end

- **Local (dev):** crie `front-end/.env` com:
  ```
  VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID/exec
  ```
- **Produção (deploy via GitHub Actions):** adicione um secret no repositório
  chamado `VITE_GOOGLE_SHEETS_WEBHOOK_URL` com essa mesma URL
  (Settings → Secrets and variables → Actions → New repository secret). O
  workflow [`deploy.yml`](../.github/workflows/deploy.yml) já está configurado
  para injetar esse secret durante o build.

Sempre que republicar o Apps Script como uma **nova versão** de implantação
existente, a URL não muda. Se criar uma implantação totalmente nova, atualize
a variável/secret com a nova URL.
