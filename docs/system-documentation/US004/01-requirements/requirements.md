# US004 — Requisitos

### User story

Como estudante, quero carregar um PDF de exames para que o AprendiFluxo extraia perguntas, padrões e tópicos recorrentes.

### Critérios de aceitação

- Upload aceita `.pdf` e valida tipo/tamanho.
- O PDF é associado a uma cadeira (`SubjectId`) e a um `examYear` (opcional).
- O sistema permite múltiplos PDFs de exames para a mesma cadeira.
- O upload dispara (ou agenda) pipeline (US006).
