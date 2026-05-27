# US006 — Requisitos

### User story

Como estudante, quero que o sistema processe PDFs (teoria + exames) e produza um “conteúdo da cadeira” versionado e reprodutível.

### Critérios de aceitação

- O pipeline é executável como uma sequência de passos configuráveis (Builder).
- É possível correr pipeline para uma cadeira específica.
- O pipeline produz um artefacto “conteúdo” consumível por ports de conteúdo.
- Os outputs são versionados (ou pelo menos auditáveis) e podem ser reprocessados (US008).
