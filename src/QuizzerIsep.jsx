import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showTheory, setShowTheory] = useState(false);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [mistakes, setMistakes] = useState([]);
  const [sessionStartTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estado para armazenar exercícios com opções embaralhadas
  const [shuffledExercises, setShuffledExercises] = useState([]);
  // Mapeamento entre exercício original e embaralhado
  const [exerciseMapping, setExerciseMapping] = useState([]);

  // Quiz state
  const [quizState, setQuizState] = useState({
    currentExercise: 0,
    answers: [],
    showSolution: false,
    showResults: false,
    levelCompleted: false,
    quizFinished: false
  });

  const { timeSpent, resetTimer, setStartTime } = useTimer(currentView === 'quiz' && !quizState.levelCompleted && !quizState.quizFinished);
  const { completedLevels, totalXP, addCompletedLevel, addXP, resetProgress, getCadeiraCompletedLevels } = useProgress();
  const { dailyStats, downloadReport, initializeReports } = useReports();
  const { achievements, checkAchievements, unlockAchievement } = useAchievements();

  // Refs para prevenir loop infinito
  const lastProgressUpdate = useRef({ xp: 0, progress: 0 });

  // Atualizar progresso no App pai - CORRIGIDO PARA EVITAR LOOP
  useEffect(() => {
    const totalLevels = cadeiras.reduce((acc, c) => acc + c.levels.length, 0);
    const completedCount = Object.values(completedLevels).flat().length;
    const progress = Math.round((completedCount / totalLevels) * 100);
    
    if (lastProgressUpdate.current.xp !== totalXP || lastProgressUpdate.current.progress !== progress) {
      lastProgressUpdate.current = { xp: totalXP, progress };
      onProgressUpdate(totalXP, progress);
    }
  }, [totalXP, completedLevels, onProgressUpdate]);

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  
  // Função para obter exercício atual (usando os embaralhados)
  const getCurrentExerciseData = () => {
    if (shuffledExercises.length > 0) {
      return shuffledExercises[quizState.currentExercise];
    }
    return null;
  };

  // Função para obter exercício original baseado no mapeamento
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

  // Função para embaralhar array (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Função para preparar exercícios com opções embaralhadas
  const prepareShuffledExercises = useCallback(() => {
    const levelData = getCurrentLevelData();
    if (!levelData) return { exercises: [], mapping: [] };

    // Embaralhar a ordem das questões
    const originalExercises = [...levelData.exercises];
    const shuffledIndices = shuffleArray([...Array(originalExercises.length).keys()]);
    
    // Criar mapeamento
    const mapping = shuffledIndices.map((originalIndex, shuffledIndex) => ({
      originalIndex,
      shuffledIndex
    }));

    // Para cada questão, criar versão com opções embaralhadas
    const processedExercises = shuffledIndices.map((originalIndex, shuffledIndex) => {
      const exercise = originalExercises[originalIndex];
      const optionsCopy = [...exercise.options];
      
      // Guardar a resposta correta original
      const correctAnswer = optionsCopy[exercise.correct];
      
      // Embaralhar as opções completamente
      const shuffledOptions = shuffleArray(optionsCopy);
      
      // Encontrar a nova posição da resposta correta
      const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
      
      return {
        ...exercise,
        id: `shuffled-${exercise.id}-${shuffledIndex}`,
        originalId: exercise.id,
        originalCorrect: exercise.correct,
        options: shuffledOptions,
        correct: newCorrectIndex,
        shuffledIndex: shuffledIndex,
        originalIndex: originalIndex
      };
    });

    return { exercises: processedExercises, mapping };
  }, [selectedLevel]);

  // Calcular score baseado nas respostas
  const calculateScore = useCallback(() => {
    if (shuffledExercises.length === 0) return 0;
    
    return quizState.answers.reduce((score, answer, index) => {
      if (answer === undefined) return score;
      const exercise = shuffledExercises[index];
      return score + (answer === exercise.correct ? 1 : 0);
    }, 0);
  }, [quizState.answers, shuffledExercises]);

  // Calcular streak
  const calculateStreak = useCallback(() => {
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

  // Preparar exercícios embaralhados quando um nível é selecionado
  useEffect(() => {
    if (selectedLevel && currentView === 'quiz' && !quizState.levelCompleted && !quizState.quizFinished) {
      const { exercises, mapping } = prepareShuffledExercises();
      setShuffledExercises(exercises);
      setExerciseMapping(mapping);
    }
  }, [selectedLevel, currentView, quizState.levelCompleted, quizState.quizFinished, prepareShuffledExercises]);

  // Funções de navegação
  const goToCadeiras = useCallback(() => {
    onViewChange('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
    setShuffledExercises([]);
    setExerciseMapping([]);
    resetQuizState();
  }, [onViewChange]);

  const goToLevels = useCallback(() => {
    onViewChange('levels');
    setSelectedLevel(null);
    setShuffledExercises([]);
    setExerciseMapping([]);
  }, [onViewChange]);

  const startLevel = useCallback((levelId) => {
    setSelectedLevel(levelId);
    onViewChange('quiz');
    resetTimer();
    resetQuizState();
    setStartTime(Date.now());
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

  const handleDownloadReport = useCallback(() => {
    const currentLevelData = getCurrentLevelData();
    const sessionData = {
      sessionStartTime,
      timeSpent,
      currentLevelData,
      score: score,
      maxStreak: maxStreak,
      mistakes,
      totalPossibleScore: currentLevelData?.exercises.length || 0,
      shuffledExercises: shuffledExercises,
      exerciseMapping: exerciseMapping,
      wasShuffled: true
    };
    downloadReport(sessionData);
  }, [sessionStartTime, timeSpent, score, maxStreak, mistakes, downloadReport, shuffledExercises, exerciseMapping]);

  const handleResetProgress = useCallback(() => {
    if (window.confirm('⚠️ Tens a certeza? Vais perder todo o progresso no laboratório!')) {
      resetProgress();
      resetQuizState();
      setShuffledExercises([]);
      setExerciseMapping([]);
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
                onViewChange('levels');
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
            totalExercises={shuffledExercises.length > 0 ? shuffledExercises.length : currentLevelData.exercises.length}
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
            onBack={() => onViewChange('levels')}
            onShowTheory={() => setShowTheory(true)}
            comments={comments}
            currentComment={currentComment}
            onSaveComment={saveComment}
            showTheory={showTheory}
            onCloseTheory={() => setShowTheory(false)}
            // Propriedade para indicar que as opções estão embaralhadas
            isShuffled={shuffledExercises.length > 0}
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