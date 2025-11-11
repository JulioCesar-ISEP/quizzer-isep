import { formatTime } from './formatters';

export const getOptionState = (index, selectedAnswer, showSolution, correctAnswer) => {
  if (!showSolution) return '';
  if (index === correctAnswer) return 'correct';
  if (index === selectedAnswer) return 'incorrect';
  return '';
};

export const calculateLevelProgress = (completedLevels, cadeira) => {
  const completedCount = completedLevels[cadeira?.id]?.length || 0;
  const totalCount = cadeira?.levels.length || 0;
  return {
    completedCount,
    totalCount,
    percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  };
};

export const getCadeiraStats = (cadeira, completedLevels) => {
  const progress = calculateLevelProgress(completedLevels, cadeira);
  return {
    ...progress,
    isFullyCompleted: progress.completedCount === progress.totalCount
  };
};

export const getQuizStats = (quizState, timeSpent, level) => {
  const totalExercises = level?.exercises.length || 0;
  const percentage = totalExercises > 0 ? Math.round((quizState.score / totalExercises) * 100) : 0;
  
  return {
    totalExercises,
    percentage,
    formattedTime: formatTime(timeSpent)
  };
};

export const shouldShowTheoryButton = (exercise) => {
  return exercise?.theoryPoints && Object.keys(exercise.theoryPoints).length > 0;
};

export const validateQuizData = (level, exerciseIndex) => {
  if (!level || !level.exercises || level.exercises.length === 0) {
    return false;
  }
  
  const exercise = level.exercises[exerciseIndex];
  if (!exercise || !exercise.options || exercise.options.length === 0) {
    return false;
  }
  
  return exercise.correct >= 0 && exercise.correct < exercise.options.length;
};