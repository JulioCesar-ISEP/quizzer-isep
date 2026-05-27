# US003 — Requisitos

### User story

Como estudante, quero carregar um PDF teórico (slides/apontamentos) para que o AprendiFluxo consiga extrair tópicos e gerar exercícios.

### Critérios de aceitação

- O utilizador consegue selecionar um ficheiro `.pdf` a partir da UI.
- O sistema valida tipo/tamanho e mostra erro se inválido.
- O ficheiro é associado a uma cadeira (`SubjectId`).
- O sistema guarda o PDF localmente ou referência (conforme stack local-first).
- O upload dispara (ou agenda) o pipeline (US006).
