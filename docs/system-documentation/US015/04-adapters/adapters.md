# US015 — Adaptadores

## staticLevelAdapter (adaptador de conteúdo — actual)

**Localização:** `src/adapters/content/static/staticLevelAdapter.js`  
**Implementa:** `ISurvivalContentPort` *(informalmente, Phase 0)*

Transforma os dados de `data/prcmp` (formato legado) no contrato `SurvivalSessionPayload`.

**Responsabilidades:**
- Mapear cada nível do dataset estático para uma `SurvivalQuestion[]`.
- Preencher `sessionId`, `subjectType`, `title` e `questions` no payload.
- **Não** introduzir regras de negócio — apenas conversão de formato.

**Limitações:**
- Suporta apenas `subjectType: 'SYSTEMS'` (PRCMP).
- Sem suporte a `timeLimitSeconds` dinâmico nem a `tags`.
- Será removido quando o adaptador RAG estiver funcional (Phase 1).

---

## useSurvivalEngine (adaptador frontend — motor de sessão)

**Localização:** `src/adapters/frontend/hooks/useSurvivalEngine.js`  
**Implementa:** `ISurvivalSessionPort` *(informalmente)*

Hook React que gere o estado completo da sessão Survival.

**Estado gerido:**
- Questões em formato `RuntimeSurvivalQuestion[]` (baralhadadas).
- Índice da questão actual.
- Fase da sessão: `idle` → `active` → `feedback` → `finished`.
- Cronómetro regressivo (quando `timeLimitSeconds` está definido).
- Pontuação e taxa de acerto finais.

**Não faz:**
- Não renderiza UI (sem JSX).
- Não acede ao localStorage directamente.
- Não conhece a fonte do payload (estático ou RAG).

---

## AprendiFluxoShell (adaptador frontend — orquestrador)

**Localização:** `src/adapters/frontend/shell/AprendiFluxoShell.jsx`

Componente raiz que:
- Recebe `currentView` e decide qual vista renderizar.
- Passa o payload (do `staticLevelAdapter`) ao `useSurvivalEngine`.
- Compõe `QuizView` e outros componentes de UI com o estado do motor.

---

## RAGSurvivalAdapter (futuro — Phase 1)

**Localização futura:** `src/adapters/rag/RAGSurvivalAdapter.ts`  
**Implementa:** `ISurvivalContentPort`

Consulta o FastAPI local (via REST) para obter um payload gerado pelo pipeline RAG.  
Substitui o `staticLevelAdapter` sem alterar o contrato nem o `useSurvivalEngine`.

## Links

- [Ports](../03-ports/ports.md)
- [Contratos](../05-contracts/interfaces.ts)
- [ADR-004](../../adr/ADR-004-local-first-stack.md)
