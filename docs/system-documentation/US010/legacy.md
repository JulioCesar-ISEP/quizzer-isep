# US010 — Jogar Molde (templates/lacunas)

**Épico:** Motor de Minijogos  
**Phase:** Phase 1 — MVP  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Minijogo “Molde”: preencher lacunas/slots em templates (código, fórmulas, definições) para treinar recuperação ativa.

## Requisitos

### User story

Como estudante, quero jogar Molde para praticar preenchimento de “buracos” em templates típicos do exame, adaptado ao `SubjectType`.

### Critérios de aceitação

- Cada ronda apresenta um template com lacunas.
- O utilizador preenche (texto/código curto) ou escolhe entre opções.
- O sistema valida a resposta (exata ou por regras simples) e mostra explicação.
- Erros podem gerar “corretivo” (US013).

## Domínio (design)

- `GameType = MOLDE`
- Ronda: template + placeholders + solução + explicação

## Ports

- Entrada: `StartGameUseCase(gameType=MOLDE)`
- Saída: `IGameContentPort`, `IGameSessionRepository`

## Adapters

- UI: editor simples para lacunas + validação
- Conteúdo: derivado de teoria/exames via pipeline (US006)

## Ver também

- ADR-003 (Strategy): `docs/system-documentation/adr/ADR-003-game-strategy-pattern.md`
