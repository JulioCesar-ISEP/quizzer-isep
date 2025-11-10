import { useState, useEffect, useCallback } from 'react';

export const useProgress = () => {
  const [completedLevels, setCompletedLevels] = useState(() => {
    const saved = localStorage.getItem('quizzer-completed-levels');
    return saved ? JSON.parse(saved) : {};
  });

  const [totalXP, setTotalXP] = useState(() => {
    const saved = localStorage.getItem('quizzer-total-xp');
    return saved ? JSON.parse(saved) : 0;
  });

  // Persistir no localStorage
  useEffect(() => {
    localStorage.setItem('quizzer-completed-levels', JSON.stringify(completedLevels));
  }, [completedLevels]);

  useEffect(() => {
    localStorage.setItem('quizzer-total-xp', JSON.stringify(totalXP));
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