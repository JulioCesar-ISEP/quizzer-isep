# US001 — Notas de Implementação

**Status:** Parcial (utilizável)

## O que está implementado

| Componente | Ficheiro | Estado |
|---|---|---|
| Contratos `UserProfile` | `src/ports/user/contracts.ts` | Completo |
| Ports | `src/ports/user/IUserProfileRepository.ts`, `IUserProfileService.ts` | Completo |
| Repositório localStorage | `src/adapters/persistence/LocalStorageUserProfileRepository.js` | Funcional |
| Service (use case) | `src/core/user/UserProfileService.js` | Funcional |
| Hook React | `src/adapters/frontend/hooks/useUserProfile.js` | Funcional |
| UI setup/edição | `src/adapters/frontend/components/views/ProfileSetupView.jsx` | Funcional |
| Integração App | `src/app/App.jsx` (gate de perfil + header) | Funcional |

## Fluxo utilizável

1. Primeira abertura sem perfil → ecrã de configuração.
2. Guardar nome/curso/ano → navega para cadeiras.
3. Menu **Perfil** no header → editar perfil.
4. Nome aparece no cabeçalho.

## Limitações (Phase 0)

- Sem sincronização remota (US028).
- Sem avatar/foto.

## Chave de persistência

- `aprendifluxo-user-profile` via `STORAGE_KEYS.userProfile` em `src/infrastructure/storage/storageKeys.js`.
