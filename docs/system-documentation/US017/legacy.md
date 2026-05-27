# US017 — Deteção automática de tópicos fracos

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Detetar tópicos fracos (weak points) por cadeira a partir de erros recorrentes e baixa confiança.

## Requisitos

### User story

Como estudante, quero que o sistema identifique os meus pontos fracos para eu focar o estudo.

### Critérios de aceitação

- O sistema calcula uma lista de tópicos fracos por cadeira.
- A lista é atualizada após sessões de jogos/Survival.
- O utilizador consegue abrir recomendações a partir de cada tópico fraco (US018).

## Domínio (design)

- `WeakPoint` (topicId, severity, lastSeenAt, evidence)

## Ports

- Entrada: `RecomputeWeakPointsUseCase`
- Saída: `IProgressRepository`, `IWeakPointsRepository`
