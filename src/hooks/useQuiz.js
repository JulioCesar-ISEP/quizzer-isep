import { useState, useCallback } from 'react';

export const useQuiz = () => {
  const [quizState, setQuizState] = useState({
    currentExercise: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    showSolution: false,
    selectedAnswer: null,
    mistakes: [],
    levelCompleted: false,
    quizFinished: false,
    timeSpent: 0,
    startTime: Date.now()
  });

  const handleAnswer = useCallback((selectedIndex, exercise, level, cadeira, comments, setMistakes, setTotalXP) => {
    setQuizState(prevState => {
      if (prevState.selectedAnswer !== null) return prevState;

      const newState = {
        ...prevState,
        selectedAnswer: selectedIndex,
        showSolution: true
      };

      if (selectedIndex === exercise.correct) {
        const newScore = prevState.score + 1;
        const newStreak = prevState.streak + 1;
        newState.score = newScore;
        newState.streak = newStreak;
        newState.maxStreak = Math.max(prevState.maxStreak, newStreak);
        setTotalXP(prevXP => prevXP + level.xp);
      } else {
        newState.streak = 0;
        const commentKey = `${level.id}-${prevState.currentExercise}`;
        setMistakes(prevMistakes => [...prevMistakes, {
          cadeiraId: cadeira.id,
          cadeiraName: cadeira.name,
          levelId: level.id,
          levelName: level.name,
          exerciseIndex: prevState.currentExercise,
          question: exercise.question,
          code: exercise.code,
          selectedOption: exercise.options[selectedIndex],
          correctOption: exercise.options[exercise.correct],
          explanation: exercise.explanation,
          theoryPoints: exercise.theoryPoints,
          studentComment: comments[commentKey] || '',
          timestamp: new Date().toLocaleTimeString('pt-PT')
        }]);
      }

      return newState;
    });
  }, []);

  const nextExercise = useCallback((level, cadeira, completedLevels, setCompletedLevels) => {
    setQuizState(prevState => {
      const totalExercisesInLevel = level?.exercises.length || 0;
      const totalLevels = cadeira?.levels.length || 0;
      const currentCompletedLevels = completedLevels[cadeira.id] || [];

      if (prevState.currentExercise < totalExercisesInLevel - 1) {
        return {
          ...prevState,
          selectedAnswer: null,
          showSolution: false,
          currentExercise: prevState.currentExercise + 1
        };
      } else {
        if (!currentCompletedLevels.includes(level.id)) {
          setCompletedLevels(prevCompletedLevels => ({
            ...prevCompletedLevels,
            [cadeira.id]: [...currentCompletedLevels, level.id]
          }));
        }

        if (currentCompletedLevels.length + 1 === totalLevels) {
          return { ...prevState, quizFinished: true };
        } else {
          return { ...prevState, levelCompleted: true };
        }
      }
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentExercise: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      showSolution: false,
      selectedAnswer: null,
      mistakes: [],
      levelCompleted: false,
      quizFinished: false,
      timeSpent: 0,
      startTime: Date.now()
    });
  }, []);

  return {
    quizState,
    setQuizState,
    handleAnswer,
    nextExercise,
    resetQuiz
  };
};