# US020 — Modo Treino Livre

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Modo em que o utilizador escolhe livremente o que treinar (tópico/tipo de jogo/dificuldade), sem constraints de “exame”.

## Requisitos

### User story

Como estudante, quero treinar um tópico específico para consolidar a matéria antes do Survival.

### Critérios de aceitação

- O utilizador escolhe cadeira, tópico (opcional), jogo e dificuldade.
- O sistema gera/seleciona conteúdo correspondente.
- O modo regista progresso e alimenta recomendações.

## Ports

- Entrada: `StartFreeTrainingUseCase`
- Saída: `IContentPort`, `IProgressRepository`
