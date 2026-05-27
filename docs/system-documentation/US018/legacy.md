# US018 — Recomendação inteligente da próxima sessão

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Recomendar a próxima sessão (qual cadeira, qual modo e qual conteúdo) com base em progresso, weak points e repetição espaçada.

## Requisitos

### User story

Como estudante, quero receber uma recomendação do “próximo passo” para estudar de forma consistente.

### Critérios de aceitação

- O sistema apresenta 1 recomendação principal e alternativas.
- A recomendação explica o porquê (ex.: tópicos fracos, reviews em atraso).
- O utilizador consegue iniciar a sessão recomendada com 1 clique.

## Domínio (design)

- `StudyRecommendation` (subjectId, mode, reason[], payload)

## Ports

- Entrada: `GetNextRecommendationUseCase`
- Saída: `IRecommendationsRepository`, `IContentPort`
