# US038 — Suporte a múltiplos cursos

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Permitir que o utilizador tenha múltiplos cursos/perfis e que o conteúdo/progresso seja isolado por contexto.

## Requisitos

- Criar e alternar entre cursos/perfis.
- Isolar cadeiras, PDFs e progresso por curso.
- Migração suave do modelo single-course.

## Ports

- Entrada: `ManageCoursesUseCase`
- Saída: `ICourseRepository`, `ISubjectRepository`
