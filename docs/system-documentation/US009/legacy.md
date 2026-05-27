# US009 — Jogar Diff (adaptado por `SubjectType`)

**Épico:** Motor de Minijogos  
**Phase:** Phase 1 — MVP  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Minijogo “Diff”: o utilizador compara/identifica diferenças (ou falhas) entre duas representações (ex.: código vs esperado), adaptado ao tipo da cadeira.

## Requisitos

### User story

Como estudante, quero jogar Diff para treinar identificação rápida de erros e padrões, com exemplos alinhados ao meu `SubjectType`.

### Critérios de aceitação

- O jogo é lançável a partir da cadeira.
- Cada ronda tem:
  - prompt
  - 2 opções/representações (A/B) ou uma “diff view”
  - resposta correta + explicação
- O jogo regista acertos/erros e alimenta adaptatividade (US013) e progresso (US014/US015).

## Domínio (design)

- `GameSession` (id, subjectId, gameType, rounds, score)
- `GameType = DIFF`

## Ports

- Entrada: `StartGameUseCase(gameType=DIFF)`
- Saída: `IGameContentPort` (conteúdo por cadeira/tipo), `IGameSessionRepository`

## Adapters

- UI: vista do Diff + componente de feedback
- Conteúdo: em Phase 1 pode vir do conteúdo extraído do pipeline (US006) ou stub

## Ver também

- ADR-003 (Strategy): `docs/system-documentation/adr/ADR-003-game-strategy-pattern.md`
