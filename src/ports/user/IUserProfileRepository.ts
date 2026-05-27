import type { UserProfile } from './contracts';

export interface IUserProfileRepository {
  /** Devolve o perfil guardado, ou null se não existir. */
  load(): UserProfile | null;

  /** Persiste o perfil (cria ou substitui). */
  save(profile: UserProfile): void;

  /** Remove o perfil (reset). */
  clear(): void;
}
