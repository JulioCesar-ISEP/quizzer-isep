import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useTimer } from './hooks/useTimer';
import { useProgress } from './hooks/useProgress';
import { useReports } from './hooks/useReports';
import Header from './components/ui/Header';
import CadeirasView from './components/views/CadeirasView';
import LevelsView from './components/views/LevelsView';
import QuizView from './components/views/QuizView';
import KnowledgeTreeView from './components/views/KnowledgeTreeView';
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

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  const getCurrentExerciseData = () => getCurrentLevelData()?.exercises[quizState.currentExercise];

  // Calcular score baseado nas respostas
  const calculateScore = () => {
    const currentLevelData = getCurrentLevelData();
    if (!currentLevelData) return 0;
    
    return quizState.answers.reduce((score, answer, index) => {
      if (answer === undefined) return score;
      const exercise = currentLevelData.exercises[index];
      return score + (answer === exercise.correct ? 1 : 0);
    }, 0);
  };

  // Calcular streak
  const calculateStreak = () => {
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
  };

  const score = calculateScore();
  const maxStreak = calculateStreak();

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

  // Funções de navegação - ATUALIZADAS
  const goToCadeiras = () => {
    setCurrentView('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
    resetQuizState();
  };

  const goToLevels = () => {
    setCurrentView('levels');
    setSelectedLevel(null);
  };

  const startLevel = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('quiz');
    resetTimer();
    resetQuizState();
    setStartTime(Date.now());
  };

  // NOVA FUNÇÃO: Abrir Árvore do Conhecimento
  const openKnowledgeTree = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('knowledge-tree');
  };

  const resetQuizState = () => {
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
    
    // Reset mais robusto do timer
    setTimeout(() => {
      resetTimer();
    }, 100);
  };

  const handleAnswer = (selectedIndex) => {
    const currentExerciseData = getCurrentExerciseData();
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();

    // Atualizar a resposta para a questão atual
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentExercise] = selectedIndex;
    
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      showSolution: true
    }));

    // Registrar erro se a resposta estiver incorreta
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
  };

  const nextExercise = () => {
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
      // Verificar se todas as questões foram respondidas
      const allAnswered = quizState.answers.length === totalExercisesInLevel && 
                         quizState.answers.every(answer => answer !== undefined);
      
      if (allAnswered) {
        setQuizState(prev => ({ 
          ...prev, 
          showResults: true 
        }));
      } else {
        // Se não estão todas respondidas, voltar para a primeira não respondida
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
  };

  const previousExercise = () => {
    if (quizState.currentExercise > 0) {
      setQuizState(prev => ({ 
        ...prev, 
        currentExercise: prev.currentExercise - 1,
        showSolution: false
      }));
      setCurrentComment('');
    }
  };

  const goToExercise = (exerciseIndex) => {
    setQuizState(prev => ({ 
      ...prev, 
      currentExercise: exerciseIndex,
      showSolution: false,
      showResults: false // IMPORTANTE: Sair da tela de resultados quando navegar para uma questão
    }));
    setCurrentComment('');
  };

  const showResultsScreen = () => {
    setQuizState(prev => ({ 
      ...prev, 
      showResults: true 
    }));
  };

  const finishQuiz = () => {
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();
    const totalLevels = currentCadeiraData?.levels.length || 0;
    const currentCadeiraCompletedLevels = getCadeiraCompletedLevels(selectedCadeira);

    // Adicionar XP baseado no score
    const xpEarned = Math.round((score / currentLevelData.exercises.length) * currentLevelData.xp);
    addXP(xpEarned);

    if (!currentCadeiraCompletedLevels.includes(selectedLevel)) {
      addCompletedLevel(selectedCadeira, selectedLevel);
    }

    // Verificar se todos os níveis da cadeira atual foram completados
    if (currentCadeiraCompletedLevels.length + 1 === totalLevels) {
      setQuizState(prev => ({ ...prev, quizFinished: true }));
    } else {
      setQuizState(prev => ({ ...prev, levelCompleted: true }));
    }
  };

  const handleDownloadReport = () => {
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

  // Renderização condicional - ATUALIZADA
  const renderCurrentView = () => {
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
            onOpenKnowledgeTree={openKnowledgeTree} // NOVA PROP
            onBack={goToCadeiras}
            score={score}
            totalXP={totalXP}
            maxStreak={maxStreak}
          />
        ) : <LoadingScreen />;

      // case 'knowledge-tree': // NOVA VIEW
      //   const knowledgeTreeLevelData = getCurrentLevelData();
      //   const knowledgeTreeCadeiraData = getCurrentCadeiraData();
      //   return knowledgeTreeLevelData ? (
      //     <KnowledgeTreeView
      //       level={knowledgeTreeLevelData}
      //       cadeira={knowledgeTreeCadeiraData}
      //       onBack={goToLevels}
      //       onStartQuiz={() => startLevel(selectedLevel)}
      //       completedLevels={getCadeiraCompletedLevels(selectedCadeira)}
      //     />
      //   ) : <LoadingScreen />;

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
    <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentView={currentView}
        onBack={currentView !== 'cadeiras' ? 
          (currentView === 'knowledge-tree' ? goToLevels : goToCadeiras) : null}
        showBackButton={currentView !== 'cadeiras'}
      />
      {renderCurrentView()}
    </div>
  );
};

export default QuizzerIsep;