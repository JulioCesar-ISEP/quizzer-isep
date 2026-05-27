# US027 — Exportar relatório básico de progresso

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Parcial (export atual existe)

## Resumo

Exportar um relatório simples com progresso/erros por cadeira.

## Requisitos

- Exportar um ficheiro (JSON/CSV/PDF simples) com resumo da sessão.
- Incluir: score, tempo, erros, tópicos (se disponíveis).
- Disponível a partir da cadeira e/ou final de sessão.

## Referências (código atual)

- Reports: `src/adapters/persistence/useReports.js`
- Gerador de relatório: `src/adapters/frontend/utils/reports.js`
- Export no UI: `src/adapters/frontend/components/views/CompletionView.jsx`
