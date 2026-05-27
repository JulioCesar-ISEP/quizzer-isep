# US027 — Adapters

- **UI**: export disponível no ecrã de conclusão da sessão.
- **Persistência**: relatório diário guardado no `localStorage` e também descarregado como ficheiro `.md`.

## Referências (código atual)

- Hook de reports: `src/adapters/persistence/useReports.js`
- Gerador do markdown: `src/adapters/frontend/utils/reports.js`
- Botão/export no UI: `src/adapters/frontend/components/views/CompletionView.jsx`
