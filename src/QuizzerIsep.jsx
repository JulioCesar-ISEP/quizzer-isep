import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useTimer } from './hooks/useTimer';
import { useProgress } from './hooks/useProgress';
import { useReports } from './hooks/useReports';
import { useAchievements } from './hooks/useAchievements';
import CadeirasView from './components/views/CadeirasView';
import LevelsView from './components/views/LevelsView';
import QuizView from './components/views/QuizView';
import KnowledgeTreeView from './components/views/KnowledgeTreeView';
import CompletionView from './components/views/CompletionView';
import AchievementPopup from './components/ui/AchievementPopup';
import cadeiras from '../data/cadeiras';
import './styles/QuizzerIsep.css';

const QuizzerIsep = ({ currentView, onViewChange, onProgressUpdate, isDark }) => {
  // Estados de navegação
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Estados do quiz
  const [quizState, setQuizState] = useState({
    currentExercise: 0,
    answers: [],
    showSolution: false,
    showResults: false,
    levelCompleted: false,
    quizFinished: false,
    isReviewMode: false
  });

  // Estados de dados
  const [shuffledExercises, setShuffledExercises] = useState([]);
  const [exerciseMapping, setExerciseMapping] = useState([]);
  const [mistakes, setMistakes] = useState([]);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  
  // Estados de UI
  const [showTheory, setShowTheory] = useState(false);
  const [sessionStartTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeAchievements, setActiveAchievements] = useState([]);

  // Hooks personalizados
  const { timeSpent, resetTimer, setStartTime } = useTimer(
    currentView === 'quiz' && 
    !quizState.levelCompleted && 
    !quizState.quizFinished && 
    !quizState.isReviewMode
  );
  
  const { 
    completedLevels, 
    totalXP, 
    addCompletedLevel, 
    addXP, 
    resetProgress, 
    getCadeiraCompletedLevels 
  } = useProgress();
  
  const { dailyStats, downloadReport, initializeReports } = useReports();
  const { achievements, checkAchievements, unlockAchievement } = useAchievements();

  // Refs
  const lastProgressUpdate = useRef({ xp: 0, progress: 0 });
  const initialShuffleRef = useRef(null); // Para armazenar o embaralhamento inicial

  // ==================== FUNÇÕES AUXILIARES ====================

  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  
  const getCurrentExerciseData = () => {
    if (shuffledExercises.length > 0) {
      return shuffledExercises[quizState.currentExercise];
    }
    return null;
  };

  const getOriginalExercise = (shuffledIndex) => {
    if (exerciseMapping.length > 0) {
      const mapping = exerciseMapping.find(m => m.shuffledIndex === shuffledIndex);
      if (mapping) {
        const levelData = getCurrentLevelData();
        return levelData?.exercises[mapping.originalIndex];
      }
    }
    return null;
  };

  // ==================== FUNÇÕES DE EMBARALHAMENTO ====================

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const prepareShuffledExercises = useCallback((levelData, preserveState = false) => {
    if (!levelData) return { exercises: [], mapping: [] };

    // Se estamos preservando o estado (modo revisão), usamos o embaralhamento inicial
    if (preserveState && initialShuffleRef.current) {
      return initialShuffleRef.current;
    }

    const originalExercises = [...levelData.exercises];
    const shuffledIndices = shuffleArray([...Array(originalExercises.length).keys()]);
    
    const mapping = shuffledIndices.map((originalIndex, shuffledIndex) => ({
      originalIndex,
      shuffledIndex
    }));

    const processedExercises = shuffledIndices.map((originalIndex, shuffledIndex) => {
      const exercise = originalExercises[originalIndex];
      const optionsCopy = [...exercise.options];
      const correctAnswer = optionsCopy[exercise.correct];
      const shuffledOptions = shuffleArray(optionsCopy);
      const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
      
      return {
        ...exercise,
        id: `shuffled-${exercise.id}-${shuffledIndex}`,
        originalId: exercise.id,
        originalCorrect: exercise.correct,
        options: shuffledOptions,
        correct: newCorrectIndex,
        shuffledIndex: shuffledIndex,
        originalIndex: originalIndex,
        timestamp: Date.now() // Para garantir unicidade
      };
    });

    const result = { exercises: processedExercises, mapping };
    
    // Armazena o embaralhamento inicial se for a primeira vez
    if (!initialShuffleRef.current) {
      initialShuffleRef.current = result;
    }
    
    return result;
  }, []);

  // ==================== CÁLCULOS (useMemo) ====================

  const score = useMemo(() => {
    if (shuffledExercises.length === 0) return 0;
    
    return quizState.answers.reduce((score, answer, index) => {
      if (answer === undefined) return score;
      const exercise = shuffledExercises[index];
      return score + (answer === exercise.correct ? 1 : 0);
    }, 0);
  }, [quizState.answers, shuffledExercises]);

  const maxStreak = useMemo(() => {
    if (shuffledExercises.length === 0) return 0;
    
    let currentStreak = 0;
    let maxStreak = 0;
    
    quizState.answers.forEach((answer, index) => {
      if (answer === undefined) {
        currentStreak = 0;
        return;
      }
      const exercise = shuffledExercises[index];
      if (answer === exercise.correct) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    
    return maxStreak;
  }, [quizState.answers, shuffledExercises]);

  // ==================== EFEITOS ====================

  // Atualizar progresso no App pai
  useEffect(() => {
    const totalLevels = cadeiras.reduce((acc, c) => acc + c.levels.length, 0);
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

  // Preparar exercícios embaralhados quando um nível é selecionado
  useEffect(() => {
    if (selectedLevel && currentView === 'quiz' && !quizState.levelCompleted && !quizState.quizFinished) {
      const levelData = getCurrentLevelData();
      if (!levelData) return;
      
      // Se é modo de revisão, preservamos o estado
      const preserveState = quizState.isReviewMode;
      const { exercises, mapping } = prepareShuffledExercises(levelData, preserveState);
      setShuffledExercises(exercises);
      setExerciseMapping(mapping);
    }
  }, [selectedLevel, currentView, quizState.levelCompleted, quizState.quizFinished, quizState.isReviewMode, prepareShuffledExercises]);

  // ==================== FUNÇÕES DE NAVEGAÇÃO ====================

  const goToCadeiras = useCallback(() => {
    onViewChange('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
    setShuffledExercises([]);
    setExerciseMapping([]);
    initialShuffleRef.current = null; // Limpa o embaralhamento inicial
    resetQuizState();
    setActiveAchievements([]);
  }, [onViewChange]);

  const goToLevels = useCallback(() => {
    onViewChange('levels');
    setSelectedLevel(null);
    setShuffledExercises([]);
    setExerciseMapping([]);
    initialShuffleRef.current = null; // Limpa o embaralhamento inicial
    setActiveAchievements([]);
  }, [onViewChange]);

  const startLevel = useCallback((levelId) => {
    setSelectedLevel(levelId);
    onViewChange('quiz');
    resetTimer();
    resetQuizState();
    setStartTime(Date.now());
    initialShuffleRef.current = null; // Reseta o embaralhamento inicial para novo quiz
  }, [onViewChange, resetTimer, setStartTime]);

  const openKnowledgeTree = useCallback((levelId) => {
    setSelectedLevel(levelId);
    onViewChange('knowledge-tree');
  }, [onViewChange]);

  const resetQuizState = useCallback(() => {
    setQuizState({
      currentExercise: 0,
      answers: [],
      showSolution: false,
      showResults: false,
      levelCompleted: false,
      quizFinished: false,
      isReviewMode: false
    });
    setMistakes([]);
    setComments({});
    setCurrentComment('');
    
    setTimeout(() => {
      resetTimer();
    }, 100);
  }, [resetTimer]);

  // ==================== FUNÇÕES DO QUIZ ====================

  const handleAnswer = useCallback((selectedIndex) => {
    const currentExerciseData = getCurrentExerciseData();
    const currentLevelData = getCurrentLevelData();
    const currentCadeiraData = getCurrentCadeiraData();
    const originalExercise = getOriginalExercise(quizState.currentExercise);

    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentExercise] = selectedIndex;
    
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      showSolution: true
    }));

    if (selectedIndex !== currentExerciseData.correct && originalExercise) {
      const commentKey = `${selectedLevel}-${originalExercise.id}`;
      setMistakes(prev => [...prev, {
        cadeiraId: selectedCadeira,
        cadeiraName: currentCadeiraData.name,
        levelId: selectedLevel,
        levelName: currentLevelData.name,
        exerciseIndex: quizState.currentExercise,
        originalExerciseId: originalExercise.id,
        question: originalExercise.question,
        code: originalExercise.code,
        selectedOption: currentExerciseData.options[selectedIndex],
        correctOption: originalExercise.options[originalExercise.correct],
        shuffledCorrectOption: currentExerciseData.options[currentExerciseData.correct],
        explanation: originalExercise.explanation,
        theoryPoints: originalExercise.theoryPoints,
        studentComment: comments[commentKey] || '',
        timestamp: new Date().toLocaleTimeString('pt-PT'),
        wasShuffled: true,
        originalCorrectPosition: originalExercise.correct,
        shuffledCorrectPosition: currentExerciseData.correct
      }]);
    }
  }, [quizState.answers, quizState.currentExercise, selectedCadeira, selectedLevel, comments, shuffledExercises]);

  const nextExercise = useCallback(() => {
    const totalExercisesInLevel = shuffledExercises.length > 0 ? 
      shuffledExercises.length : 
      (getCurrentLevelData()?.exercises.length || 0);

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
  }, [quizState.currentExercise, quizState.answers, shuffledExercises]);

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

  const enterReviewMode = useCallback(() => {
    // Preserva o embaralhamento original para o modo de revisão
    if (!initialShuffleRef.current) {
      const levelData = getCurrentLevelData();
      if (levelData) {
        initialShuffleRef.current = prepareShuffledExercises(levelData, true);
      }
    }
    
    setQuizState(prev => ({ 
      ...prev, 
      isReviewMode: true,
      showSolution: true,
      showResults: false,
      levelCompleted: false,
      quizFinished: false,
      currentExercise: 0 // Volta para a primeira questão
    }));
  }, [prepareShuffledExercises]);

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
    if (window.confirm('⚠️ Tens a certeza? Vais perder todo o progresso no laboratório!')) {
      resetProgress();
      resetQuizState();
      setShuffledExercises([]);
      setExerciseMapping([]);
      initialShuffleRef.current = null;
      setSelectedLevel(null);
      setSelectedCadeira(null);
      onViewChange('cadeiras');
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

  // ==================== RENDERIZAÇÃO PRINCIPAL ====================

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
              onViewChange('levels');
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
        
        // Se estiver no modo de revisão, mostra o QuizView em modo de revisão
        if (quizState.isReviewMode) {
          return currentExerciseData ? (
            <QuizView
              level={currentLevelData}
              exercise={currentExerciseData}
              currentExerciseIndex={quizState.currentExercise}
              totalExercises={shuffledExercises.length > 0 ? shuffledExercises.length : currentLevelData.exercises.length}
              selectedAnswer={quizState.answers[quizState.currentExercise]}
              showSolution={true}
              showResults={false}
              answers={quizState.answers}
              score={score}
              maxStreak={maxStreak}
              timeSpent={timeSpent || '00:00'}
              onAnswer={() => {}} // Desabilitado em modo de revisão
              onNext={nextExercise}
              onPrevious={previousExercise}
              onGoToExercise={goToExercise}
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
        
        // Tela de conclusão
        if (quizState.levelCompleted || quizState.quizFinished) {
          return (
            <CompletionView
              level={currentLevelData}
              cadeira={getCurrentCadeiraData()}
              score={score}
              maxStreak={maxStreak}
              totalXP={totalXP}
              timeSpent={timeSpent || '00:00'}
              isLevelCompleted={quizState.levelCompleted}
              isQuizFinished={quizState.quizFinished}
              onBackToLevels={() => {
                setQuizState(prev => ({ ...prev, levelCompleted: false }));
                onViewChange('levels');
              }}
              onBackToCadeiras={goToCadeiras}
              onDownloadReport={handleDownloadReport}
              onResetProgress={handleResetProgress}
              onEnterReviewMode={enterReviewMode}
            />
          );
        }

        // Quiz normal
        return currentExerciseData ? (
          <QuizView
            level={currentLevelData}
            exercise={currentExerciseData}
            currentExerciseIndex={quizState.currentExercise}
            totalExercises={shuffledExercises.length > 0 ? shuffledExercises.length : currentLevelData.exercises.length}
            selectedAnswer={quizState.answers[quizState.currentExercise]}
            showSolution={quizState.showSolution}
            showResults={quizState.showResults}
            answers={quizState.answers}
            score={score}
            maxStreak={maxStreak}
            timeSpent={timeSpent || '00:00'}
            onAnswer={handleAnswer}
            onNext={nextExercise}
            onPrevious={previousExercise}
            onGoToExercise={goToExercise}
            onShowResults={showResultsScreen}
            onFinishQuiz={finishQuiz}
            onBack={() => onViewChange('levels')}
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
    <div className={`ape-quizzer-app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Main Content */}
      <div className="ape-quizzer-content">
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

export default QuizzerIsep;