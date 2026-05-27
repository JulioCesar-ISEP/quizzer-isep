# Pipeline de PDFs (design)

Processamento **sequencial e imutável**:

```text
Extração → Limpeza → Chunking → Embedding → Armazenamento → Geração dos Jogos
```

Cada etapa recebe um DTO de entrada e devolve um DTO de saída — sem efeitos colaterais ocultos.

**Status:** não implementado (Phase 1 — US001+).
