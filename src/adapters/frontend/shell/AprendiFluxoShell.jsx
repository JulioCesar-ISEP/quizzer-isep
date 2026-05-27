import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useTimer } from '@adapters/frontend/hooks/useTimer';
import { useSurvivalEngine } from '@adapters/frontend/hooks/useSurvivalEngine';
import { useProgress } from '@adapters/persistence/useProgress';
import { useReports } from '@adapters/persistence/useReports';
import { useAchievements } from '@adapters/persistence/useAchievements';
import {
  createStaticSurvivalContentPort,
  toQuizViewExercise,
} from '@adapters/content/static/staticLevelAdapter';
import { listSubjects } from '@adapters/content/static/cadeirasRegistry';
import { VIEWS } from '@shared/constants/branding';
import CadeirasView from '@adapters/frontend/components/views/CadeirasView';
import LevelsView from '@adapters/frontend/components/views/LevelsView';
import QuizView from '@adapters/frontend/components/views/QuizView';
import KnowledgeTreeView from '@adapters/frontend/components/views/KnowledgeTreeView';
import CompletionView from '@adapters/frontend/components/views/CompletionView';
import AchievementPopup from '@adapters/frontend/components/ui/AchievementPopup';
import '@adapters/frontend/styles/AprendiFluxoShell.css';

const subjects = listSubjects();

const AprendiFluxoShell = ({ currentView, onViewChange, onProgressUpdate, isDark }) => {
  // Estados de navegação
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  
  // Estados de UI
  const [showTheory, setShowTheory] = useState(false);
  const [sessionStartTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeAchievements, setActiveAchievements] = useState([]);

  const {
    completedLevels,
    totalXP,
    addCompletedLevel,
    addXP,
    resetProgress,
    getCadeiraCompletedLevels,
  } = useProgress();

  const { dailyStats, downloadReport, initializeReports } = useReports();
  const {
    achievements,
    userStats,
    checkAchievements,
    unlockAchievement,
    updateStats,
  } = useAchievements();

  const lastProgressUpdate = useRef({ xp: 0, progress: 0 });

  const getCurrentCadeiraData = () => subjects.find((c) => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);

  const [survivalPayload, setSurvivalPayload] = useState(null);

  useEffect(() => {
    const levelData = getCurrentLevelData();
    if (
      !levelData ||
      !selectedCadeira ||
      (currentView !== VIEWS.SURVIVAL && currentView !== 'quiz')
    ) {
      setSurvivalPayload(null);
      return;
    }
    const port = createStaticSurvivalContentPort(levelData, { cadeiraId: selectedCadeira });
    let cancelled = false;
    Promise.resolve(port.getSession('SYSTEMS')).then((payload) => {
      if (!cancelled) setSurvivalPayload(payload);
    });
    return () => {
      cancelled = true;
    };
  }, [selectedCadeira, selectedLevel, currentView]);

  const survival = useSurvivalEngine(survivalPayload, {
    enabled:
      (currentView === VIEWS.SURVIVAL || currentView === 'quiz') &&
      Boolean(survivalPayload) &&
      !loading,
  });

  const {
    state: sessionState,
    answer: sessionAnswer,
    abort: sessionAbort,
    quizState,
    setQuizState,
    validationErrors,
    isReady,
    shuffledQuestions,
    exerciseMapping,
    mistakes,
    score,
    maxStreak,
    hasTimeLimit,
    remainingSeconds,
    nextExercise,
    previousExercise,
    goToExercise,
    showResultsScreen,
    enterReviewMode,
    markLevelCompleted,
    markQuizFinished,
    reset: resetSurvivalEngine,
    initialShuffleRef,
  } = survival;

  const timerEnabled =
    (currentView === VIEWS.SURVIVAL || currentView === 'quiz') &&
    !['completion', 'results', 'review', 'idle'].includes(sessionState?.phase);

  const { timeSpent, resetTimer, setStartTime } = useTimer(timerEnabled);

  const formatSeconds = (totalSeconds) => {
    if (typeof totalSeconds !== 'number' || Number.isNaN(totalSeconds) || totalSeconds < 0) {
      return '00:00';
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const displayTime = hasTimeLimit
    ? formatSeconds(remainingSeconds ?? 0)
    : (timeSpent || '00:00');

  const shuffledExercises = useMemo(
    () => shuffledQuestions.map(toQuizViewExercise),
    [shuffledQuestions]
  );

  const getCurrentExerciseData = () => {
    const q =
      sessionState?.question ??
      survival.currentQuestion;
    return q ? toQuizViewExercise(q) : null;
  };

  const getOriginalExercise = (shuffledIndex) => {
    const original = survival.getOriginalQuestion(shuffledIndex);
    if (!original) return null;
    return {
      ...original,
      correct: original.correctIndex,
    };
  };

  // ==================== EFEITOS ====================

  // Atualizar progresso no App pai
  useEffect(() => {
    const totalLevels = subjects.reduce((acc, c) => acc + c.levels.length, 0);
    const completedCount = Object.values(completedLevels).flat().length;
    const progress = Math.round((completedCount / totalLevels) * 100);
    
    if (lastProgressUpdate.current.xp !== totalXP || lastProgressUpdate.current.progress !== progress) {
      lastProgressUpdate.current = { xp: totalXP, progress };
      onProgressUpdate(totalXP, progress);
    }
  }, [totalXP, completedLevels, onProgressUpdate]);

  // Inicializar relatórios
  useEffect(() => {
    const initApp = async () => {
      try {
        setLoading(true);
        await initializeReports();
        setLoading(false);
      } catch (err) {
        setError('Erro ao inicializar a aplicação');
        setLoading(false);
      }
    };
    initApp();
  }, [initializeReports]);

  // Controlar classe do body para modais
  useEffect(() => {
    if (showTheory) {
      document.body.classList.add('ape-modal-open');
    } else {
      document.body.classList.remove('ape-modal-open');
    }
    
    return () => document.body.classList.remove('ape-modal-open');
  }, [showTheory]);

  // Verificar conquistas
  useEffect(() => {
    if (score > 0 || totalXP > 0) {
      const newAchievements = checkAchievements({ 
        score, 
        totalXP, 
        maxStreak, 
        completedLevels 
      });
      
      if (newAchievements.length > 0) {
        newAchievements.forEach(achievement => {
          if (!achievements.find(a => a.id === achievement.id && a.unlocked)) {
            unlockAchievement(achievement.id);
            setActiveAchievements(prev => [...prev, achievement]);
          }
        });
      }
    }
  }, [score, totalXP, maxStreak, completedLevels, checkAchievements, unlockAchievement, achievements]);

  // ==================== FUNÇÕES DE NAVEGAÇÃO ====================

  const resetQuizState = useCallback(() => {
    resetSurvivalEngine();
    setComments({});
    setCurrentComment('');
    setTimeout(() => {
      resetTimer();
    }, 100);
  }, [resetTimer, resetSurvivalEngine]);

  const goToCadeiras = useCallback(() => {
    onViewChange(VIEWS.SUBJECTS);
    setSelectedCadeira(null);
    setSelectedLevel(null);
    resetQuizState();
    setActiveAchievements([]);
  }, [onViewChange, resetQuizState]);

  const goToLevels = useCallback(() => {
    onViewChange(VIEWS.LEVELS);
    setSelectedLevel(null);
    resetSurvivalEngine();
    setActiveAchievements([]);
  }, [onViewChange, resetSurvivalEngine]);

  const startLevel = useCallback((levelId) => {
    setSelectedLevel(levelId);
    onViewChange(VIEWS.SURVIVAL);
    resetTimer();
    resetQuizState();
    setStartTime(Date.now());
  }, [onViewChange, resetTimer, setStartTime, resetQuizState]);

  const openKnowledgeTree = useCallback((levelId) => {
    setSelectedLevel(levelId);
    onViewChange(VIEWS.KNOWLEDGE_TREE);
  }, [onViewChange]);

  const handleAnswer = useCallback(
    (selectedIndex) => {
      // Prefer the documented port API (US015): answer()
      sessionAnswer(selectedIndex);
    },
    [sessionAnswer]
  );

  const nextExerciseWithCommentReset = useCallback(() => {
    setCurrentComment('');
    nextExercise();
  }, [nextExercise]);

  const previousExerciseWithCommentReset = useCallback(() => {
    setCurrentComment('');
    previousExercise();
  }, [previousExercise]);

  const goToExerciseWithCommentReset = useCallback(
    (exerciseIndex) => {
      setCurrentComment('');
      goToExercise(exerciseIndex);
    },
    [goToExercise]
  );

  const finishQuiz = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();
    const totalLevels = currentCadeiraData?.levels.length || 0;
    const currentCadeiraCompletedLevels = getCadeiraCompletedLevels(selectedCadeira);
    const totalQuestions = shuffledQuestions.length || currentLevelData?.exercises?.length || 0;

    const xpEarned = Math.round(
      (totalQuestions > 0 ? score / totalQuestions : 0) * (currentLevelData?.xp || 0)
    );
    addXP(xpEarned);

    const willCompleteCadeira =
      !currentCadeiraCompletedLevels.includes(selectedLevel) &&
      currentCadeiraCompletedLevels.length + 1 === totalLevels;

    if (!currentCadeiraCompletedLevels.includes(selectedLevel)) {
      addCompletedLevel(selectedCadeira, selectedLevel);
    }

    const nextStats = {
      quizzesCompleted: (userStats.quizzesCompleted || 0) + 1,
      perfectScores:
        (userStats.perfectScores || 0) + (score === totalQuestions && totalQuestions > 0 ? 1 : 0),
      maxStreak: Math.max(userStats.maxStreak || 0, maxStreak),
      totalXP: totalXP + xpEarned,
      completedCadeiras: (userStats.completedCadeiras || 0) + (willCompleteCadeira ? 1 : 0),
    };
    updateStats(nextStats);

    const newAchievements = checkAchievements(nextStats);
    if (newAchievements.length > 0) {
      newAchievements.forEach((achievement) => {
        if (!achievements.find((a) => a.id === achievement.id && a.unlocked)) {
          unlockAchievement(achievement.id);
          setActiveAchievements((prev) => [...prev, achievement]);
        }
      });
    }

    if (willCompleteCadeira) {
      markQuizFinished();
    } else {
      markLevelCompleted();
    }
  }, [
    score,
    maxStreak,
    totalXP,
    shuffledQuestions.length,
    selectedCadeira,
    selectedLevel,
    addXP,
    addCompletedLevel,
    getCadeiraCompletedLevels,
    markQuizFinished,
    markLevelCompleted,
    userStats,
    updateStats,
    checkAchievements,
    unlockAchievement,
    achievements,
  ]);

  const exitReviewMode = useCallback(() => {
    if (quizState.quizFinished) {
      setQuizState(prev => ({ ...prev, quizFinished: true }));
    } else if (quizState.levelCompleted) {
      setQuizState(prev => ({ ...prev, levelCompleted: true }));
    } else {
      goToLevels();
    }
  }, [quizState.quizFinished, quizState.levelCompleted, goToLevels]);

  // ==================== FUNÇÕES DE GESTÃO ====================

  const handleDownloadReport = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const sessionData = {
      sessionStartTime,
      timeSpent: timeSpent || '00:00',
      currentLevelData,
      score: score,
      maxStreak: maxStreak,
      mistakes,
      totalPossibleScore: currentLevelData?.exercises.length || 0,
      shuffledExercises: shuffledExercises,
      exerciseMapping: exerciseMapping,
      wasShuffled: true,
      initialShuffle: initialShuffleRef.current
    };
    downloadReport(sessionData);
  }, [sessionStartTime, timeSpent, score, maxStreak, mistakes, downloadReport, shuffledExercises, exerciseMapping]);

  const handleResetProgress = useCallback(() => {
    if (window.confirm('⚠️ Tens a certeza? Vais perder todo o progresso guardado.')) {
      resetProgress();
      resetQuizState();
      setSelectedLevel(null);
      setSelectedCadeira(null);
      onViewChange(VIEWS.SUBJECTS);
    }
  }, [resetProgress, resetQuizState, onViewChange]);

  const saveComment = useCallback((text) => {
    setCurrentComment(text);
    const currentExerciseData = getCurrentExerciseData();
    const originalExercise = getOriginalExercise(quizState.currentExercise);
    
    if (originalExercise) {
      const key = `${selectedLevel}-${originalExercise.id}`;
      setComments(prev => ({ ...prev, [key]: text }));
    }
  }, [selectedLevel, quizState.currentExercise, shuffledExercises]);

  const closeAchievement = useCallback((achievementId) => {
    setActiveAchievements(prev => prev.filter(a => a.id !== achievementId));
  }, []);

  // ==================== COMPONENTES DE UI ====================

  const LoadingScreen = () => (
    <div className="ape-loading-screen">
      <div className="ape-loading-animation">
        <span>🧠</span>
      </div>
      <h2 className="ape-loading-text">A carregar AprendiFluxo...</h2>
      <p className="ape-loading-subtext">A preparar a tua sessão de estudo</p>
    </div>
  );

  const ErrorScreen = () => (
    <div className="ape-error-boundary">
      <div className="ape-error-icon">
        <span>⚠️</span>
      </div>
      <h2 className="ape-error-title">Erro no AprendiFluxo</h2>
      <p className="ape-error-message">
        {error || 'Ocorreu um erro inesperado. Tenta recarregar a página.'}
      </p>
      {Array.isArray(validationErrors) && validationErrors.length > 0 && (
        <div className="ape-error-message" style={{ textAlign: 'left', maxWidth: 720 }}>
          <strong>Erros de validação do payload:</strong>
          <ul>
            {validationErrors.map((e, idx) => (
              <li key={`${idx}-${e}`}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <button 
        className="ape-error-retry-btn"
        onClick={() => window.location.reload()}
      >
        🔄 Recarregar Aplicação
      </button>
    </div>
  );

  // ==================== RENDERIZAÇÃO PRINCIPAL ====================

  const renderCurrentView = () => {
    if (error) return <ErrorScreen />;
    if (loading) return <LoadingScreen />;

    switch (currentView) {
      case VIEWS.SUBJECTS:
      case 'cadeiras':
        return (
          <CadeirasView
            cadeiras={subjects}
            completedLevels={completedLevels}
            totalXP={totalXP}
            maxStreak={maxStreak}
            onSelectCadeira={(cadeiraId) => {
              setSelectedCadeira(cadeiraId);
              onViewChange(VIEWS.LEVELS);
            }}
            onDownloadReport={handleDownloadReport}
            onResetProgress={handleResetProgress}
            dailyStats={dailyStats}
          />
        );

      case VIEWS.LEVELS:
      case 'levels':
        const currentCadeiraData = getCurrentCadeiraData();
        return currentCadeiraData ? (
          <LevelsView
            cadeira={currentCadeiraData}
            completedLevels={getCadeiraCompletedLevels(selectedCadeira)}
            onStartLevel={startLevel}
            onOpenKnowledgeTree={openKnowledgeTree}
            onBack={goToCadeiras}
            score={score}
            totalXP={totalXP}
            maxStreak={maxStreak}
          />
        ) : <LoadingScreen />;

      case VIEWS.KNOWLEDGE_TREE:
      case 'knowledge-tree':
        const knowledgeTreeLevelData = getCurrentLevelData();
        const knowledgeTreeCadeiraData = getCurrentCadeiraData();
        return knowledgeTreeLevelData ? (
          <KnowledgeTreeView
            level={knowledgeTreeLevelData}
            cadeira={knowledgeTreeCadeiraData}
            onBack={goToLevels}
            onStartQuiz={() => startLevel(selectedLevel)}
            completedLevels={getCadeiraCompletedLevels(selectedCadeira)}
          />
        ) : <LoadingScreen />;

      case VIEWS.SURVIVAL:
      case 'quiz':
        if (!isReady && Array.isArray(validationErrors) && validationErrors.length > 0) {
          return <ErrorScreen />;
        }
        const currentLevelData = getCurrentLevelData();
        const currentExerciseData = getCurrentExerciseData();
        const currentExerciseIndexFromPort =
          sessionState?.phase === 'active' || sessionState?.phase === 'feedback'
            ? sessionState.questionIndex
            : quizState.currentExercise;
        const totalExercisesFromPort =
          sessionState?.phase === 'active' || sessionState?.phase === 'feedback'
            ? sessionState.total
            : (shuffledExercises.length > 0
                ? shuffledExercises.length
                : currentLevelData.exercises.length);
        const showSolutionFromPort =
          sessionState?.phase === 'feedback' ? true : quizState.showSolution;
        const showResultsFromPort =
          sessionState?.phase === 'results' ? true : quizState.showResults;
        const selectedAnswerFromPort =
          sessionState?.phase === 'feedback' || sessionState?.phase === 'review'
            ? sessionState.selectedIndex
            : quizState.answers[quizState.currentExercise];
        const timedOutFromPort =
          sessionState?.phase === 'results'
            ? Boolean(sessionState.timedOut)
            : quizState.timedOut;
        const answersFromPort = sessionState?.answers ?? quizState.answers;

        if (sessionState?.phase === 'completion') {
          return (
            <CompletionView
              level={currentLevelData}
              cadeira={getCurrentCadeiraData()}
              score={score}
              maxStreak={maxStreak}
              totalXP={totalXP}
              timeSpent={displayTime}
              isLevelCompleted={sessionState.levelCompleted}
              isQuizFinished={sessionState.quizFinished}
              onBackToLevels={() => {
                setQuizState((prev) => ({ ...prev, levelCompleted: false, quizFinished: false }));
                onViewChange(VIEWS.LEVELS);
              }}
              onBackToCadeiras={goToCadeiras}
              onDownloadReport={handleDownloadReport}
              onResetProgress={handleResetProgress}
              onEnterReviewMode={enterReviewMode}
            />
          );
        }

        // Se estiver no modo de revisão, mostra o QuizView em modo de revisão
        if (sessionState?.phase === 'review' || quizState.isReviewMode) {
          return currentExerciseData ? (
            <QuizView
              level={currentLevelData}
              exercise={currentExerciseData}
              sessionState={sessionState}
              currentExerciseIndex={currentExerciseIndexFromPort}
              totalExercises={totalExercisesFromPort}
              selectedAnswer={selectedAnswerFromPort}
              showSolution={true}
              showResults={false}
              answers={answersFromPort}
              score={score}
              maxStreak={maxStreak}
              timeSpent={displayTime}
              onAnswer={() => {}}
              onNext={nextExerciseWithCommentReset}
              onPrevious={previousExerciseWithCommentReset}
              onGoToExercise={goToExerciseWithCommentReset}
              onShowResults={showResultsScreen}
              onFinishQuiz={exitReviewMode}
              onBack={exitReviewMode}
              onShowTheory={() => setShowTheory(true)}
              comments={comments}
              currentComment={currentComment}
              onSaveComment={saveComment}
              showTheory={showTheory}
              onCloseTheory={() => setShowTheory(false)}
              shuffledExercises={shuffledExercises}
              isReviewMode={true}
              onEnterReviewMode={enterReviewMode}
            />
          ) : <LoadingScreen />;
        }
        
        // Quiz normal
        return currentExerciseData ? (
          <QuizView
            level={currentLevelData}
            exercise={currentExerciseData}
            sessionState={sessionState}
            currentExerciseIndex={currentExerciseIndexFromPort}
            totalExercises={totalExercisesFromPort}
            selectedAnswer={selectedAnswerFromPort}
            showSolution={showSolutionFromPort}
            showResults={showResultsFromPort}
            timedOut={timedOutFromPort}
            answers={answersFromPort}
            score={score}
            maxStreak={maxStreak}
            timeSpent={displayTime}
            onAnswer={handleAnswer}
            onNext={nextExerciseWithCommentReset}
            onPrevious={previousExerciseWithCommentReset}
            onGoToExercise={goToExerciseWithCommentReset}
            onShowResults={showResultsScreen}
            onFinishQuiz={finishQuiz}
            onBack={() => onViewChange(VIEWS.LEVELS)}
            onShowTheory={() => setShowTheory(true)}
            comments={comments}
            currentComment={currentComment}
            onSaveComment={saveComment}
            showTheory={showTheory}
            onCloseTheory={() => setShowTheory(false)}
            shuffledExercises={shuffledExercises}
            isReviewMode={false}
            onEnterReviewMode={enterReviewMode}
          />
        ) : <LoadingScreen />;

      default:
        return <LoadingScreen />;
    }
  };

  return (
    <div className={`ape-quizzer-app aprendifluxo-app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="ape-quizzer-content aprendifluxo-content">
        {renderCurrentView()}
      </div>
      
      {/* Popups de conquistas */}
      {activeAchievements.map(achievement => (
        <AchievementPopup
          key={achievement.id}
          achievement={achievement}
          onClose={() => closeAchievement(achievement.id)}
        />
      ))}
    </div>
  );
};

export default AprendiFluxoShell;