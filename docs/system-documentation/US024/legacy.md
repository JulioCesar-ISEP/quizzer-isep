# US024 — Feedback motivacional após jogos

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Mensagens motivacionais e feedback contextual (sem “gamificação pesada”), reforçando progresso e próximos passos.

## Requisitos

- Após uma sessão, mostrar resumo + 1–3 recomendações.
- Copy varia com desempenho (bom/regular/baixo) sem penalizar.
- Desligável nas definições.

## Ports

- Entrada: `GetPostSessionFeedbackUseCase`
- Saída: `IFeedbackGeneratorPort`
