import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { validateSurvivalPayload } from '@ports/survival/contracts.ts';

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const prepareShuffledQuestions = (payload, preserveState, initialShuffleRef) => {
  if (!payload?.questions?.length) return { questions: [], mapping: [] };

  if (preserveState && initialShuffleRef.current) {
    return initialShuffleRef.current;
  }

  const original = payload.questions;
  const shuffledIndices = shuffleArray([...Array(original.length).keys()]);

  const mapping = shuffledIndices.map((originalIndex, shuffledIndex) => ({
    originalIndex,
    shuffledIndex,
  }));

  const questions = shuffledIndices.map((originalIndex, shuffledIndex) => {
    const q = original[originalIndex];
    const optionsCopy = [...q.options];
    const correctAnswer = optionsCopy[q.correctIndex];
    const shuffledOptions = shuffleArray(optionsCopy);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

    return {
      ...q,
      id: `shuffled-${q.id}-${shuffledIndex}`,
      originalId: q.id,
      originalCorrectIndex: q.correctIndex,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      shuffledIndex,
      originalIndex,
    };
  });

  const result = { questions, mapping };
  if (!initialShuffleRef.current) {
    initialShuffleRef.current = result;
  }
  return result;
};

const INITIAL_QUIZ_STATE = {
  currentExercise: 0,
  answers: [],
  showSolution: false,
  showResults: false,
  timedOut: false,
  levelCompleted: false,
  quizFinished: false,
  isReviewMode: false,
};

/** Motor do Survival Mode — sessão de exame sem UI nem persistência. */
export function useSurvivalEngine(payload, options = {}) {
  const { enabled = true, onMistake } = options;

  const [quizState, setQuizState] = useState(INITIAL_QUIZ_STATE);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [exerciseMapping, setExerciseMapping] = useState([]);
  const [mistakes, setMistakes] = useState([]);
  const [shuffleKey, setShuffleKey] = useState(0);
  const initialShuffleRef = useRef(null);
  const sessionStartedAtRef = useRef(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const answeredCount = useMemo(
    () => quizState.answers.filter((a) => a !== undefined).length,
    [quizState.answers]
  );

  const validationErrors = useMemo(
    () => (payload ? validateSurvivalPayload(payload) : ['payload é obrigatório']),
    [payload]
  );

  const isReady = enabled && payload && validationErrors.length === 0;
  const timeLimitSeconds =
    typeof payload?.timeLimitSeconds === 'number' && payload.timeLimitSeconds > 0
      ? Math.floor(payload.timeLimitSeconds)
      : null;
  const hasTimeLimit = timeLimitSeconds != null;

  // Port compatibility (US015): expose a minimal ISurvivalSessionPort-like API.
  // This keeps current UI working while aligning the engine with the documented port shape.
  const state = useMemo(() => {
    if (!isReady) return { phase: 'idle' };

    const total = shuffledQuestions.length || 0;
    const elapsed =
      hasTimeLimit && remainingSeconds != null
        ? Math.max(0, timeLimitSeconds - remainingSeconds)
        : answeredCount;

    if (quizState.levelCompleted || quizState.quizFinished) {
      return {
        phase: 'completion',
        score,
        total,
        correctRate: total > 0 ? score / total : 0,
        elapsed,
        timedOut: quizState.timedOut,
        levelCompleted: quizState.levelCompleted,
        quizFinished: quizState.quizFinished,
      };
    }

    if (quizState.showResults) {
      return {
        phase: 'results',
        score,
        total,
        correctRate: total > 0 ? score / total : 0,
        elapsed,
        timedOut: quizState.timedOut,
        answers: quizState.answers,
      };
    }

    if (quizState.isReviewMode) {
      const question = shuffledQuestions[quizState.currentExercise] ?? null;
      if (!question) return { phase: 'idle' };
      const selectedIndex = quizState.answers[quizState.currentExercise];
      return {
        phase: 'review',
        question,
        questionIndex: quizState.currentExercise,
        total: shuffledQuestions.length,
        selectedIndex: typeof selectedIndex === 'number' ? selectedIndex : undefined,
        answers: quizState.answers,
      };
    }

    const question = shuffledQuestions[quizState.currentExercise] ?? null;
    if (!question) return { phase: 'idle' };

    const selectedIndex = quizState.answers[quizState.currentExercise];
    if (quizState.showSolution && typeof selectedIndex === 'number') {
      return {
        phase: 'feedback',
        question,
        questionIndex: quizState.currentExercise,
        total: shuffledQuestions.length,
        selectedIndex,
        isCorrect: selectedIndex === question.correctIndex,
        answers: quizState.answers,
      };
    }

    return {
      phase: 'active',
      question,
      questionIndex: quizState.currentExercise,
      total: shuffledQuestions.length,
      timeLeft: hasTimeLimit ? (remainingSeconds ?? null) : null,
      answers: quizState.answers,
    };
  }, [
    isReady,
    quizState.showResults,
    quizState.levelCompleted,
    quizState.quizFinished,
    quizState.isReviewMode,
    quizState.timedOut,
    quizState.showSolution,
    quizState.currentExercise,
    quizState.answers,
    shuffledQuestions,
    score,
    hasTimeLimit,
    remainingSeconds,
    timeLimitSeconds,
    answeredCount,
  ]);

  const reset = useCallback(() => {
    setQuizState(INITIAL_QUIZ_STATE);
    setShuffledQuestions([]);
    setExerciseMapping([]);
    setMistakes([]);
    initialShuffleRef.current = null;
    sessionStartedAtRef.current = null;
    setRemainingSeconds(null);
    setShuffleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const preserveState = quizState.isReviewMode;
    const { questions, mapping } = prepareShuffledQuestions(
      payload,
      preserveState,
      initialShuffleRef
    );
    setShuffledQuestions(questions);
    setExerciseMapping(mapping);
  }, [payload?.sessionId, isReady, quizState.isReviewMode, shuffleKey]);

  // Time limit (countdown) — owned by engine, UI-agnostic
  useEffect(() => {
    if (!isReady || !hasTimeLimit) return;
    if (quizState.showResults || quizState.levelCompleted || quizState.quizFinished) return;

    if (!sessionStartedAtRef.current) {
      sessionStartedAtRef.current = Date.now();
      setRemainingSeconds(timeLimitSeconds);
    }

    const tick = () => {
      const startedAt = sessionStartedAtRef.current;
      if (!startedAt) return;
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const nextRemaining = Math.max(0, timeLimitSeconds - elapsed);
      setRemainingSeconds(nextRemaining);

      if (nextRemaining === 0) {
        setQuizState((prev) => ({
          ...prev,
          showResults: true,
          timedOut: true,
        }));
      }
    };

    tick();
    const interval = setInterval(tick, 500);
    return () => clearInterval(interval);
  }, [
    isReady,
    hasTimeLimit,
    timeLimitSeconds,
    quizState.showResults,
    quizState.levelCompleted,
    quizState.quizFinished,
  ]);

  const getCurrentQuestion = useCallback(() => {
    if (shuffledQuestions.length === 0) return null;
    return shuffledQuestions[quizState.currentExercise] ?? null;
  }, [shuffledQuestions, quizState.currentExercise]);

  const getOriginalQuestion = useCallback(
    (shuffledIndex) => {
      const mapping = exerciseMapping.find((m) => m.shuffledIndex === shuffledIndex);
      if (!mapping || !payload) return null;
      return payload.questions[mapping.originalIndex] ?? null;
    },
    [exerciseMapping, payload]
  );

  const score = useMemo(() => {
    if (shuffledQuestions.length === 0) return 0;
    return quizState.answers.reduce((acc, answer, index) => {
      if (answer === undefined) return acc;
      const q = shuffledQuestions[index];
      return acc + (answer === q.correctIndex ? 1 : 0);
    }, 0);
  }, [quizState.answers, shuffledQuestions]);

  const maxStreak = useMemo(() => {
    if (shuffledQuestions.length === 0) return 0;
    let currentStreak = 0;
    let best = 0;
    quizState.answers.forEach((answer, index) => {
      if (answer === undefined) {
        currentStreak = 0;
        return;
      }
      const q = shuffledQuestions[index];
      if (answer === q.correctIndex) {
        currentStreak++;
        best = Math.max(best, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    return best;
  }, [quizState.answers, shuffledQuestions]);

  const handleAnswer = useCallback(
    (selectedIndex) => {
      const current = getCurrentQuestion();
      const original = getOriginalQuestion(quizState.currentExercise);
      if (!current) return;

      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentExercise] = selectedIndex;

      setQuizState((prev) => ({
        ...prev,
        answers: newAnswers,
        showSolution: true,
      }));

      if (selectedIndex !== current.correctIndex && original) {
        const mistake = {
          sessionId: payload?.sessionId,
          subjectType: payload?.subjectType,
          exerciseIndex: quizState.currentExercise,
          originalQuestionId: original.id,
          question: original.question,
          code: original.code,
          selectedOption: current.options[selectedIndex],
          correctOption: original.options[original.correctIndex],
          shuffledCorrectOption: current.options[current.correctIndex],
          explanation: original.explanation,
          theoryPoints: original.theoryPoints,
          timestamp: new Date().toLocaleTimeString('pt-PT'),
          wasShuffled: true,
          originalCorrectIndex: original.correctIndex,
          shuffledCorrectIndex: current.correctIndex,
        };
        setMistakes((prev) => [...prev, mistake]);
        onMistake?.(mistake);
      }
    },
    [
      getCurrentQuestion,
      getOriginalQuestion,
      quizState.answers,
      quizState.currentExercise,
      payload,
      onMistake,
    ]
  );

  const abort = useCallback(() => {
    // Minimal abort behavior: end session and show results.
    setQuizState((prev) => ({ ...prev, showResults: true }));
  }, []);

  const nextExercise = useCallback(() => {
    const total = shuffledQuestions.length;
    setQuizState((prev) => ({ ...prev, showSolution: false }));

    if (quizState.currentExercise < total - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentExercise: prev.currentExercise + 1,
      }));
      return;
    }

    const allAnswered =
      quizState.answers.length === total &&
      quizState.answers.every((a) => a !== undefined);

    if (allAnswered) {
      setQuizState((prev) => ({ ...prev, showResults: true }));
      return;
    }

    const firstUnanswered = quizState.answers.findIndex((a) => a === undefined);
    setQuizState((prev) => ({
      ...prev,
      currentExercise: firstUnanswered !== -1 ? firstUnanswered : prev.currentExercise,
      showResults: firstUnanswered === -1,
    }));
  }, [quizState.currentExercise, quizState.answers, shuffledQuestions.length]);

  const previousExercise = useCallback(() => {
    if (quizState.currentExercise > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentExercise: prev.currentExercise - 1,
        showSolution: false,
      }));
    }
  }, [quizState.currentExercise]);

  const goToExercise = useCallback((exerciseIndex) => {
    setQuizState((prev) => ({
      ...prev,
      currentExercise: exerciseIndex,
      showSolution: false,
      showResults: false,
    }));
  }, []);

  const showResultsScreen = useCallback(() => {
    setQuizState((prev) => ({ ...prev, showResults: true }));
  }, []);

  const enterReviewMode = useCallback(() => {
    if (!initialShuffleRef.current && payload) {
      initialShuffleRef.current = prepareShuffledQuestions(
        payload,
        true,
        initialShuffleRef
      );
    }
    setQuizState((prev) => ({
      ...prev,
      isReviewMode: true,
      showSolution: true,
      showResults: false,
      levelCompleted: false,
      quizFinished: false,
      currentExercise: 0,
    }));
  }, [payload]);

  const markLevelCompleted = useCallback(() => {
    setQuizState((prev) => ({ ...prev, levelCompleted: true }));
  }, []);

  const markQuizFinished = useCallback(() => {
    setQuizState((prev) => ({ ...prev, quizFinished: true }));
  }, []);

  return {
    payload,
    validationErrors,
    isReady,
    // Port shape
    state,
    answer: handleAnswer,
    abort,
    // Current engine API (kept for compatibility)
    quizState,
    setQuizState,
    shuffledQuestions,
    exerciseMapping,
    mistakes,
    score,
    maxStreak,
    hasTimeLimit,
    timeLimitSeconds,
    remainingSeconds,
    totalQuestions: shuffledQuestions.length,
    currentQuestion: getCurrentQuestion(),
    getOriginalQuestion,
    handleAnswer,
    nextExercise,
    previousExercise,
    goToExercise,
    showResultsScreen,
    enterReviewMode,
    markLevelCompleted,
    markQuizFinished,
    reset,
    initialShuffleRef,
  };
}
