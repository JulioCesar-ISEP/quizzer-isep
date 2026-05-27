# US033 — Exportar relatório completo em PDF

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Gerar relatório completo (PDF) com métricas, evolução, weak points e recomendações.

## Requisitos

- Exportar PDF com sumário por cadeira e global.
- Incluir gráficos e histórico (US022/US032).
- Respeitar privacidade (dados locais; opt-in para cloud).

## Ports

- Entrada: `ExportFullReportUseCase`
- Saída: `IReportRendererPort`
