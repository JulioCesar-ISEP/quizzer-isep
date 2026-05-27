# US014 — Guardar progresso básico por cadeira

**Épico:** Adaptatividade Básica + Progresso  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Parcial (há persistência local no frontend)

## Resumo

Persistir progresso por cadeira (níveis concluídos, XP, etc.) em modo local-first.

## Requisitos

### User story

Como estudante, quero que o meu progresso por cadeira seja guardado para que eu consiga continuar a estudar ao longo de vários dias.

### Critérios de aceitação

- O sistema guarda progresso por cadeira localmente.
- O utilizador vê quais níveis/desafios já concluiu.
- Existe opção para resetar progresso (com confirmação).

## Domínio (design)

- `SubjectProgress` (subjectId, completedItems, totalXP, lastPlayedAt)

## Ports

- Entrada: `RecordProgressUseCase`
- Saída: `IProgressRepository`

## Adapters (mapeamento)

- Persistência atual: `src/adapters/persistence/useProgress.js`
- Chaves/migração: `src/infrastructure/storage/storageKeys.js`

## Referências (código atual)

- Hook de progresso: `src/adapters/persistence/useProgress.js`
- Storage keys/migração: `src/infrastructure/storage/storageKeys.js`
