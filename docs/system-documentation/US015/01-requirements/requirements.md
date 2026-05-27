# US015 — Requisitos

## História de Utilizador

> Como **estudante**, quero **jogar o Survival Mode** (simulador de exame) para praticar sob pressão de tempo e perceber onde errei.

## Requisitos Funcionais

| ID | Requisito |
|---|---|
| RF-015.1 | O sistema carrega uma sessão de exame a partir de um `SurvivalSessionPayload` válido. |
| RF-015.2 | As questões e as suas opções são apresentadas em ordem baralhadada. |
| RF-015.3 | O utilizador responde a cada questão seleccionando uma opção. |
| RF-015.4 | Após resposta, o sistema indica se a resposta foi correcta ou errada e exibe a explicação. |
| RF-015.5 | Um cronómetro regressivo é apresentado se `timeLimitSeconds` estiver definido no payload. |
| RF-015.6 | A sessão termina quando todas as questões forem respondidas ou o tempo expirar. |
| RF-015.7 | No final, é apresentado um ecrã de resultados com pontuação e taxa de acerto. |
| RF-015.8 | A UI é alimentada pelo adaptador estático (`staticLevelAdapter`) na ausência de RAG. |

## Requisitos Não Funcionais

| ID | Requisito |
|---|---|
| RNF-015.1 | O motor de jogo (`useSurvivalEngine`) não contém lógica de UI — apenas estado puro. |
| RNF-015.2 | O contrato `SurvivalSessionPayload` é estável e compatível com futura fonte RAG. |
| RNF-015.3 | A validação do payload é feita antes do início da sessão via `validateSurvivalPayload()`. |

## Critérios de Aceitação

- [ ] Dado um payload válido, quando a sessão inicia, então as questões são exibidas baralhadadas.
- [ ] Dado que o utilizador selecciona uma opção, quando confirma, então a resposta correcta e a explicação são reveladas.
- [ ] Dado que `timeLimitSeconds` está definido, quando o tempo expira, então a sessão termina automaticamente.
- [ ] Dado que todas as questões são respondidas, quando a última é confirmada, então o ecrã de resultados é exibido.
- [ ] Dado um payload inválido, quando a sessão é iniciada, então é exibida uma mensagem de erro com os detalhes da validação.

## Fora de âmbito (Phase 0)

- Bloqueio ao errar e minijogo corretivo (US013 — Phase 1).
- Geração de questões via RAG (US006+ — Phase 1).
- Persistência do histórico de sessões (US022 — Phase 2).
