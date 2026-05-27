import { validateUserProfileInput } from '@ports/user/contracts.ts';

/**
 * US001 — Use case de perfil (sem React).
 * Implementa IUserProfileService.
 */
export class UserProfileService {
  /** @param {import('@ports/user/IUserProfileRepository').IUserProfileRepository} repository */
  constructor(repository) {
    this.repository = repository;
  }

  hasProfile() {
    return this.repository.load() != null;
  }

  getProfile() {
    const profile = this.repository.load();
    if (!profile) {
      throw new Error('Perfil não configurado');
    }
    return profile;
  }

  upsertProfile(data) {
    const errors = validateUserProfileInput(data);
    if (errors.length > 0) {
      throw new Error(errors.join('; '));
    }

    const now = new Date().toISOString();
    const existing = this.repository.load();

    const profile = {
      name: data.name.trim(),
      course: data.course,
      year: data.year,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };

    this.repository.save(profile);
    return profile;
  }

  clearProfile() {
    this.repository.clear();
  }
}
