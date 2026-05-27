# US015 — Ports

## ISurvivalContentPort (port de entrada de conteúdo)

Interface que abstrai a fonte de questões. Implementada pelo adaptador estático hoje; pelo adaptador RAG no futuro.

```typescript
interface ISurvivalContentPort {
  /**
   * Devolve um SurvivalSessionPayload para a cadeira e configuração indicadas.
   * Lança erro se não existir conteúdo disponível.
   */
  getSession(subjectType: SubjectType, options?: SessionOptions): Promise<SurvivalSessionPayload>;
}

interface SessionOptions {
  maxQuestions?: number;
  timeLimitSeconds?: number;
  tags?: string[];
}
```

**Localização futura:** `src/ports/survival/ISurvivalContentPort.ts`

**Implementações:**
- `StaticLevelAdapter` — `src/adapters/content/static/staticLevelAdapter.js` *(actual)*
- `RAGSurvivalAdapter` — `src/adapters/rag/` *(Phase 1)*

---

## ISurvivalSessionPort (port do motor de jogo)

Interface que o componente de UI usa para interagir com o motor de sessão.

```typescript
interface ISurvivalSessionPort {
  /** Estado actual da sessão. */
  state: SurvivalSessionState;

  /** Responde à questão actual. Avança para a próxima questão. */
  answer(selectedIndex: number): void;

  /** Termina a sessão antecipadamente. */
  abort(): void;
}

type SurvivalSessionState =
  | { phase: 'idle' }
  | { phase: 'active'; question: RuntimeSurvivalQuestion; questionIndex: number; total: number; timeLeft: number | null }
  | { phase: 'feedback'; question: RuntimeSurvivalQuestion; selectedIndex: number; isCorrect: boolean }
  | { phase: 'finished'; score: number; total: number; correctRate: number; elapsed: number };
```

**Implementação actual:** `useSurvivalEngine` em `src/adapters/frontend/hooks/useSurvivalEngine.js`

---

## Referências (código atual)

- `src/ports/survival/ISurvivalContentPort.ts`
- `src/ports/survival/ISurvivalSessionPort.ts`

## Links

- [Contratos](../05-contracts/interfaces.ts)
- [Adaptadores](../04-adapters/adapters.md)
- [ADR-003](../../adr/ADR-003-game-strategy-pattern.md)
