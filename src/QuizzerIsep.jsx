import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useTimer } from './hooks/useTimer';
import { useProgress } from './hooks/useProgress';
import { useReports } from './hooks/useReports';
import Header from './components/ui/Header';
import CadeirasView from './components/views/CadeirasView';
import LevelsView from './components/views/LevelsView';
import QuizView from './components/views/QuizView';
import CompletionView from './components/views/CompletionView';
import LoadingScreen from './components/common/LoadingScreen';
import cadeiras from '../data/cadeiras';

const QuizzerIsep = () => {
  const [currentView, setCurrentView] = useState('cadeiras');
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showTheory, setShowTheory] = useState(false);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [mistakes, setMistakes] = useState([]);
  const [sessionStartTime] = useState(new Date());

  // Quiz state
  const [quizState, setQuizState] = useState({
    currentExercise: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    showSolution: false,
    selectedAnswer: null,
    levelCompleted: false,
    quizFinished: false
  });

  const { isDark, toggleTheme } = useTheme();
  const { timeSpent, resetTimer } = useTimer(currentView === 'quiz' && !quizState.levelCompleted && !quizState.quizFinished);
  const { completedLevels, totalXP, addCompletedLevel, addXP, resetProgress, getCadeiraCompletedLevels } = useProgress();
  const { dailyStats, downloadReport, initializeReports } = useReports();

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  const getCurrentExerciseData = () => getCurrentLevelData()?.exercises[quizState.currentExercise];

  // Efeitos
  useEffect(() => {
    initializeReports();
  }, [initializeReports]);

  useEffect(() => {
    if (showTheory) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [showTheory]);

  // Funções de navegação
  const goToCadeiras = () => {
    setCurrentView('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
    resetQuizState();
  };

  const startLevel = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('quiz');
    resetTimer();
    resetQuizState();
  };

  const resetQuizState = () => {
    setQuizState({
      currentExercise: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      showSolution: false,
      selectedAnswer: null,
      levelCompleted: false,
      quizFinished: false
    });
    setMistakes([]);
    setComments({});
    setCurrentComment('');
  };

  const handleAnswer = (selectedIndex) => {
    if (quizState.selectedAnswer !== null) return;

    const currentExerciseData = getCurrentExerciseData();
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: selectedIndex,
      showSolution: true
    }));

    if (selectedIndex === currentExerciseData.correct) {
      const newScore = quizState.score + 1;
      const newStreak = quizState.streak + 1;
      setQuizState(prev => ({
        ...prev,
        score: newScore,
        streak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak)
      }));
      addXP(currentLevelData.xp);
    } else {
      setQuizState(prev => ({ ...prev, streak: 0 }));
      
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
  };

  const nextExercise = () => {
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();
    const totalExercisesInLevel = currentLevelData?.exercises.length || 0;
    const totalLevels = currentCadeiraData?.levels.length || 0;
    const currentCadeiraCompletedLevels = getCadeiraCompletedLevels(selectedCadeira);

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: null,
      showSolution: false
    }));
    setCurrentComment('');

    if (quizState.currentExercise < totalExercisesInLevel - 1) {
      setQuizState(prev => ({ ...prev, currentExercise: prev.currentExercise + 1 }));
    } else {
      if (!currentCadeiraCompletedLevels.includes(selectedLevel)) {
        addCompletedLevel(selectedCadeira, selectedLevel);
      }

      // Verificar se todos os níveis da cadeira atual foram completados
      if (currentCadeiraCompletedLevels.length + 1 === totalLevels) {
        setQuizState(prev => ({ ...prev, quizFinished: true }));
      } else {
        setQuizState(prev => ({ ...prev, levelCompleted: true }));
      }
    }
  };

  const handleDownloadReport = () => {
    const currentLevelData = getCurrentLevelData();
    const sessionData = {
      sessionStartTime,
      timeSpent,
      currentLevelData,
      score: quizState.score,
      maxStreak: quizState.maxStreak,
      mistakes,
      totalPossibleScore: currentLevelData?.exercises.length || 0
    };
    downloadReport(sessionData);
  };

  const handleResetProgress = () => {
    if (window.confirm('⚠️ Tem a certeza? Vai perder todo o progresso!')) {
      resetProgress();
      resetQuizState();
      setSelectedLevel(null);
      setSelectedCadeira(null);
      setCurrentView('cadeiras');
    }
  };

  const saveComment = (text) => {
    setCurrentComment(text);
    const key = `${selectedLevel}-${quizState.currentExercise}`;
    setComments(prev => ({ ...prev, [key]: text }));
  };

  // Renderização condicional
  const renderCurrentView = () => {
    switch (currentView) {
      case 'cadeiras':
        return (
          <CadeirasView
            cadeiras={cadeiras}
            completedLevels={completedLevels}
            totalXP={totalXP}
            maxStreak={quizState.maxStreak}
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
            onBack={goToCadeiras}
            score={quizState.score}
            totalXP={totalXP}
            maxStreak={quizState.maxStreak}
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
              score={quizState.score}
              maxStreak={quizState.maxStreak}
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
            selectedAnswer={quizState.selectedAnswer}
            showSolution={quizState.showSolution}
            score={quizState.score}
            streak={quizState.streak}
            timeSpent={timeSpent}
            onAnswer={handleAnswer}
            onNext={nextExercise}
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
    <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentView={currentView}
        onBack={currentView !== 'cadeiras' ? goToCadeiras : null}
        showBackButton={currentView !== 'cadeiras'}
      />
      {renderCurrentView()}
    </div>
  );
};

export default QuizzerIsep;