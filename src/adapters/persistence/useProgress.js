import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS, readJson, writeJson } from '@infra/storage/storageKeys';

export const useProgress = () => {
  const [completedLevels, setCompletedLevels] = useState(() =>
    readJson(STORAGE_KEYS.completedLevels, {})
  );

  const [totalXP, setTotalXP] = useState(() =>
    readJson(STORAGE_KEYS.totalXp, 0)
  );

  useEffect(() => {
    writeJson(STORAGE_KEYS.completedLevels, completedLevels);
  }, [completedLevels]);

  useEffect(() => {
    writeJson(STORAGE_KEYS.totalXp, totalXP);
  }, [totalXP]);

  const addCompletedLevel = useCallback((cadeiraId, levelId) => {
    setCompletedLevels(prev => {
      const currentLevels = prev[cadeiraId] || [];
      if (!currentLevels.includes(levelId)) {
        return {
          ...prev,
          [cadeiraId]: [...currentLevels, levelId]
        };
      }
      return prev;
    });
  }, []);

  const addXP = useCallback((xp) => {
    setTotalXP(prev => prev + xp);
  }, []);

  const resetProgress = useCallback(() => {
    setCompletedLevels({});
    setTotalXP(0);
  }, []);

  const getCadeiraCompletedLevels = useCallback((cadeiraId) => {
    return completedLevels[cadeiraId] || [];
  }, [completedLevels]);

  const isLevelCompleted = useCallback((cadeiraId, levelId) => {
    return getCadeiraCompletedLevels(cadeiraId).includes(levelId);
  }, [getCadeiraCompletedLevels]);

  return {
    completedLevels,
    totalXP,
    addCompletedLevel,
    addXP,
    resetProgress,
    getCadeiraCompletedLevels,
    isLevelCompleted,
    setCompletedLevels,
    setTotalXP
  };
};