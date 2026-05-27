# AprendiFluxo

Sistema de preparação para exames via engenharia reversa de PDFs com IA local.

## Stack (Phase 1 — frontend)

- React 18 + Vite
- TypeScript (contratos e domínio)
- Arquitetura hexagonal (`src/core`, `src/ports`, `src/adapters`, `src/infrastructure`)

## Comandos

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estrutura

```text
src/
├── app/                 # Bootstrap React
├── core/                # Domínio puro
├── ports/               # Contratos (interfaces)
├── adapters/
│   ├── frontend/        # UI, shell, hooks de apresentação
│   ├── content/static/  # Conteúdo legado (→ RAG)
│   └── persistence/     # localStorage
├── infrastructure/      # Detalhes técnicos (storage keys)
└── shared/              # Tipos e constantes

docs/system-documentation/   # Documentação obrigatória
data/                        # Conteúdo estático legado (a remover)
```

## Minijogos (roadmap)

1. Diff  
2. Molde  
3. Follow Bit  
4. **Survival Mode** (exame simulado — implementação atual do quiz)

## Documentação

Ver [docs/system-documentation/README.md](docs/system-documentation/README.md).
