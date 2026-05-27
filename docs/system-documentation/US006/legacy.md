# US006 — Executar Pipeline completo de processamento (Builder Pattern)

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero executar um pipeline completo de processamento para transformar PDFs em conteúdo estruturado para minijogos e Survival Mode.

## Requisitos

### User story

Como estudante, quero que o sistema processe PDFs (teoria + exames) e produza um “conteúdo da cadeira” versionado e reprodutível.

### Critérios de aceitação

- O pipeline é executável como uma sequência de passos configuráveis (Builder).
- É possível correr pipeline para uma cadeira específica.
- O pipeline produz um artefacto “conteúdo” consumível por ports de conteúdo.
- Os outputs são versionados (ou pelo menos auditáveis) e podem ser reprocessados (US008).

## Domínio (design)

- `PipelineRun`: id, subjectId, inputs, outputs, timestamps, status
- `ExtractedKnowledgeBase`: tópicos, questões, explicações, metadados

## Ports

- Entrada: `RunPipelineUseCase`
- Saída:
  - `IPdfStoragePort` (inputs)
  - `IExtractionPort` (OCR/parsing/LLM)
  - `IKnowledgeBaseRepository` (outputs)

## Adapters

- Backend (planeado): FastAPI + Ollama + ChromaDB
- Local-first: cache local e reprocessamento

## Contracts (TypeScript)

```ts
export type PipelineStatus = 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';

export interface PipelineRun {
  id: string;
  subjectId: string;
  status: PipelineStatus;
  startedAtISO?: string;
  finishedAtISO?: string;
  errorMessage?: string;
}
```

## Ver também

- ADR-002: `docs/system-documentation/adr/ADR-002-pdf-pipeline-builder.md`
- Pipeline design: `docs/system-documentation/pipeline-design.md`
