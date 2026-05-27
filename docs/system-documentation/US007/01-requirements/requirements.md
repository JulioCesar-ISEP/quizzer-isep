# US007 — Requisitos

### User story

Como estudante, quero validar (e corrigir) tópicos/perguntas extraídas antes de jogar, para evitar estudo com base em dados errados.

### Critérios de aceitação

- O sistema mostra um preview dos outputs do pipeline por cadeira.
- O utilizador consegue editar pelo menos:
  - `SubjectType` (override US005)
  - perguntas (texto), opções e resposta correta
  - explicação (opcional)
- As alterações ficam persistidas localmente como “override” do conteúdo.
- É possível reverter overrides.
