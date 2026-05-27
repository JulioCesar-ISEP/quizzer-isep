# US031 — Notificações inteligentes (lembretes, alerts de streak)

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Lembretes inteligentes para manter consistência (streak) e apoiar repetição espaçada.

## Requisitos

- Lembretes configuráveis (horário, frequência).
- Alertas quando há reviews em atraso.
- Respeitar privacidade (local-first; opt-in).

## Ports

- Entrada: `ScheduleNotificationsUseCase`
- Saída: `INotificationPort`
