# US035 — Eliminar dados de uma cadeira com segurança

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Eliminar todos os dados associados a uma cadeira (PDFs, conteúdo, progresso, histórico) com segurança e confirmações.

## Requisitos

- Confirmação forte (nome da cadeira / “typing confirmation”).
- Eliminar dados locais e caches relacionados.
- (Se houver sync) eliminar remotamente com política clara.

## Ports

- Entrada: `DeleteSubjectDataUseCase`
- Saída: `ISubjectRepository`, `IProgressRepository`, `IContentRepository`, `IPdfStoragePort`
