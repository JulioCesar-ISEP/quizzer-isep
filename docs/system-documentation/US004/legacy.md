# US004 — Upload de PDF de Exames Anteriores

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero fazer upload de um PDF de exames anteriores para que o sistema gere questões no formato real do exame.

## Requisitos

### User story

Como estudante, quero carregar um PDF de exames para que o AprendiFluxo extraia perguntas, padrões e tópicos recorrentes.

### Critérios de aceitação

- Upload aceita `.pdf` e valida tipo/tamanho.
- O PDF é associado a uma cadeira (`SubjectId`) e a um `examYear` (opcional).
- O sistema permite múltiplos PDFs de exames para a mesma cadeira.
- O upload dispara (ou agenda) pipeline (US006).

## Domínio (design)

- `DocumentType = EXAMS`
- Metadados: ano, época, professor (opcional), fonte.

## Ports

- `UploadPdfUseCase` (mesmo use case da US003, com `documentType: EXAMS`)
- `IPdfStoragePort`, `IPipelineTriggerPort`

## Adapters

- UI: upload + lista de PDFs anexados por cadeira
- Persistência: local-first (ver ADR-004)

## Contracts (TypeScript)

```ts
export interface UploadExamPdfInput {
  subjectId: string;
  documentType: 'EXAMS';
  examYear?: number;
  fileName: string;
  mimeType: 'application/pdf';
  sizeBytes: number;
  bytes?: Uint8Array;
  path?: string;
}
```

## Implementation notes

- Deve alimentar o mesmo pipeline (US006), mas com passos diferentes (classificação/extrator orientado a enunciados).

## Ver também

- US003, US006, US007, US008
