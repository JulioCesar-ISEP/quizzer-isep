# ADR-004: Stack Local-First (Ollama + ChromaDB + FastAPI)

**Status:** Aceite  
**Data:** 2026-05-26

## Contexto

O AprendiFluxo destina-se a estudantes que podem não ter acesso a internet estável durante sessões de estudo. O pipeline de RAG requer um modelo de linguagem e uma base vectorial. As opções são: serviço cloud (OpenAI, Groq) ou stack local.

Requisitos determinantes:
- Privacidade dos PDFs académicos (ficam no dispositivo do utilizador).
- Funcionamento offline após instalação inicial.
- Custo zero de inferência por sessão.
- Configurabilidade avançada na Phase 2 (US023 — temperatura, modelo).

## Decisão

Adoptar uma **stack local-first**:

| Componente | Escolha | Papel |
|---|---|---|
| LLM | **Ollama** (llama3 / mistral) | Geração de questões e explicações |
| Base vectorial | **ChromaDB** | Armazenamento e pesquisa de embeddings |
| Backend API | **FastAPI** (Python) | Orquestração do pipeline e ports REST |
| Frontend | React + Vite | UI (já existente) |

O frontend comunica com o FastAPI via REST. O FastAPI comunica com Ollama e ChromaDB localmente.

Groq (cloud) é suportado como alternativa configurável (US023) mas não é o caminho principal.

## Alternativas consideradas

| Alternativa | Motivo de exclusão |
|---|---|
| OpenAI API | Custo por token; dados saem do dispositivo |
| LangChain como framework central | Acoplamento excessivo; Builder próprio é mais transparente |
| IndexedDB para vectores | Sem suporte a pesquisa por similaridade eficiente |

## Consequências

- Instalação local do Ollama é pré-requisito para a Phase 1.
- O adaptador RAG (`adapters/rag/`) será o substituto do `staticLevelAdapter` existente.
- `storageKeys.js` (localStorage) mantém-se para progresso e preferências; ChromaDB é apenas para conteúdo.
- A configuração do modelo fica em `infrastructure/config/` (Phase 2).

## Links

- [ADR-001](ADR-001-hexagonal-architecture.md)
- [ADR-002](ADR-002-pdf-pipeline-builder.md)
- [Pipeline Design](../pipeline-design.md)
- [Roadmap](../roadmap.md)
