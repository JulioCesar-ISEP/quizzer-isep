# US019 — Guardar e retomar sessões

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Permitir que o utilizador guarde e retome uma sessão (Survival ou minijogo) sem perder contexto.

## Requisitos

### User story

Como estudante, quero pausar e retomar uma sessão para estudar em blocos curtos.

### Critérios de aceitação

- O sistema guarda o estado essencial da sessão (progresso, respostas, timer).
- O utilizador consegue retomar a última sessão a partir do dashboard da cadeira.
- O utilizador consegue descartar uma sessão guardada.

## Domínio (design)

- `SavedSession` (id, subjectId, mode, state, savedAt)

## Ports

- Entrada: `SaveSessionUseCase`, `ResumeSessionUseCase`
- Saída: `ISessionRepository`
