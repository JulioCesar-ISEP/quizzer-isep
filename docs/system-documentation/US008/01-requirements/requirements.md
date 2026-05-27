# US008 — Requisitos

### User story

Como estudante, quero voltar a correr o pipeline para uma cadeira para atualizar o conteúdo gerado.

### Critérios de aceitação

- Existe uma ação “Reprocessar” por cadeira.
- Ao reprocessar, o sistema cria uma nova execução (`PipelineRun`) e não sobrescreve silenciosamente o conteúdo anterior.
- O utilizador consegue selecionar qual versão do conteúdo está ativa (opcional Phase 1).
