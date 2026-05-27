# ADR-003: Strategy Pattern para Minijogos

**Status:** Aceite  
**Data:** 2026-05-26

## Contexto

O AprendiFluxo prevê quatro minijogos distintos — Diff, Molde, Follow Bit e Survival Mode — cada um com regras e formatos de questão diferentes. Adicionalmente, o comportamento de cada jogo varia conforme o `SubjectType` da cadeira (ex.: Diff em CALCULUS apresenta expressões matemáticas; em CODE apresenta blocos de código).

O motor de jogo tem de:
- Partilhar a mesma interface de activação (`IGameStrategy`).
- Ser seleccionado em tempo de execução com base no tipo de jogo e no `SubjectType`.
- Permitir adicionar novos minijogos sem alterar o código existente.

## Decisão

Adoptar o **Strategy Pattern** para os motores de minijogos:

```
IGameStrategy
  ├── DiffStrategy
  ├── MoldeStrategy
  ├── FollowBitStrategy
  └── SurvivalStrategy   ← único implementado na Phase 0 (frontend)
```

O selector de estratégia (`GameStrategySelector`) recebe `(gameType, subjectType)` e devolve a estratégia adequada.

No frontend actual, `useSurvivalEngine` cumpre o papel da `SurvivalStrategy` antes da formalização do selector.

## Alternativas consideradas

| Alternativa | Motivo de exclusão |
|---|---|
| Switch/case monolítico | Viola Open/Closed Principle; difícil de escalar |
| Herança directa | Acopla lógica de selecção à hierarquia de classes |

## Consequências

- Cada minijogo pode evoluir independentemente.
- O adaptador frontend (`useSurvivalEngine`) será encapsulado numa `SurvivalStrategy` formal na Phase 1.
- A interface `IGameStrategy` é definida em `core/` e não importa React.
- Minijogos novos (US016+) seguem o mesmo padrão sem tocar nos existentes.

## Links

- [ADR-001](ADR-001-hexagonal-architecture.md)
- [Roadmap](../roadmap.md)
- [US015-README](../US015/US015-README.md)
