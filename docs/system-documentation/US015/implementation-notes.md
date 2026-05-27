# US015 — Notas de Implementação

**Status:** Implementado

## O que está implementado

| Componente | Ficheiro | Estado |
|---|---|---|
| Contrato `SurvivalSessionPayload` | `src/ports/survival/contracts.ts` | ✓ Completo |
| `SubjectType` | `src/shared/types/SubjectType.ts` | ✓ Completo |
| `validateSurvivalPayload()` | `src/ports/survival/contracts.ts` | ✓ Completo |
| `useSurvivalEngine` | `src/adapters/frontend/hooks/useSurvivalEngine.js` | ✓ Funcional |
| `staticLevelAdapter` | `src/adapters/content/static/staticLevelAdapter.js` | ✓ Funcional (legado) |
| `AprendiFluxoShell` | `src/adapters/frontend/shell/AprendiFluxoShell.jsx` | ✓ Integrado |

## O que não está implementado

| Componente | Razão | Quando |
|---|---|---|
| RAG como fonte de payload | Pipeline PDF não existe ainda | Phase 1 (US006+) |
| Bloqueio ao errar + minijogo corretivo | Depende de US013 | Phase 1 |
| Persistência do histórico de sessões | Depende de US022 | Phase 2 |
| `ISurvivalContentPort` formal em TypeScript | Ainda informal (JS) | Phase 1 refactor |

## Decisões de implementação relevantes

- O `useSurvivalEngine` recebe o payload como prop, não o busca internamente. Isto mantém o hook testável e agnóstico à fonte.
- O contrato está em TypeScript (`contracts.ts`) mesmo que o motor esteja em JS — migração gradual (ADR-001).
- O `staticLevelAdapter` converte o formato de `data/prcmp` sem modificar os dados originais.

## Próximos passos (Phase 1)

1. Formalizar `ISurvivalContentPort` em `src/ports/survival/`.
2. Criar `RAGSurvivalAdapter` que chama `GET /api/session?subject=SYSTEMS`.
3. Remover `staticLevelAdapter` após validação do adaptador RAG.
4. Migrar `useSurvivalEngine.js` para TypeScript com tipagem completa.

## Links

- [US015-README](US015-README.md)
- [Contratos](05-contracts/interfaces.ts)
- [Roadmap](../roadmap.md)
