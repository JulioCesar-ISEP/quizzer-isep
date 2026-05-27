# US005 — Classificação automática do tipo da cadeira (`SubjectType`)

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero que o sistema classifique automaticamente o tipo da cadeira para adaptar o conteúdo e os minijogos.

## Requisitos

### User story

Como estudante, quero que o AprendiFluxo identifique se uma cadeira é `CALCULUS`, `DISCRETE_MATH`, `CODE` ou `SYSTEMS` para que os minijogos e o Survival Mode se adaptem ao meu contexto.

### Critérios de aceitação

- O sistema determina um `SubjectType` com base nos PDFs e/ou metadados.
- O utilizador consegue **corrigir manualmente** o tipo (US007).
- A classificação é persistida localmente e usada pelo motor de jogos.

## Domínio (design)

- `SubjectType` é um value object/enumeration.
- Regras: sempre existir um tipo final (fallback para `CODE` ou `SYSTEMS`, definido no pipeline).

## Ports

- Entrada: `ClassifySubjectTypeUseCase`
- Saída: `ISubjectClassifierPort` (heurística local ou LLM), `ISubjectRepository` (persistência)

## Adapters

- Fase 1: heurísticas simples + override manual
- Fase futura: LLM (Ollama/Groq) via backend

## Contracts (TypeScript)

O tipo já existe no código:

- `src/shared/types/SubjectType.ts`

Contrato esperado:

```ts
export type SubjectType = 'CALCULUS' | 'DISCRETE_MATH' | 'CODE' | 'SYSTEMS';

export interface SubjectClassification {
  subjectId: string;
  subjectType: SubjectType;
  confidence?: number;
  rationale?: string;
}
```

## Implementation notes (mapeamento)

- Reuso do tipo: `src/shared/types/SubjectType.ts`
- Reuso do tipo: `src/shared/types/SubjectType.ts`
- US015 já consome `subjectType` no payload do Survival (`src/ports/survival/contracts.ts`)
