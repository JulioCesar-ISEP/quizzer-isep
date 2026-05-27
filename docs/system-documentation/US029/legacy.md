# US029 — Sistema de pontos, níveis e streaks

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa  
**Status:** Parcial (há XP/streak no frontend)

## Resumo

Gamificação leve: pontos/níveis/streaks consistentes no produto todo.

## Requisitos

- Definir regras de pontos por atividade.
- Níveis do utilizador e streak diário (opcional).
- Persistência local-first e eventual sync.

## Referências (código atual)

- XP/achievements: `src/adapters/persistence/useProgress.js`, `src/adapters/persistence/useAchievements.js`
- Streak/painel: `src/adapters/frontend/components/ui/QuizHeader.jsx`
