# US040 — Reportar problemas + feedback de qualidade dos PDFs

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Permitir ao utilizador reportar problemas (bugs) e dar feedback sobre qualidade de extração dos PDFs para melhorar pipeline.

## Requisitos

- Formulário de feedback com contexto (cadeira, documento, pipeline run).
- (Local-first) guardar feedback localmente e permitir export.
- (Com backend) enviar feedback para servidor.

## Ports

- Entrada: `SubmitFeedbackUseCase`
- Saída: `IFeedbackRepository` / `IFeedbackTransportPort`
