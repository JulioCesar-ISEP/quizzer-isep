# US016 — Sistema de Repetição Espaçada (Spaced Repetition)

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Introduzir repetição espaçada para agendar revisões com base em desempenho e tempo desde a última exposição.

## Requisitos

### User story

Como estudante, quero que o sistema agende revisões no momento certo para maximizar retenção.

### Critérios de aceitação

- O sistema calcula um “próximo review” por tópico/pergunta.
- O utilizador pode iniciar uma sessão de revisão (modo treino).
- O algoritmo é explicável (nível básico) e ajustável (Phase 2).

## Domínio (design)

- `ReviewItem` (topicId/questionId, dueAt, ease, interval)
- Regras: atualizar `ease/interval` com base em acerto/erro.

## Ports

- Entrada: `ScheduleReviewsUseCase`, `StartReviewSessionUseCase`
- Saída: `IReviewRepository`, `IContentPort`

## Adapters

- Persistência local-first para fila de reviews.
- UI: “Revisões de hoje” + sessão guiada.
