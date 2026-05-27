# US001 — Ports (Interfaces)

> Ports definem o contrato entre o domínio e o mundo exterior. Não contêm implementação.

## IUserProfileRepository (port de saída)

Interface de persistência do perfil do utilizador.

```typescript
interface IUserProfileRepository {
  /** Devolve o perfil guardado, ou null se não existir. */
  load(): UserProfile | null;

  /** Persiste o perfil (cria ou substitui). */
  save(profile: UserProfile): void;

  /** Remove o perfil (reset). */
  clear(): void;
}
```

**Localização futura:** `src/ports/user/IUserProfileRepository.ts`

---

## IUserProfileService (port de entrada / use case)

Interface do use case de gestão do perfil, chamada pela UI.

```typescript
interface IUserProfileService {
  /** Verifica se existe um perfil configurado. */
  hasProfile(): boolean;

  /** Devolve o perfil actual ou lança erro se não existir. */
  getProfile(): UserProfile;

  /** Cria ou actualiza o perfil com os dados fornecidos. */
  upsertProfile(data: UserProfileInput): UserProfile;
}
```

**Localização futura:** `src/ports/user/IUserProfileService.ts`

---

## UserProfileInput (DTO de entrada)

```typescript
interface UserProfileInput {
  name: string;
  course: string;
  year: number;
}
```

## Links

- [Adaptadores](../04-adapters/adapters.md)
- [Contratos](../05-contracts/interfaces.ts)
- [ADR-001](../../adr/ADR-001-hexagonal-architecture.md)
