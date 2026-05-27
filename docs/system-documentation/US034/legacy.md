# US034 — Backup / importar cadeira

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Permitir exportar/importar uma cadeira (conteúdo + progresso) para backup e migração.

## Requisitos

- Exportar bundle (zip/json) por cadeira.
- Importar e validar integridade/versões.
- Evitar sobrescrever dados sem confirmação.

## Ports

- Entrada: `ExportSubjectBundleUseCase`, `ImportSubjectBundleUseCase`
- Saída: `IBackupPort`, `IProgressRepository`, `IContentRepository`
