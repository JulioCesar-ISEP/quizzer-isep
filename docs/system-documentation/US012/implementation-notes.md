# US012 — Implementation Notes

**Status:** Parcial


## Mapeamento para o código (atual)

- Shell/orquestração: `src/adapters/frontend/shell/AprendiFluxoShell.jsx`
- Motor de sessão: `src/adapters/frontend/hooks/useSurvivalEngine.js`
- Conteúdo estático (ponte): `src/adapters/content/static/staticLevelAdapter.js`
- UI (sessão): `src/adapters/frontend/components/views/QuizView.jsx`
- UI (conclusão): `src/adapters/frontend/components/views/CompletionView.jsx`
- Timer: `src/adapters/frontend/hooks/useTimer.js`

## Notas

- A US012 descreve o “jogar” (UX/fluxo). O contrato/motor estão documentados em US015.

## Ver também

- US015 (contrato + motor): `docs/system-documentation/US015/US015-README.md`

---

## Arquivo

O draft anterior completo foi arquivado em `./legacy.md`.
