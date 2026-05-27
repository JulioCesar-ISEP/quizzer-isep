# US003 — Upload de PDF Teórico

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero fazer upload de um PDF teórico para alimentar o pipeline de extração de conteúdo.

## Requisitos

### User story

Como estudante, quero carregar um PDF teórico (slides/apontamentos) para que o AprendiFluxo consiga extrair tópicos e gerar exercícios.

### Critérios de aceitação

- O utilizador consegue selecionar um ficheiro `.pdf` a partir da UI.
- O sistema valida tipo/tamanho e mostra erro se inválido.
- O ficheiro é associado a uma cadeira (`SubjectId`).
- O sistema guarda o PDF localmente ou referência (conforme stack local-first).
- O upload dispara (ou agenda) o pipeline (US006).

## Domínio (design)

- **Value Objects**:
  - `PdfDocument`: metadados (nome, hash, tamanho, origem)
  - `DocumentType = THEORY`

## Ports

- **Entrada**: `UploadPdfUseCase`
- **Saída**:
  - `IPdfStoragePort` (guardar bytes ou path)
  - `IPipelineTriggerPort` (iniciar pipeline US006)

## Adapters

- **UI**: componente de upload com feedback de progresso/erro
- **Persistência**: filesystem local (desktop) ou storage sandbox (web) — decisão ADR-004
- **Backend futuro**: quando existir FastAPI, a UI chama um endpoint e o backend guarda/processa

## Contracts (TypeScript)

```ts
export type SubjectId = string;

export type DocumentType = 'THEORY' | 'EXAMS';

export interface UploadPdfInput {
  subjectId: SubjectId;
  documentType: 'THEORY';
  fileName: string;
  mimeType: 'application/pdf';
  sizeBytes: number;
  bytes?: Uint8Array; // web
  path?: string;      // desktop/electron
}

export interface UploadPdfResult {
  documentId: string;
  sha256: string;
}
```

## Implementation notes

- Esta US é “pipeline-first”: deve encaixar com ADR-002 (Builder) e US006/US007/US008.
- Em Phase 1 (frontend puro), pode ser prototipada com armazenamento local e pipeline “stub”, mas o contrato deve antecipar o backend.

## Ver também

- ADR-002: `docs/system-documentation/adr/ADR-002-pdf-pipeline-builder.md`
- Pipeline design: `docs/system-documentation/pipeline-design.md`
