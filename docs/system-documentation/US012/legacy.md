# US012 — Jogar Survival Mode (simulador de exame)

**Épico:** Motor de Minijogos  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Parcial (há implementação base em US015)

## Resumo

Survival Mode é o modo “exame simulado”. Esta US foca a experiência de jogar (iniciar sessão, responder, finalizar), enquanto a US015 cobre contratos/motor e progresso simples.

## Requisitos

### User story

Como estudante, quero iniciar uma sessão de Survival Mode numa cadeira e responder a um conjunto de perguntas para simular condições de exame.

### Critérios de aceitação

- O utilizador consegue iniciar Survival a partir de uma cadeira.
- As perguntas são apresentadas uma a uma (com navegação).
- O sistema calcula pontuação e mostra resultados no final.
- O modo suporta limite de tempo (se definido no payload).
- Existe modo de revisão de erros no fim.

## Domínio (design)

- `SurvivalSession` (id, subjectId, questions, answers, score, timeLimitSeconds?)
- Regras: não depende da fonte (RAG vs estático)

## Ports

- Entrada: `StartSurvivalSessionUseCase`
- Saída: `ISurvivalContentPort` (fornecer `SurvivalSessionPayload`)

## Adapters

- UI: `QuizView` + `CompletionView` (frontend atual)
- Content adapter (Phase 1): adaptador estático que converte o legado para payload

## Implementation notes (mapeamento)

- Shell/orquestração: `src/adapters/frontend/shell/AprendiFluxoShell.jsx`
- Motor de sessão: `src/adapters/frontend/hooks/useSurvivalEngine.js`
- Conteúdo estático (ponte): `src/adapters/content/static/staticLevelAdapter.js`

## Referências (código atual)

- UI (sessão): `src/adapters/frontend/components/views/QuizView.jsx`
- UI (conclusão): `src/adapters/frontend/components/views/CompletionView.jsx`
- Timer (tempo decorrido): `src/adapters/frontend/hooks/useTimer.js`

## Ver também

- US015 (contrato + motor): `docs/system-documentation/US015/US015-README.md`
