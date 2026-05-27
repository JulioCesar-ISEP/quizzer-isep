# US039 — Partilha de cadeira com colegas (read-only)

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Partilhar uma cadeira (conteúdo/estrutura) com colegas em modo read-only, mantendo privacidade do progresso individual.

## Requisitos

- Partilha gera um link/token read-only.
- Quem recebe consegue importar/visualizar o conteúdo.
- Progresso e dados pessoais não são partilhados por default.

## Ports

- Entrada: `ShareSubjectUseCase`, `ImportSharedSubjectUseCase`
- Saída: `ISharingPort`
