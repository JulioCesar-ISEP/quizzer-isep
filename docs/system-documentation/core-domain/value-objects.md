# Value Objects do Domínio

> Value objects são imutáveis e sem identidade própria. Igualdade por valor, não por referência.

## SubjectType

Classificação do tipo de cadeira académica. Define o comportamento de todo o pipeline e dos minijogos.

**Valores válidos:**

| Valor | Descrição |
|---|---|
| `CALCULUS` | Cálculo e análise matemática |
| `DISCRETE_MATH` | Matemática discreta, lógica, grafos |
| `CODE` | Programação, algoritmos, estruturas de dados |
| `SYSTEMS` | Sistemas operativos, arquitectura, redes |

**Localização:** `src/shared/types/SubjectType.ts`

**Funções auxiliares:**
- `isSubjectType(value)` — guarda de tipo; devolve `true` se `value` for um `SubjectType` válido.
- `SUBJECT_TYPES` — array readonly com todos os valores válidos.

**Uso:**
- Selecção de estratégia de jogo (ADR-003).
- Variação de passos no pipeline de PDF (ADR-002).
- Campo obrigatório de `SurvivalSessionPayload`.

---

## SurvivalTheoryPoints

Pontos teóricos associados a uma `SurvivalQuestion`. Fornece contexto de revisão após resposta errada.

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | `string` | ✓ | Título do ponto teórico |
| `content` | `string` | ✓ | Conteúdo explicativo |
| `keyPoints` | `string[]` | — | Lista de pontos-chave |
| `examples` | `string` | — | Exemplos ilustrativos |

**Imutabilidade:** gerado pelo RAG ou pelo adaptador estático; nunca alterado após criação.

---

## Value objects futuros (Phase 1+)

| Value Object | Descrição |
|---|---|
| `XPAmount` | Quantidade de XP (não negativa) |
| `CorrectRate` | Taxa de acerto `[0.0, 1.0]` |
| `TimeDuration` | Duração em segundos (positiva) |
| `ChunkId` | Identificador de chunk no ChromaDB |

## Links

- [Entidades](entities.md)
- [Regras de Domínio](domain-rules.md)
