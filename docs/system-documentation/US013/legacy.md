# US013 — Sistema adaptativo simples (erro no Survival → corretivo)

**Épico:** Adaptatividade Básica + Progresso  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Quando o utilizador erra no Survival Mode, o sistema deve sugerir (ou forçar) um minijogo corretivo alinhado com a lacuna detetada.

## Requisitos

### User story

Como estudante, quero que o sistema reaja aos meus erros e me guie para um treino corretivo, para fechar lacunas rapidamente.

### Critérios de aceitação

- Ao errar uma questão no Survival, o sistema regista a lacuna (tópico/skill).
- O sistema recomenda um minijogo corretivo (Diff/Molde/Follow Bit) com conteúdo relacionado.
- (Opcional Phase 1) O progresso no Survival pode ser bloqueado até concluir o corretivo.
- As recomendações ficam registadas no histórico da sessão.

## Domínio (design)

- `WeakPoint` (topicId, count, lastSeenAt)
- `Recommendation` (gameType, reason, relatedTopicId)

## Ports

- Entrada: `OnMistakeRecordedUseCase`
- Saída:
  - `IRecommendationsPort`
  - `IGameContentPort`
  - `IProgressRepository`

## Adapters

- UI: modal/banner “treino corretivo recomendado”
- Persistence: guardar weak points localmente (Phase 1)

## Ver também

- US012/US015 (Survival)
- US009/US010/US011 (minijogos)
