# Code Map (source → documentação)

Este ficheiro existe para garantir que o **código atual** está sempre referenciado na documentação do sistema.

## Bootstrap / App

- `src/app/main.jsx` — entrypoint React
- `src/app/App.jsx` — composição do app e views

## Shell / Navegação

- `src/adapters/frontend/shell/AprendiFluxoShell.jsx` — orquestração e routing por `VIEWS`
- `src/shared/constants/branding.js` — `APP_NAME` e `VIEWS`

## Survival Mode (UI)

- `src/adapters/frontend/components/views/QuizView.jsx` — UI da sessão
- `src/adapters/frontend/components/views/CompletionView.jsx` — UI de resultados/conclusão
- `src/adapters/frontend/components/ui/QuizHeader.jsx` — header/stats na sessão
- `src/adapters/frontend/components/ui/OptionButton.jsx` — opções/respostas
- `src/adapters/frontend/components/ui/SolutionPanel.jsx` — feedback/explicação
- `src/adapters/frontend/components/ui/TheoryModal.jsx` — teoria modal
- `src/adapters/frontend/components/ui/SessionStats.jsx` — stats (widget)
- `src/adapters/frontend/components/ui/CommentSection.jsx` — comentários

## Outras views (frontend)

- `src/adapters/frontend/components/views/LevelsView.jsx` — lista de desafios por cadeira
- `src/adapters/frontend/components/views/KnowledgeTreeView.jsx` — árvore de conhecimento
- `src/adapters/frontend/components/ui/Header.jsx` — header global
- `src/adapters/frontend/components/ui/Footer.jsx` — footer global
- `src/adapters/frontend/components/ui/StatsCard.jsx` — cards de métricas

## Utils (frontend)

- `src/adapters/frontend/utils/formatters.js` — formatação (tempo, percentagens, etc.)
- `src/adapters/frontend/utils/quizHelpers.js` — helpers do quiz (ex.: show theory)

## Ports (Survival)

- `src/ports/survival/ISurvivalSessionPort.ts` — interface de sessão Survival (port)
- `src/ports/survival/ISurvivalContentPort.ts` — interface de conteúdo Survival (port)
- `src/ports/survival/contracts.ts` — contratos e validação do payload

