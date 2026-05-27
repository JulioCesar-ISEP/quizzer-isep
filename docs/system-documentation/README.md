# AprendiFluxo — Documentação do Sistema

Documentação viva do projeto. **Regra:** atualizar docs antes de implementar features novas.

## Índice

- [Visão de arquitetura](./architecture-overview.md)
- [Code map (código ↔ docs)](./code-map.md)
- [Inventário US tocadas pelo código](./us-inventory.md)
- [Glossário](./glossary.md)
- [Pipeline de PDFs](./pipeline-design.md)
- [Roadmap](./roadmap.md)
- [ADRs](./adr/)
- [Domínio (core-domain)](./core-domain/)

## User Stories (US001–US040)

### Phase 1 — MVP

- [US001 — Perfil básico](./US001/US001-README.md)
- [US002 — Cadeiras (até 3)](./US002/US002-README.md)
- [US003 — Upload PDF teórico](./US003/US003-README.md)
- [US004 — Upload PDF exames](./US004/US004-README.md)
- [US005 — Classificação automática `SubjectType`](./US005/US005-README.md)
- [US006 — Pipeline PDF (Builder)](./US006/US006-README.md)
- [US007 — Preview + correção manual](./US007/US007-README.md)
- [US008 — Reprocessar cadeira](./US008/US008-README.md)
- [US009 — Minijogo Diff](./US009/US009-README.md)
- [US010 — Minijogo Molde](./US010/US010-README.md)
- [US011 — Minijogo Follow Bit](./US011/US011-README.md)
- [US012 — Survival Mode (jogar)](./US012/US012-README.md)
- [US013 — Adaptatividade básica (errar → corretivo)](./US013/US013-README.md)
- [US014 — Guardar progresso por cadeira](./US014/US014-README.md)
- [US015 — Survival Mode (progresso simples)](./US015/US015-README.md)

### Phase 2 — Enhanced

- [US016 — Spaced Repetition](./US016/US016-README.md)
- [US017 — Deteção de tópicos fracos](./US017/US017-README.md)
- [US018 — Recomendação da próxima sessão](./US018/US018-README.md)
- [US019 — Guardar e retomar sessões](./US019/US019-README.md)
- [US020 — Modo treino livre](./US020/US020-README.md)
- [US021 — Estatísticas detalhadas por cadeira](./US021/US021-README.md)
- [US022 — Histórico de sessões](./US022/US022-README.md)
- [US023 — Configuração avançada de IA](./US023/US023-README.md)
- [US024 — Feedback motivacional pós-jogo](./US024/US024-README.md)
- [US025 — Tutoriais interativos](./US025/US025-README.md)
- [US026 — Tema dark/light + UX](./US026/US026-README.md)
- [US027 — Exportar relatório básico](./US027/US027-README.md)

### Phase 3 — Advanced / Full

- [US028 — Autenticação + segurança](./US028/US028-README.md)
- [US029 — Sistema de pontos/níveis/streaks](./US029/US029-README.md)
- [US030 — Conquistas](./US030/US030-README.md)
- [US031 — Notificações inteligentes](./US031/US031-README.md)
- [US032 — Dashboard global](./US032/US032-README.md)
- [US033 — Relatório completo em PDF](./US033/US033-README.md)
- [US034 — Backup/importar cadeira](./US034/US034-README.md)
- [US035 — Eliminar dados com segurança](./US035/US035-README.md)
- [US036 — Modo offline](./US036/US036-README.md)
- [US037 — Análise preditiva](./US037/US037-README.md)
- [US038 — Suporte a múltiplos cursos](./US038/US038-README.md)
- [US039 — Partilha de cadeira (read-only)](./US039/US039-README.md)
- [US040 — Reportar problemas/feedback PDF](./US040/US040-README.md)

## ADRs

- [ADR-001 — Arquitetura hexagonal](./adr/ADR-001-hexagonal-architecture.md)
- [ADR-002 — Pipeline PDFs (Builder)](./adr/ADR-002-pdf-pipeline-builder.md)
- [ADR-003 — Minijogos (Strategy)](./adr/ADR-003-game-strategy-pattern.md)
- [ADR-004 — Stack local-first](./adr/ADR-004-local-first-stack.md)

## Core domain

- [Entidades](./core-domain/entities.md)
- [Value Objects](./core-domain/value-objects.md)
- [Regras de domínio](./core-domain/domain-rules.md)

## Diagramas (SVG)

| Diagrama | SVG |
|----------|-----|
| Arquitetura (contexto) | [context.svg](./svg/context.svg) |
| Pipeline PDF | [pipeline.svg](./svg/pipeline.svg) |
| US001 — Perfil | [us001-context.svg](./US001/svg/us001-context.svg) · [README](./US001/US001-README.md) |
| US015 — Survival | [us015-sequence.svg](./US015/svg/us015-sequence.svg) · [README](./US015/US015-README.md) |
