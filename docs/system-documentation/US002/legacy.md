# US002 — Criar e gerir até 3 cadeiras

**Épico:** Configuração Inicial  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero criar e gerir até 3 cadeiras para organizar o meu estudo no AprendiFluxo.

## Requisitos (user story + critérios de aceitação)

### User story

Como estudante, quero adicionar/remover/renomear cadeiras (até 3) para manter o meu ambiente de estudo simples e focado.

### Critérios de aceitação

- O utilizador consegue **criar** uma cadeira com um nome.
- O utilizador consegue **renomear** uma cadeira existente.
- O utilizador consegue **remover** uma cadeira (com confirmação).
- O sistema impede ter **mais de 3 cadeiras** (mensagem clara).
- Os dados persistem localmente (local-first).

## Domínio (design)

- **Entidades**: `Subject` (cadeira)
- **Regras**:
  - Máximo: 3 cadeiras
  - `Subject.id` estável (não depende do nome)

## Ports (hexagonal)

- **Entrada** (use case): `ManageSubjects` (create/rename/delete/list)
- **Saída**: `ISubjectRepository` (persistência local)

## Adapters

- **UI**: ecrã de cadeiras (lista + ações)
- **Persistência**: localStorage (ou outro storage local-first)
- **Conteúdo**: em Phase 1 pode existir “registry” estático, mas a US002 assume gestão do utilizador (não hardcoded).

## Contracts (TypeScript)

Este contrato deve viver em `src/ports/subjects/contracts.ts` (futuro).

```ts
export type SubjectId = string;

export interface Subject {
  id: SubjectId;
  name: string;
  createdAtISO: string;
}

export interface CreateSubjectInput {
  name: string;
}
```

## Implementation notes (mapeamento para o código atual)

- UI atual semelhante: `src/adapters/frontend/components/views/CadeirasView.jsx`
- Registry atual (static): `src/adapters/content/static/cadeirasRegistry.js` (a substituir por persistência do utilizador quando US002 for implementada)

## Ver também

- Roadmap: `docs/system-documentation/roadmap.md`
- ADR-004 (local-first): `docs/system-documentation/adr/ADR-004-local-first-stack.md`
