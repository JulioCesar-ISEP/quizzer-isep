import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS, readJson, writeJson } from '@infra/storage/storageKeys';

// Definição das conquistas
const ACHIEVEMENTS = [
  {
    id: 'first_quiz',
    title: 'Primeiro Desafio! 🎯',
    description: 'Completaste o teu primeiro quiz',
    icon: '🎯',
    condition: (stats) => stats.quizzesCompleted >= 1,
    xpReward: 50
  },
  {
    id: 'perfect_score',
    title: 'Perfeição! 🌟',
    description: 'Acertaste todas as questões de um quiz',
    icon: '🌟',
    condition: (stats) => stats.perfectScores >= 1,
    xpReward: 100
  },
  {
    id: 'streak_master',
    title: 'Sequência Quente! 🔥',
    description: 'Conseguiste uma sequência de 5 respostas corretas',
    icon: '🔥',
    condition: (stats) => stats.maxStreak >= 5,
    xpReward: 75
  },
  {
    id: 'quick_learner',
    title: 'Aprendiz Rápido! ⚡',
    description: 'Completaste um quiz em menos de 5 minutos',
    icon: '⚡',
    condition: (stats) => stats.fastCompletions >= 1,
    xpReward: 60
  },
  {
    id: 'dedicated_student',
    title: 'Estudante Dedicado! 📚',
    description: 'Completaste 10 quizzes',
    icon: '📚',
    condition: (stats) => stats.quizzesCompleted >= 10,
    xpReward: 150
  },
  {
    id: 'xp_master',
    title: 'Mestre do XP! 💰',
    description: 'Alcançaste 1000 pontos de experiência',
    icon: '💰',
    condition: (stats) => stats.totalXP >= 1000,
    xpReward: 200
  },
  {
    id: 'level_explorer',
    title: 'Explorador! 🗺️',
    description: 'Completaste todos os níveis de uma cadeira',
    icon: '🗺️',
    condition: (stats) => stats.completedCadeiras >= 1,
    xpReward: 120
  },
  {
    id: 'theory_reader',
    title: 'Curioso Intelectual! 🔍',
    description: 'Leste a teoria de 5 exercícios diferentes',
    icon: '🔍',
    condition: (stats) => stats.theoryReads >= 5,
    xpReward: 80
  },
  {
    id: 'comeback_kid',
    title: 'Resiliência! 💪',
    description: 'Melhoraste o score num quiz que já tinhas feito',
    icon: '💪',
    condition: (stats) => stats.improvedScores >= 1,
    xpReward: 90
  },
  {
    id: 'early_bird',
    title: 'Madrugador! 🌅',
    description: 'Completaste um quiz antes das 8h da manhã',
    icon: '🌅',
    condition: (stats) => stats.earlyCompletions >= 1,
    xpReward: 70
  }
];

export const useAchievements = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [pendingAchievements, setPendingAchievements] = useState([]);
  const [userStats, setUserStats] = useState({
    quizzesCompleted: 0,
    perfectScores: 0,
    maxStreak: 0,
    fastCompletions: 0,
    totalXP: 0,
    completedCadeiras: 0,
    theoryReads: 0,
    improvedScores: 0,
    earlyCompletions: 0
  });

  useEffect(() => {
    setUnlockedAchievements(readJson(STORAGE_KEYS.achievements, []));
    setUserStats(
      readJson(STORAGE_KEYS.userStats, {
        quizzesCompleted: 0,
        perfectScores: 0,
        maxStreak: 0,
        totalXP: 0,
        fastCompletions: 0,
        improvedScores: 0,
        earlyCompletions: 0,
      })
    );
  }, []);

  useEffect(() => {
    writeJson(STORAGE_KEYS.achievements, unlockedAchievements);
  }, [unlockedAchievements]);

  useEffect(() => {
    writeJson(STORAGE_KEYS.userStats, userStats);
  }, [userStats]);

  // Atualizar estatísticas do usuário
  const updateStats = useCallback((newStats) => {
    setUserStats(prev => ({ ...prev, ...newStats }));
  }, []);

  // Verificar conquistas
  const checkAchievements = useCallback((currentStats = {}) => {
    const updatedStats = { ...userStats, ...currentStats };
    const newAchievements = [];

    ACHIEVEMENTS.forEach(achievement => {
      // Verificar se a conquista já foi desbloqueada
      const isAlreadyUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
      
      // Verificar se a condição foi cumprida
      const conditionMet = achievement.condition(updatedStats);
      
      // Se a condição foi cumprida e ainda não está desbloqueada
      if (conditionMet && !isAlreadyUnlocked) {
        newAchievements.push({
          ...achievement,
          unlockedAt: new Date().toISOString()
        });
      }
    });

    return newAchievements;
  }, [userStats, unlockedAchievements]);

  // Desbloquear conquista
  const unlockAchievement = useCallback((achievementId) => {
    const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
    
    if (achievement && !unlockedAchievements.some(a => a.id === achievementId)) {
      const newAchievement = {
        ...achievement,
        unlockedAt: new Date().toISOString()
      };

      setUnlockedAchievements(prev => [...prev, newAchievement]);
      setPendingAchievements(prev => [...prev, newAchievement]);

      // Adicionar XP da conquista
      updateStats({ 
        totalXP: userStats.totalXP + achievement.xpReward 
      });

      // Remover da lista de pendentes após 5 segundos
      setTimeout(() => {
        setPendingAchievements(prev => 
          prev.filter(a => a.id !== achievementId)
        );
      }, 5000);

      return newAchievement;
    }

    return null;
  }, [unlockedAchievements, userStats.totalXP, updateStats]);

  // Desbloquear múltiplas conquistas
  const unlockMultipleAchievements = useCallback((achievementIds) => {
    achievementIds.forEach(id => unlockAchievement(id));
  }, [unlockAchievement]);

  // Verificar e desbloquear conquistas baseado nas estatísticas atuais
  const checkAndUnlockAchievements = useCallback((currentStats = {}) => {
    const newAchievements = checkAchievements(currentStats);
    newAchievements.forEach(achievement => {
      unlockAchievement(achievement.id);
    });
    return newAchievements;
  }, [checkAchievements, unlockAchievement]);

  // Resetar conquistas (para debugging)
  const resetAchievements = useCallback(() => {
    setUnlockedAchievements([]);
    setPendingAchievements([]);
    setUserStats({
      quizzesCompleted: 0,
      perfectScores: 0,
      maxStreak: 0,
      fastCompletions: 0,
      totalXP: 0,
      completedCadeiras: 0,
      theoryReads: 0,
      improvedScores: 0,
      earlyCompletions: 0
    });
  }, []);

  // Obter progresso de uma conquista específica
  const getAchievementProgress = useCallback((achievementId) => {
    const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
    if (!achievement) return null;

    const isUnlocked = unlockedAchievements.some(a => a.id === achievementId);
    
    // Para conquistas numéricas, podemos calcular o progresso
    if (achievementId === 'dedicated_student') {
      const progress = Math.min(userStats.quizzesCompleted / 10, 1);
      return { isUnlocked, progress, current: userStats.quizzesCompleted, target: 10 };
    }

    if (achievementId === 'xp_master') {
      const progress = Math.min(userStats.totalXP / 1000, 1);
      return { isUnlocked, progress, current: userStats.totalXP, target: 1000 };
    }

    return { isUnlocked, progress: isUnlocked ? 1 : 0 };
  }, [unlockedAchievements, userStats]);

  return {
    // Estado
    achievements: unlockedAchievements,
    pendingAchievements,
    userStats,
    
    // Ações
    updateStats,
    checkAchievements,
    unlockAchievement,
    unlockMultipleAchievements,
    checkAndUnlockAchievements,
    resetAchievements,
    getAchievementProgress,
    
    // Utilitários
    allAchievements: ACHIEVEMENTS
  };
};