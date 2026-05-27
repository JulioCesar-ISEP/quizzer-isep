# US022 — Histórico de sessões

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Guardar e listar sessões anteriores (Survival/minijogos) com detalhes para revisão.

## Requisitos

- Listar sessões por cadeira e por data.
- Abrir detalhe: score, erros, tópicos, tempo.
- Permitir apagar sessões (local-first).

## Ports

- Entrada: `ListSessionsUseCase`, `GetSessionDetailUseCase`
- Saída: `ISessionHistoryRepository`
