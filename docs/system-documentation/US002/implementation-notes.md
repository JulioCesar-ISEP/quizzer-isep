# US002 — Implementation Notes

**Status:** Parcial (utilizável)

## O que está implementado

- Navegação **Cadeiras → Níveis** com conteúdo estático de `data/cadeiras`.
- Registry: `src/adapters/content/static/cadeirasRegistry.js`
- UI: `src/adapters/frontend/components/views/CadeirasView.jsx`, `LevelsView.jsx`
- Orquestração: `src/adapters/frontend/shell/AprendiFluxoShell.jsx`

## Fluxo utilizável

1. Início → lista de cadeiras.
2. Seleccionar cadeira → lista de níveis/desafios.
3. Iniciar nível → Survival (US015).

## Limitações

- **Não** permite criar/editar cadeiras do utilizador (máx. 3) — apenas catálogo estático.
- Persistência de cadeiras custom será Phase 1+.
