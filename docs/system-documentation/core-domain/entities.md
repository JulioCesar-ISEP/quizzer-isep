# Entidades do Domínio

> Localização no código: `src/core/domain/` (em construção) e `src/ports/survival/contracts.ts`

## SurvivalQuestion

Representa uma pergunta de escolha múltipla usada em sessões de exame simulado.

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | `string` | ✓ | Identificador único da pergunta |
| `question` | `string` | ✓ | Enunciado da pergunta |
| `options` | `string[]` | ✓ | Lista de opções (mínimo 2) |
| `correctIndex` | `number` | ✓ | Índice da opção correcta em `options` |
| `explanation` | `string` | ✓ | Justificação da resposta correcta |
| `code` | `string` | — | Bloco de código associado (opcional) |
| `theoryPoints` | `SurvivalTheoryPoints` | — | Pontos teóricos de apoio |
| `hints` | `string[]` | — | Dicas progressivas |
| `tags` | `string[]` | — | Etiquetas temáticas |

**Invariantes:**
- `correctIndex` deve estar no intervalo `[0, options.length - 1]`.
- `options` deve ter pelo menos dois elementos.

---

## SurvivalSession (agregado)

Representa uma sessão completa de exame simulado. Transportada pelo `SurvivalSessionPayload`.

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `sessionId` | `string` | ✓ | Identificador único da sessão |
| `subjectType` | `SubjectType` | ✓ | Tipo de cadeira |
| `title` | `string` | ✓ | Título da sessão |
| `description` | `string` | — | Descrição opcional |
| `questions` | `SurvivalQuestion[]` | ✓ | Perguntas da sessão (não vazio) |
| `timeLimitSeconds` | `number` | — | Limite de tempo em segundos |
| `metadata` | `Record<string, unknown>` | — | Metadados livres (fonte RAG, versão, etc.) |

**Invariantes:**
- `questions` não pode ser um array vazio.
- `subjectType` deve ser um dos valores definidos em `SubjectType`.
- Validação centralizada em `validateSurvivalPayload()`.

---

## RuntimeSurvivalQuestion

Extensão de `SurvivalQuestion` usada apenas em tempo de execução pelo motor `useSurvivalEngine`. Não é persistida.

| Campo adicional | Tipo | Descrição |
|---|---|---|
| `originalId` | `string` | ID original antes de baralhar |
| `originalCorrectIndex` | `number` | Índice correcto antes de baralhar opções |
| `shuffledIndex` | `number` | Posição na sequência baralhadada |
| `originalIndex` | `number` | Posição original no payload |

---

## Entidades futuras (Phase 1+)

| Entidade | Descrição |
|---|---|
| `UserProfile` | Perfil do estudante (US001) |
| `Cadeira` | Cadeira académica com PDFs e estado (US002) |
| `PDFDocument` | Documento ingerido pelo pipeline (US003/004) |
| `Chunk` | Fragmento de texto com embedding associado |
| `GameSession` | Sessão genérica de minijogo (Diff, Molde, Follow Bit) |

## Links

- [Value Objects](value-objects.md)
- [Regras de Domínio](domain-rules.md)
- [Contratos US015](../US015/05-contracts/interfaces.ts)
