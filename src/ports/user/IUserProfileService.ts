import type { UserProfile, UserProfileInput } from './contracts';

export interface IUserProfileService {
  /** Verifica se existe um perfil configurado. */
  hasProfile(): boolean;

  /** Devolve o perfil actual ou lança erro se não existir. */
  getProfile(): UserProfile;

  /** Cria ou actualiza o perfil com os dados fornecidos. */
  upsertProfile(data: UserProfileInput): UserProfile;
}
