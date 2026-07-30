# Site da Lougon.tech

Site institucional da Lougon.tech e a landing page da Profitly. Feito em React
+ TypeScript com Vite, e publicado na Hostinger pelo workflow
[`deploy.yml`](../.github/workflows/deploy.yml) a cada push na `main` que toque
em `front-end/`.

Todo o conteúdo é em português (pt-BR) — não há troca de idioma.

## Rodando localmente

```bash
npm install
npm run dev
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento em http://localhost:5173 |
| `npm run build` | Checagem de tipos (`tsc -b`) e build de produção em `dist/` |
| `npm run lint` | Roda o ESLint em todo o projeto |
| `npm run preview` | Serve o `dist/` já buildado |

## Estrutura

```
src/
  components/   Componentes da home (header, hero, produtos, contato…)
  config/       Links externos (WhatsApp, e-mail) e âncoras das seções
  pages/
    home/       Composição da home
    profitly/   Landing da Profitly: sections/, components/ e data/
```

São duas páginas, cada uma com seu HTML de entrada para ter title, descrição e
imagem de preview próprios (veja `build.rollupOptions.input` no
[`vite.config.ts`](vite.config.ts)):

- `/` → [`index.html`](index.html)
- `/profitly` → [`profitly/index.html`](profitly/index.html)

Como o roteamento é feito no cliente pelo React Router, o
[`.htaccess`](public/.htaccess) devolve o `index.html` para qualquer rota — sem
ele, acessar `/profitly` direto pela URL daria 404 na Hostinger.

Os textos e listas de cada seção ficam em arrays no topo do próprio componente
(ou em `pages/profitly/data/`), separados do JSX que os renderiza. Valores que
aparecem em vários lugares — preço do Plano Fundador, número de vagas e data de
lançamento — vêm de [`pages/profitly/data/constants.ts`](src/pages/profitly/data/constants.ts).

## Captação de leads

Os formulários do Plano Grátis e do Plano Fundador enviam os dados para uma
planilha do Google Sheets. O passo a passo da configuração (incluindo a variável
`VITE_GOOGLE_SHEETS_WEBHOOK_URL`) está em
[`GOOGLE_SHEETS_SETUP.md`](GOOGLE_SHEETS_SETUP.md). Sem essa variável, o lead só
é logado no console e nada é enviado.
