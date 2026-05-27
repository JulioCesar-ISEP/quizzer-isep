# US001 — Adaptadores

> Adaptadores implementam os ports definidos em `03-ports/`. Dependem de detalhes externos (React, localStorage).

## LocalStorageUserProfileRepository

Implementação de `IUserProfileRepository` usando localStorage.

**Localização futura:** `src/adapters/persistence/LocalStorageUserProfileRepository.ts`

| Método | Comportamento |
|---|---|
| `load()` | Lê `aprendifluxo-user-profile` via `readJson()` de `storageKeys.js`; devolve `null` se ausente. |
| `save(profile)` | Serializa e escreve via `writeJson()`. Actualiza `updatedAt` automaticamente. |
| `clear()` | Remove a chave do localStorage. |

**Nota:** usa as funções `readJson` / `writeJson` de `src/infrastructure/storage/storageKeys.js` — nunca acede ao `localStorage` directamente.

---

## useUserProfile (adaptador frontend — React hook)

Hook React que expõe o perfil à UI e liga ao `IUserProfileService`.

**Localização futura:** `src/adapters/frontend/hooks/useUserProfile.js`

| Valor exportado | Tipo | Descrição |
|---|---|---|
| `profile` | `UserProfile \| null` | Perfil actual |
| `hasProfile` | `boolean` | `true` se perfil existir |
| `upsertProfile(data)` | `function` | Cria ou actualiza o perfil |
| `clearProfile()` | `function` | Remove o perfil (reset) |

---

## ProfileSetupView (adaptador frontend — componente UI)

Componente React exibido na primeira utilização (quando `hasProfile === false`).

**Localização futura:** `src/adapters/frontend/components/views/ProfileSetupView.jsx`

- Formulário com campos: nome, curso (dropdown), ano (dropdown).
- Validação inline antes de submeter.
- Após confirmação, chama `upsertProfile(data)` e navega para a vista principal.

## Links

- [Ports](../03-ports/ports.md)
- [Contratos](../05-contracts/interfaces.ts)
- [storageKeys](../../../../src/infrastructure/storage/storageKeys.js)
