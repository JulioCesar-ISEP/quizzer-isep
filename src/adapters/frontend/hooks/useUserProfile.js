import { useState, useCallback, useMemo } from 'react';
import { UserProfileService } from '@core/user/UserProfileService';
import { userProfileRepository } from '@adapters/persistence/LocalStorageUserProfileRepository';

/**
 * US001 — Hook React sobre IUserProfileService.
 */
export function useUserProfile() {
  const service = useMemo(
    () => new UserProfileService(userProfileRepository),
    []
  );

  const [profile, setProfile] = useState(() => service.repository.load());
  const [error, setError] = useState(null);

  const refresh = useCallback(() => {
    setProfile(service.repository.load());
  }, [service]);

  const hasProfile = profile != null;

  const upsertProfile = useCallback(
    (input) => {
      try {
        setError(null);
        const saved = service.upsertProfile(input);
        setProfile(saved);
        return saved;
      } catch (err) {
        setError(err.message || 'Erro ao guardar perfil');
        throw err;
      }
    },
    [service]
  );

  const clearProfile = useCallback(() => {
    service.clearProfile();
    setProfile(null);
    setError(null);
  }, [service]);

  return {
    profile,
    hasProfile,
    error,
    upsertProfile,
    clearProfile,
    refresh,
  };
}
