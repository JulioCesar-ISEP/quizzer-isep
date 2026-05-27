# US021 — Estatísticas mais detalhadas por cadeira

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Média  
**Status:** Planeado

## Resumo

Expandir as estatísticas por cadeira (acerto por tópico, tempo, tendências) para orientar o estudo.

## Requisitos

- Mostrar acerto por tópico e por tipo de jogo.
- Mostrar evolução temporal (últimos 7/30 dias).
- Exportar/partilhar um resumo simples (liga com US027).

## Ports

- Entrada: `GetSubjectStatsUseCase`
- Saída: `IStatsRepository` (derivado de sessões/progresso)
