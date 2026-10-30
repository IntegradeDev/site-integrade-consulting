# Integrade Consulting

Site institucional (demonstração) da Integrade Consulting, construído com React + Vite + Tailwind CSS.

## Seções

- **Header** — logo textual `INTEGRADE` / `Consulting` e navegação
- **Hero** — posicionamento e indicadores principais
- **Serviços** — 6 cards de soluções
- **Sobre** — posicionamento, diferenciais e segmentos
- **Números** — indicadores de atuação
- **Clientes** — base completa com busca por nome e filtro por segmento
- **Footer** — navegação e segmentos

## Clientes

A base fica em `src/data/clients.js` e contém **97 clientes únicos**, distribuídos em 6 segmentos:

| Segmento | Clientes |
| --- | --- |
| Governo | 28 |
| Saúde | 10 |
| Educação | 14 |
| Indústria | 14 |
| Serviços | 13 |
| Terceiro Setor | 18 |
| **Total** | **97** |

O contador exibido na interface é sempre derivado de `clients.length` (nunca escrito à mão).

## Scripts

```bash
npm install    # instala dependências
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção
npm run preview
```

## Estrutura

```
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
src/
  App.jsx
  main.jsx
  index.css
  components/
    ClientsSection.jsx
    ClientCard.jsx
  data/
    clients.js
```
