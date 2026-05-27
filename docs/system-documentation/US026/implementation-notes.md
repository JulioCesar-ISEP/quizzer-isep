# US026 — Implementation Notes

**Status:** Parcial (utilizável)

## Mapeamento para o código (actual)

- Toggle no header: `src/adapters/frontend/components/ui/Header.jsx`
- Estado e persistência: `src/app/App.jsx` + `readTheme`/`writeTheme` em `storageKeys.js`
- Classes CSS: `dark-theme` / `light-theme` em `App` e `AprendiFluxoShell`

## Fluxo utilizável

1. Clicar ícone sol/lua no header.
2. Tema persiste após recarregar a página.

## Limitações

- Sem preferência por sistema (prefers-color-scheme) automática.
