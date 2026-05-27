# US036 — Modo Offline (cache de jogos)

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Permitir jogar e rever conteúdo sem ligação, com cache local e sincronização posterior (se aplicável).

## Requisitos

- Cache de conteúdo e assets por cadeira.
- UX clara quando offline (limitações e estado).
- Sem perda de progresso (fila de eventos local).

## Ports

- Entrada: `EnableOfflineModeUseCase`
- Saída: `ICachePort`, `IEventQueuePort`
