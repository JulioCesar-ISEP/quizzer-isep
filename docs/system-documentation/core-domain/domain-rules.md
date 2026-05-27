# Regras de Domínio

> Regras de negócio puras, sem dependência de React, localStorage ou APIs externas.

## RD-001 — Validação de SurvivalSessionPayload

Um `SurvivalSessionPayload` é válido se e só se:

1. `sessionId` está presente e não vazio.
2. `subjectType` é um dos quatro valores definidos em `SubjectType`.
3. `title` está presente e não vazio.
4. `questions` é um array com pelo menos uma pergunta.
5. Para cada pergunta em `questions`:
   - `id` está presente.
   - `question` está presente.
   - `options` tem pelo menos dois elementos.
   - `correctIndex` é um número inteiro no intervalo `[0, options.length - 1]`.

**Função de validação:** `validateSurvivalPayload()` em `src/ports/survival/contracts.ts`.  
Devolve um array de strings de erro (vazio se válido).

---

## RD-002 — Baralhar questões e opções

Quando o motor de jogo (`useSurvivalEngine`) inicia uma sessão:

1. A ordem das questões é **baralhadada aleatoriamente**.
2. As opções de cada questão são **baralhadadas aleatoriamente**.
3. O `correctIndex` original é preservado em `originalCorrectIndex` (no `RuntimeSurvivalQuestion`).
4. O novo índice correcto é recalculado após o baralhar das opções.

**Finalidade:** evitar memorização por posição.

---

## RD-003 — Progressão de sessão

Durante uma sessão Survival activa:

- O utilizador responde às questões sequencialmente.
- Após resposta (certa ou errada), avança para a próxima questão.
- A sessão termina quando todas as questões forem respondidas ou o tempo expirar.
- O resultado final inclui: pontuação, taxa de acerto e tempo decorrido.

**Regra futura (Phase 1 — US013):** erro numa questão bloqueia o avanço e força um minijogo corretivo relacionado.

---

## RD-004 — SubjectType determina comportamento

O `SubjectType` de uma sessão define:

- A estratégia de jogo seleccionada (ADR-003).
- Os passos do pipeline de PDF activos para aquela cadeira (ADR-002).
- O formato de apresentação de questões (ex.: blocos de código em `CODE`; fórmulas em `CALCULUS`).

**Invariante:** o `SubjectType` de uma sessão não pode ser alterado após criação do payload.

---

## RD-005 — Adaptador estático é temporário

O `staticLevelAdapter` (`src/adapters/content/static/`) transforma dados de `data/prcmp` no contrato `SurvivalSessionPayload`. Esta transformação:

- É válida apenas durante a Phase 0 (sem RAG).
- Não pode injetar regras de negócio — só converte formato.
- Será substituída pelo adaptador RAG na Phase 1 (US006+).

---

## RD-006 — Domínio não importa React nem localStorage

Qualquer ficheiro em `src/core/` ou `src/ports/` não pode importar:
- Componentes React ou hooks (`useState`, `useEffect`, etc.).
- `localStorage` ou `sessionStorage` directamente.
- Módulos específicos de browser (`window`, `document`).

Estas dependências pertencem aos adaptadores (`src/adapters/`) e à infraestrutura (`src/infrastructure/`).

## Links

- [Entidades](entities.md)
- [Value Objects](value-objects.md)
- [ADR-001](../adr/ADR-001-hexagonal-architecture.md)
