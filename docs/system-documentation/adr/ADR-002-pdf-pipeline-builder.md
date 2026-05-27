# ADR-002: Builder Pattern para o Pipeline de PDFs

**Status:** Aceite  
**Data:** 2026-05-26

## Contexto

A ingestão de um PDF académico exige múltiplas etapas sequenciais: extração de texto, limpeza, segmentação em chunks, geração de embeddings, armazenamento vectorial e geração de jogos. Cada etapa produz um DTO de saída que serve de entrada à etapa seguinte.

O pipeline precisa de:
- Suportar diferentes `SubjectType` (CALCULUS, DISCRETE_MATH, CODE, SYSTEMS) com variações por etapa.
- Ser testável em isolamento por etapa.
- Permitir reprocessamento parcial (US008) sem repetir todo o fluxo.
- Garantir imutabilidade — cada etapa não altera o DTO recebido; cria um novo.

## Decisão

Implementar o pipeline com o **Builder Pattern** (Python, backend Phase 1):

```
PipelineBuilder
  .addStep(ExtractionStep)
  .addStep(CleaningStep)
  .addStep(ChunkingStep)
  .addStep(EmbeddingStep)
  .addStep(StorageStep)
  .addStep(GameGenerationStep)
  .build(subjectType)
```

Cada `Step` implementa a interface `IPipelineStep[InputDTO, OutputDTO]`.  
O `PipelineBuilder` instancia a sequência correta de passos consoante o `subjectType`.

## Alternativas consideradas

| Alternativa | Motivo de exclusão |
|---|---|
| Script linear único | Difícil de testar e de reprocessar parcialmente |
| Chain of Responsibility | Menos explícito para visualizar a ordem |
| Workflow engine externo | Dependência excessiva para o MVP |

## Consequências

- Cada etapa é uma unidade testável independente.
- Adicionar suporte a um novo `SubjectType` requer apenas sobreposição dos passos relevantes no builder.
- A interface `IPipelineStep` é o port central deste domínio — definida em `core/`.
- Não implementado na Phase 0 (frontend-only); activo a partir de US006.

## Links

- [Roadmap](../roadmap.md)
- [Pipeline Design](../pipeline-design.md)
- [ADR-001](ADR-001-hexagonal-architecture.md)
