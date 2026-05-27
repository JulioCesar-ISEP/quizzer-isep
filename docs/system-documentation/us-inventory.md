# Inventário — US tocadas pelo código actual

> Gerado para alinhar documentação com runtime. **Parcial (utilizável)** = fluxo navegável no app + código referenciado nas notas de implementação.

## Feature slices

| Slice | US | Estado alvo | Ficheiros principais |
|-------|-----|-------------|----------------------|
| Perfil | US001 | Parcial (utilizável) | `src/ports/user/*`, `src/core/user/UserProfileService.ts`, `src/adapters/persistence/LocalStorageUserProfileRepository.ts`, `src/adapters/frontend/hooks/useUserProfile.js`, `ProfileSetupView.jsx` |
| Cadeiras | US002 | Parcial (utilizável) | `cadeirasRegistry.js`, `CadeirasView.jsx`, `LevelsView.jsx` |
| SubjectType | US005 | Parcial (utilizável) | `src/shared/types/SubjectType.ts`, `contracts.ts` (Survival) |
| Survival UI | US012 | Parcial (utilizável) | `QuizView.jsx`, `CompletionView.jsx`, `useTimer.js` |
| Survival engine | US015 | Parcial (utilizável) | `useSurvivalEngine.js`, `staticLevelAdapter.js`, ports survival |
| Storage | US014 | Parcial (utilizável) | `storageKeys.js`, hooks persistence |
| Tema | US026 | Parcial (utilizável) | `App.jsx`, `AprendiFluxoShell.css`, `storageKeys.theme` |
| Relatórios | US027 | Parcial (utilizável) | `useReports.js`, `reports.js`, `CompletionView.jsx` |
| XP/Streak | US029 | Parcial (utilizável) | `useProgress.js`, `QuizHeader.jsx` |
| Achievements | US030 | Parcial (utilizável) | `useAchievements.js`, `AchievementPopup.jsx` |

## US sem código directo (fora deste batch)

US003–US004, US006–US011, US013, US016–US025, US028, US031–US040 (excepto as listadas acima) — documentação estruturada; implementação futura.

## Fluxo utilizável (smoke test manual)

1. Abrir app → configurar perfil (US001) se ausente.
2. Início → escolher cadeira → nível → Survival (US002 + US015).
3. Responder questões → ver resultados → concluir → XP + achievements (US029/US030).
4. Exportar relatório na conclusão (US027).
5. Alternar tema no header (US026).
