import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { useTimer } from './hooks/useTimer';
import { useProgress } from './hooks/useProgress';
import { useReports } from './hooks/useReports';
import { useAchievements } from './hooks/useAchievements';
import Header from './components/ui/Header';
import CadeirasView from './components/views/CadeirasView';
import LevelsView from './components/views/LevelsView';
import QuizView from './components/views/QuizView';
import KnowledgeTreeView from './components/views/KnowledgeTreeView';
import CompletionView from './components/views/CompletionView';
import AchievementPopup from './components/ui/AchievementPopup';
import SessionStats from './components/ui/SessionStats';
import cadeiras from '../data/cadeiras';
import './styles/QuizzerIsep.css';

const QuizzerIsep = () => {
  const [currentView, setCurrentView] = useState('cadeiras');
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showTheory, setShowTheory] = useState(false);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [mistakes, setMistakes] = useState([]);
  const [sessionStartTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Quiz state
  const [quizState, setQuizState] = useState({
    currentExercise: 0,
    answers: [],
    showSolution: false,
    showResults: false,
    levelCompleted: false,
    quizFinished: false
  });

  const { isDark, toggleTheme } = useTheme();
  const { timeSpent, resetTimer, setStartTime } = useTimer(currentView === 'quiz' && !quizState.levelCompleted && !quizState.quizFinished);
  const { completedLevels, totalXP, addCompletedLevel, addXP, resetProgress, getCadeiraCompletedLevels } = useProgress();
  const { dailyStats, downloadReport, initializeReports } = useReports();
  const { achievements, checkAchievements, unlockAchievement } = useAchievements();

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  const getCurrentExerciseData = () => getCurrentLevelData()?.exercises[quizState.currentExercise];

  // Calcular score baseado nas respostas
  const calculateScore = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    if (!currentLevelData) return 0;
    
    return quizState.answers.reduce((score, answer, index) => {
      if (answer === undefined) return score;
      const exercise = currentLevelData.exercises[index];
      return score + (answer === exercise.correct ? 1 : 0);
    }, 0);
  }, [quizState.answers, selectedLevel]);

  // Calcular streak
  const calculateStreak = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    if (!currentLevelData) return 0;
    
    let currentStreak = 0;
    let maxStreak = 0;
    
    quizState.answers.forEach((answer, index) => {
      if (answer === undefined) {
        currentStreak = 0;
        return;
      }
      const exercise = currentLevelData.exercises[index];
      if (answer === exercise.correct) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    
    return maxStreak;
  }, [quizState.answers, selectedLevel]);

  const score = calculateScore();
  const maxStreak = calculateStreak();

  // Efeitos
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
      const newAchievements = checkAchievements({ score, totalXP, maxStreak, completedLevels });
      newAchievements.forEach(achievement => {
        unlockAchievement(achievement.id);
      });
    }
  }, [score, totalXP, maxStreak, completedLevels, checkAchievements, unlockAchievement]);

  // Funções de navegação
  const goToCadeiras = useCallback(() => {
    setCurrentView('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
    resetQuizState();
  }, []);

  const goToLevels = useCallback(() => {
    setCurrentView('levels');
    setSelectedLevel(null);
  }, []);

  const startLevel = useCallback((levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('quiz');
    resetTimer();
    resetQuizState();
    setStartTime(Date.now());
  }, [resetTimer, setStartTime]);

  const openKnowledgeTree = useCallback((levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('knowledge-tree');
  }, []);

  const resetQuizState = useCallback(() => {
    setQuizState({
      currentExercise: 0,
      answers: [],
      showSolution: false,
      showResults: false,
      levelCompleted: false,
      quizFinished: false
    });
    setMistakes([]);
    setComments({});
    setCurrentComment('');
    
    setTimeout(() => {
      resetTimer();
    }, 100);
  }, [resetTimer]);

  const handleAnswer = useCallback((selectedIndex) => {
    const currentExerciseData = getCurrentExerciseData();
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();

    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentExercise] = selectedIndex;
    
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      showSolution: true
    }));

    if (selectedIndex !== currentExerciseData.correct) {
      const commentKey = `${selectedLevel}-${quizState.currentExercise}`;
      setMistakes(prev => [...prev, {
        cadeiraId: selectedCadeira,
        cadeiraName: currentCadeiraData.name,
        levelId: selectedLevel,
        levelName: currentLevelData.name,
        exerciseIndex: quizState.currentExercise,
        question: currentExerciseData.question,
        code: currentExerciseData.code,
        selectedOption: currentExerciseData.options[selectedIndex],
        correctOption: currentExerciseData.options[currentExerciseData.correct],
        explanation: currentExerciseData.explanation,
        theoryPoints: currentExerciseData.theoryPoints,
        studentComment: comments[commentKey] || '',
        timestamp: new Date().toLocaleTimeString('pt-PT')
      }]);
    }
  }, [quizState.answers, quizState.currentExercise, selectedCadeira, selectedLevel, comments]);

  const nextExercise = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const totalExercisesInLevel = currentLevelData?.exercises.length || 0;

    setQuizState(prev => ({
      ...prev,
      showSolution: false
    }));
    setCurrentComment('');

    if (quizState.currentExercise < totalExercisesInLevel - 1) {
      setQuizState(prev => ({ 
        ...prev, 
        currentExercise: prev.currentExercise + 1 
      }));
    } else {
      const allAnswered = quizState.answers.length === totalExercisesInLevel && 
                         quizState.answers.every(answer => answer !== undefined);
      
      if (allAnswered) {
        setQuizState(prev => ({ 
          ...prev, 
          showResults: true 
        }));
      } else {
        const firstUnanswered = quizState.answers.findIndex(answer => answer === undefined);
        if (firstUnanswered !== -1) {
          setQuizState(prev => ({ 
            ...prev, 
            currentExercise: firstUnanswered 
          }));
        } else {
          setQuizState(prev => ({ 
            ...prev, 
            showResults: true 
          }));
        }
      }
    }
  }, [quizState.currentExercise, quizState.answers]);

  const previousExercise = useCallback(() => {
    if (quizState.currentExercise > 0) {
      setQuizState(prev => ({ 
        ...prev, 
        currentExercise: prev.currentExercise - 1,
        showSolution: false
      }));
      setCurrentComment('');
    }
  }, [quizState.currentExercise]);

  const goToExercise = useCallback((exerciseIndex) => {
    setQuizState(prev => ({ 
      ...prev, 
      currentExercise: exerciseIndex,
      showSolution: false,
      showResults: false
    }));
    setCurrentComment('');
  }, []);

  const showResultsScreen = useCallback(() => {
    setQuizState(prev => ({ 
      ...prev, 
      showResults: true 
    }));
  }, []);

  const finishQuiz = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();
    const totalLevels = currentCadeiraData?.levels.length || 0;
    const currentCadeiraCompletedLevels = getCadeiraCompletedLevels(selectedCadeira);

    const xpEarned = Math.round((score / currentLevelData.exercises.length) * currentLevelData.xp);
    addXP(xpEarned);

    if (!currentCadeiraCompletedLevels.includes(selectedLevel)) {
      addCompletedLevel(selectedCadeira, selectedLevel);
    }

    if (currentCadeiraCompletedLevels.length + 1 === totalLevels) {
      setQuizState(prev => ({ ...prev, quizFinished: true }));
    } else {
      setQuizState(prev => ({ ...prev, levelCompleted: true }));
    }
  }, [score, selectedCadeira, selectedLevel, addXP, addCompletedLevel, getCadeiraCompletedLevels]);

  const handleDownloadReport = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const sessionData = {
      sessionStartTime,
      timeSpent,
      currentLevelData,
      score: score,
      maxStreak: maxStreak,
      mistakes,
      totalPossibleScore: currentLevelData?.exercises.length || 0
    };
    downloadReport(sessionData);
  }, [sessionStartTime, timeSpent, score, maxStreak, mistakes, downloadReport]);

  const handleResetProgress = useCallback(() => {
    if (window.confirm('⚠️ Tens a certeza? Vais perder todo o progresso no laboratório!')) {
      resetProgress();
      resetQuizState();
      setSelectedLevel(null);
      setSelectedCadeira(null);
      setCurrentView('cadeiras');
    }
  }, [resetProgress, resetQuizState]);

  const saveComment = useCallback((text) => {
    setCurrentComment(text);
    const key = `${selectedLevel}-${quizState.currentExercise}`;
    setComments(prev => ({ ...prev, [key]: text }));
  }, [selectedLevel, quizState.currentExercise]);

  // Componentes de UI
  const LoadingScreen = () => (
    <div className="ape-loading-screen">
      <div className="ape-loading-animation">
        <span>🧠</span>
      </div>
      <h2 className="ape-loading-text">Carregando Laboratório...</h2>
      <p className="ape-loading-subtext">A preparar a tua experiência de aprendizado</p>
    </div>
  );

  const ErrorScreen = () => (
    <div className="ape-error-boundary">
      <div className="ape-error-icon">
        <span>⚠️</span>
      </div>
      <h2 className="ape-error-title">Erro no Laboratório</h2>
      <p className="ape-error-message">
        {error || 'Ocorreu um erro inesperado. Tenta recarregar a página.'}
      </p>
      <button 
        className="ape-error-retry-btn"
        onClick={() => window.location.reload()}
      >
        🔄 Recarregar Aplicação
      </button>
    </div>
  );

  // Renderização condicional
  const renderCurrentView = () => {
    if (error) return <ErrorScreen />;
    if (loading) return <LoadingScreen />;

    switch (currentView) {
      case 'cadeiras':
        return (
          <CadeirasView
            cadeiras={cadeiras}
            completedLevels={completedLevels}
            totalXP={totalXP}
            maxStreak={maxStreak}
            onSelectCadeira={(cadeiraId) => {
              setSelectedCadeira(cadeiraId);
              setCurrentView('levels');
            }}
            onDownloadReport={handleDownloadReport}
            onResetProgress={handleResetProgress}
            dailyStats={dailyStats}
          />
        );

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

      case 'quiz':
        const currentLevelData = getCurrentLevelData();
        const currentExerciseData = getCurrentExerciseData();
        
        if (quizState.levelCompleted || quizState.quizFinished) {
          return (
            <CompletionView
              level={currentLevelData}
              cadeira={getCurrentCadeiraData()}
              score={score}
              maxStreak={maxStreak}
              totalXP={totalXP}
              timeSpent={timeSpent}
              isLevelCompleted={quizState.levelCompleted}
              isQuizFinished={quizState.quizFinished}
              onBackToLevels={() => {
                setQuizState(prev => ({ ...prev, levelCompleted: false }));
                setCurrentView('levels');
              }}
              onBackToCadeiras={goToCadeiras}
              onDownloadReport={handleDownloadReport}
              onResetProgress={handleResetProgress}
            />
          );
        }

        return currentExerciseData ? (
          <QuizView
            level={currentLevelData}
            exercise={currentExerciseData}
            currentExerciseIndex={quizState.currentExercise}
            totalExercises={currentLevelData.exercises.length}
            selectedAnswer={quizState.answers[quizState.currentExercise]}
            showSolution={quizState.showSolution}
            showResults={quizState.showResults}
            answers={quizState.answers}
            score={score}
            maxStreak={maxStreak}
            timeSpent={timeSpent}
            onAnswer={handleAnswer}
            onNext={nextExercise}
            onPrevious={previousExercise}
            onGoToExercise={goToExercise}
            onShowResults={showResultsScreen}
            onFinishQuiz={finishQuiz}
            onBack={() => setCurrentView('levels')}
            onShowTheory={() => setShowTheory(true)}
            comments={comments}
            currentComment={currentComment}
            onSaveComment={saveComment}
            showTheory={showTheory}
            onCloseTheory={() => setShowTheory(false)}
          />
        ) : <LoadingScreen />;

      default:
        return <LoadingScreen />;
    }
  };

  return (
    <div className={`ape-quizzer-app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentView={currentView}
        onBack={currentView !== 'cadeiras' ? 
          (currentView === 'knowledge-tree' ? goToLevels : goToCadeiras) : null}
        showBackButton={currentView !== 'cadeiras'}
        user={{ name: 'Símio', xp: totalXP }}
        xp={totalXP}
        progress={Math.round((Object.values(completedLevels).flat().length / 
          (cadeiras.reduce((acc, c) => acc + c.levels.length, 0))) * 100)}
      />
      
      {/* Session Stats */}
      {currentView === 'quiz' && (
        <SessionStats
          score={score}
          streak={maxStreak}
          timeSpent={timeSpent}
          currentExercise={quizState.currentExercise + 1}
          totalExercises={getCurrentLevelData()?.exercises.length || 0}
        />
      )}

      {/* Main Content */}
      <main className="ape-main-content-area">
        {renderCurrentView()}
      </main>

      {/* Achievement Popups */}
      {achievements.map(achievement => (
        <AchievementPopup
          key={achievement.id}
          achievement={achievement}
          onClose={() => {}}
        />
      ))}
    </div>
  );
};

export default QuizzerIsep;