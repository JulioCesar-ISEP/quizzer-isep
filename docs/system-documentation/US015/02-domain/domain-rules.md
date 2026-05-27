# US015 — Domínio

## Entidades envolvidas

- `SurvivalQuestion` — pergunta individual (ver [entities.md](../../core-domain/entities.md))
- `SurvivalSessionPayload` — sessão completa (ver [entities.md](../../core-domain/entities.md))
- `RuntimeSurvivalQuestion` — questão enriquecida em tempo de execução pelo motor

## Regras de domínio aplicáveis

### RD-015.1 — Payload válido antes do início

O payload é validado com `validateSurvivalPayload()` antes de qualquer interacção do utilizador.  
Se inválido, a sessão não arranca e os erros são apresentados.

→ Ver [RD-001](../../core-domain/domain-rules.md#rd-001--validação-de-survivalsessionpayload)

### RD-015.2 — Baralhar questões e opções no início

Ao iniciar a sessão, o motor baralha a ordem das questões e das opções de cada questão.  
O índice correcto original é preservado em `RuntimeSurvivalQuestion.originalCorrectIndex`.

→ Ver [RD-002](../../core-domain/domain-rules.md#rd-002--baralhar-questões-e-opções)

### RD-015.3 — Progressão sequencial

O utilizador responde às questões uma a uma, pela ordem baralhadada.  
Não é possível saltar questões ou voltar atrás (Phase 0).

→ Ver [RD-003](../../core-domain/domain-rules.md#rd-003--progressão-de-sessão)

### RD-015.4 — SubjectType determina apresentação

O `subjectType` do payload determina se as questões apresentam blocos de código, fórmulas ou texto simples.

→ Ver [RD-004](../../core-domain/domain-rules.md#rd-004--subjecttype-determina-comportamento)

### RD-015.5 — Adaptador estático é temporário

Na Phase 0, o payload é gerado por `staticLevelAdapter` a partir de `data/prcmp`.  
Na Phase 1, será substituído pelo adaptador RAG sem alterar o contrato.

→ Ver [RD-005](../../core-domain/domain-rules.md#rd-005--adaptador-estático-é-temporário)

## Links

- [Contratos](../05-contracts/interfaces.ts)
- [Ports](../03-ports/ports.md)
