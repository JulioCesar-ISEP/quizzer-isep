# US014 — Implementation Notes

**Status:** Parcial (utilizável)

## Mapeamento para o código (actual)

- Chaves centralizadas: `src/infrastructure/storage/storageKeys.js`
- Progresso por cadeira: `src/adapters/persistence/useProgress.js`
- Achievements/stats: `src/adapters/persistence/useAchievements.js`
- Perfil: `STORAGE_KEYS.userProfile`
- Relatórios: `getDailyReportKey()` + `readText`/`writeText`
- Tema: `readTheme` / `writeTheme`
- Migração legado Quizzer → AprendiFluxo: `migrateLegacyStorage()`

## Fluxo utilizável

- Completar nível → XP e níveis concluídos persistem após refresh.
- Reset de progresso no shell limpa estado local.

## Limitações

- Sem sync multi-dispositivo.
- Relatórios diários em markdown local (US027).
