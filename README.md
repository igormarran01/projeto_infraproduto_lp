# A Jornada — Landing Page

Landing page de conversão para venda do curso na Hotmart, foco em público jurídico.

## Stack

- Vite (build)
- React 18
- Tailwind CSS
- JavaScript

## Como rodar

```bash
npm install
npm run dev
```

Build para produção:

```bash
npm run build
```

## Configuração

- **URL do Hotmart:** edite `HOTMART_URL` em [`src/data/copy.js`](src/data/copy.js) e coloque a URL real da página de checkout.
- **Textos:** todos os copy (headline, dor, solução, depoimentos, FAQ) estão em [`src/data/copy.js`](src/data/copy.js).
- **Logos de prova social:** em `copy.js`, na propriedade `prova.logos`, adicione `src: '/caminho/logo.png'` para cada parceiro quando tiver as imagens em `public/`.

## Estrutura

- **Hero** → **Dor** → **Solução** (3 blocos) → **Prova** (métricas + depoimentos + logos) → **CTA** → **FAQ** → **CTA** → **Footer**
- Uma rolagem só, sem modais obrigatórios.
- Mobile-first; sem uso de `localStorage` ou `sessionStorage`.
