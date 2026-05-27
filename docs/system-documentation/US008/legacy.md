# US008 — Reprocessar uma cadeira

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero reprocessar uma cadeira quando atualizo PDFs ou quando o pipeline melhora.

## Requisitos

### User story

Como estudante, quero voltar a correr o pipeline para uma cadeira para atualizar o conteúdo gerado.

### Critérios de aceitação

- Existe uma ação “Reprocessar” por cadeira.
- Ao reprocessar, o sistema cria uma nova execução (`PipelineRun`) e não sobrescreve silenciosamente o conteúdo anterior.
- O utilizador consegue selecionar qual versão do conteúdo está ativa (opcional Phase 1).

## Domínio (design)

- `PipelineRun` versionado por `subjectId`
- Regras: manter histórico mínimo para debug/audit

## Ports

- Entrada: `ReprocessSubjectUseCase`
- Saída: `IRunPipelinePort` (US006), `IKnowledgeBaseRepository`

## Adapters

- UI: botão/ação e feedback de progresso
- Backend futuro: endpoint para disparar reprocessamento
