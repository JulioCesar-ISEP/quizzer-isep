# US037 — Análise preditiva de desempenho

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Planeado

## Resumo

Prever probabilidade de sucesso no exame e sugerir plano de estudo com base em histórico e cobertura de tópicos.

## Requisitos

- Estimar “readiness” por cadeira.
- Explicar fatores principais (tópicos fracos, falta de prática, etc.).
- Recomendações acionáveis (US018).

## Ports

- Entrada: `GetReadinessForecastUseCase`
- Saída: `IPredictionPort`, `IStatsRepository`
