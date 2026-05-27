# US011 — Jogar Follow Bit

**Épico:** Motor de Minijogos  
**Phase:** Phase 1 — MVP  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Minijogo “Follow Bit”: exercícios de raciocínio passo-a-passo (seguir estados/transformações), útil para sistemas/algoritmos/bitwise.

## Requisitos

### User story

Como estudante, quero jogar Follow Bit para treinar execução mental de passos e acompanhar estados intermédios (ex.: stack, registos, transições).

### Critérios de aceitação

- Cada ronda tem estado inicial + regra(s) de transição + pergunta final.
- O utilizador responde (opções ou input curto) e recebe explicação.
- O jogo regista erros/acertos para adaptatividade (US013) e progresso (US014/US015).

## Domínio (design)

- `GameType = FOLLOW_BIT`
- Ronda: `initialState`, `steps[]`, `question`, `answer`, `explanation`

## Ports

- Entrada: `StartGameUseCase(gameType=FOLLOW_BIT)`
- Saída: `IGameContentPort`, `IGameSessionRepository`

## Adapters

- UI: visualizador de estados/steps
- Conteúdo: pipeline (US006) ou stub em Phase 1

## Ver também

- ADR-003 (Strategy): `docs/system-documentation/adr/ADR-003-game-strategy-pattern.md`
