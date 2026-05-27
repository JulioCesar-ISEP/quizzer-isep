import { STORAGE_KEYS, readJson, writeJson } from '@infra/storage/storageKeys';

/**
 * US001 — Adapter de persistência do perfil (local-first).
 * Implementa IUserProfileRepository.
 */
export class LocalStorageUserProfileRepository {
  load() {
    return readJson(STORAGE_KEYS.userProfile, null);
  }

  save(profile) {
    writeJson(STORAGE_KEYS.userProfile, profile);
  }

  clear() {
    localStorage.removeItem(STORAGE_KEYS.userProfile);
  }
}

export const userProfileRepository = new LocalStorageUserProfileRepository();
