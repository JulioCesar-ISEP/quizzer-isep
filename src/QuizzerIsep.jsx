import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, Trophy, Brain, Code, Zap, Target, FileText,
  Clock, BookOpen, ArrowRight, RotateCw, Settings, ChevronLeft,
  MessageSquare, Download, Lightbulb, Flame, Star, Award, Sparkles,
  Menu, X, Home, TrendingUp, AlertCircle, Grid3x3
} from 'lucide-react';
import cadeiras from '../data/Cadeiras';

const QuizzerIsep = () => {
  const [currentView, setCurrentView] = useState('cadeiras');
  const [selectedCadeira, setSelectedCadeira] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Estado do quiz
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completedLevels, setCompletedLevels] = useState({}); // Mudado para objeto
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [showTheory, setShowTheory] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mistakes, setMistakes] = useState([]);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [sessionStartTime] = useState(new Date());
  const [showStats, setShowStats] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [levelCompleted, setLevelCompleted] = useState(false);

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  const getCurrentExerciseData = () => getCurrentLevelData()?.exercises[currentExercise];

  // Obter níveis completos da cadeira atual
  const getCurrentCadeiraCompletedLevels = () => {
    return completedLevels[selectedCadeira] || [];
  };

  // Obter pontuação total da cadeira atual
  const getCurrentCadeiraScore = () => {
    return score; // Agora o score é específico por sessão, não acumulado
  };

  const cleanupOldReports = () => {
    const today = new Date().toISOString().slice(0, 10);
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('quizzReport_')) {
        const reportDate = key.replace('quizzReport_', '');
        if (reportDate < oneDayAgo) {
          localStorage.removeItem(key);
        }
      }
    }
  };

  useEffect(() => {
    cleanupOldReports();
  }, []);

  const getDailyStats = () => {
    const today = new Date().toISOString().slice(0, 10);
    const reportKey = `quizzReport_${today}`;
    const existingReport = localStorage.getItem(reportKey);
    
    if (!existingReport) {
      return {
        sessions: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        totalXP: 0,
        successRate: 0
      };
    }

    const sessionMatches = existingReport.match(/## Sessão \d+/g) || [];
    const sessions = sessionMatches.length;
    
    const scoreMatches = [...existingReport.matchAll(/Pontuação[^\d]*(\d+)\/(\d+)/g)];
    const totalCorrect = scoreMatches.reduce((sum, match) => sum + parseInt(match[1]), 0);
    const totalQuestions = scoreMatches.reduce((sum, match) => sum + parseInt(match[2]), 0);
    
    const xpMatches = [...existingReport.matchAll(/XP Ganho[^\d]*(\d+)/g)];
    const totalXP = xpMatches.reduce((sum, match) => sum + parseInt(match[1]), 0);

    return {
      sessions,
      totalQuestions,
      totalCorrect,
      totalXP,
      successRate: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
    };
  };

  const startLevel = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentView('quiz');
    setStartTime(Date.now());
    // Resetar o score quando iniciar um novo nível
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
  };

  const goToCadeiras = () => {
    setCurrentView('cadeiras');
    setSelectedCadeira(null);
    setSelectedLevel(null);
  };

  const resetQuizState = () => {
    setCurrentExercise(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setShowSolution(false);
    setSelectedAnswer(null);
    setMistakes([]);
    setComments({});
    setCurrentComment('');
    setQuizFinished(false);
    setLevelCompleted(false);
    setTimeSpent(0);
    setAchievements([]);
  };

  const handleAnswer = (selectedIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedIndex);
    setShowSolution(true);

    const currentLevelData = getCurrentLevelData();
    const currentExerciseData = getCurrentExerciseData();

    if (selectedIndex === currentExerciseData.correct) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setMaxStreak(Math.max(maxStreak, newStreak));
      setTotalXP(prev => prev + currentLevelData.xp);
    } else {
      setStreak(0);
      const commentKey = `${selectedLevel}-${currentExercise}`;
      const currentCadeiraData = getCurrentCadeiraData();
      
      setMistakes(prev => [...prev, {
        cadeiraId: selectedCadeira,
        cadeiraName: currentCadeiraData.name,
        levelId: selectedLevel,
        levelName: currentLevelData.name,
        exerciseIndex: currentExercise,
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
    const currentCadeiraData = getCurrentCadeiraData();
    const totalLevels = currentCadeiraData?.levels.length || 0;

    setSelectedAnswer(null);
    setShowSolution(false);
    setCurrentComment('');

    if (currentExercise < totalExercisesInLevel - 1) {
      setCurrentExercise(prev => prev + 1);
    } else {
      const currentCompletedLevels = getCurrentCadeiraCompletedLevels();
      
      if (!currentCompletedLevels.includes(selectedLevel)) {
        // Atualizar os níveis completos apenas para a cadeira atual
        setCompletedLevels(prev => ({
          ...prev,
          [selectedCadeira]: [...currentCompletedLevels, selectedLevel]
        }));
      }

      // Verificar se todos os níveis da cadeira atual foram completados
      if (currentCompletedLevels.length + 1 === totalLevels) {
        setQuizFinished(true);
      } else {
        setLevelCompleted(true);
      }
      setCurrentExercise(0);
    }
  };

  const saveComment = (text) => {
    setCurrentComment(text);
    const key = `${selectedCadeira}-${selectedLevel}-${currentExercise}`;
    setComments(prev => ({ ...prev, [key]: text }));
  };

  const resetProgress = () => {
    if (window.confirm('⚠️ Tem a certeza? Vai perder todo o progresso!')) {
      resetQuizState();
      setCompletedLevels({});
      setTotalXP(0);
      setSelectedLevel(null);
      setSelectedCadeira(null);
      setCurrentView('cadeiras');
      setStartTime(Date.now());
    }
  };

  const generateMarkdownReport = () => {
    const currentLevelData = getCurrentLevelData();
    const totalPossibleScore = currentLevelData?.exercises.length || 0;
    const percentage = totalPossibleScore > 0 ? Math.round((score / totalPossibleScore) * 100) : 0;
    const today = new Date().toISOString().slice(0, 10);
    
    const existingReportKey = `quizzReport_${today}`;
    const existingReport = localStorage.getItem(existingReportKey);
    
    let markdown = '';
    let sessionCount = 1;
    let previousSessions = '';

    if (existingReport) {
      const sessionsMatch = existingReport.match(/## Sessão \d+ - [\s\S]*?(?=## Sessão|$)/g);
      if (sessionsMatch) {
        sessionCount = sessionsMatch.length + 1;
        previousSessions = sessionsMatch.join('\n\n');
      }
    }

    if (!existingReport) {
      markdown += `# 📊 Relatório Diário - QUIZZER ISEP\n\n`;
      markdown += `**Data**: ${new Date().toLocaleDateString('pt-PT')}\n`;
      markdown += `**Dia**: ${new Date().toLocaleString('pt-PT', { weekday: 'long' })}\n\n`;
      markdown += `---\n\n`;
    }

    markdown += `## Sessão ${sessionCount} - ${sessionStartTime.toLocaleTimeString('pt-PT')}\n\n`;
    markdown += `**Início**: ${sessionStartTime.toLocaleString('pt-PT')}\n`;
    markdown += `**Tempo Total**: ${formatTime(timeSpent)}\n`;
    markdown += `**Nível**: ${currentLevelData?.name || 'N/A'}\n`;
    markdown += `**Pontuação**: ${score}/${totalPossibleScore} (${percentage}%)\n`;
    markdown += `**XP Ganho**: ${currentLevelData?.xp || 0}\n`;
    markdown += `**Maior Sequência**: ${maxStreak}\n\n`;

    if (mistakes.length > 0) {
      markdown += `### ❌ Questões com Erros\n\n`;
      mistakes.forEach((mistake, idx) => {
        markdown += `#### Erro ${idx + 1}: ${mistake.question}\n`;
        markdown += `**Nível**: ${mistake.levelName}\n`;
        markdown += `**Hora**: ${mistake.timestamp}\n\n`;

        if (mistake.code) markdown += `\`\`\`javascript\n${mistake.code}\n\`\`\`\n\n`;
        markdown += `- **Sua resposta**: ${mistake.selectedOption} ❌\n`;
        markdown += `- **Resposta correta**: ${mistake.correctOption} ✅\n`;
        markdown += `- **Explicação**: ${mistake.explanation}\n\n`;

        if (mistake.theoryPoints) {
          markdown += `##### 📚 ${mistake.theoryPoints.title}\n${mistake.theoryPoints.content}\n\n`;
        }
        if (mistake.studentComment) {
          markdown += `##### 💬 Dúvida: ${mistake.studentComment}\n\n`;
        }
        markdown += `---\n\n`;
      });
    } else {
      markdown += `### ✅ Desempenho Perfeito!\n\n`;
      markdown += `✨ Nenhum erro registado nesta sessão.\n\n`;
    }

    markdown += `### 📈 Resumo da Sessão\n`;
    markdown += `- **Total de questões**: ${totalPossibleScore}\n`;
    markdown += `- **Acertos**: ${score}\n`;
    markdown += `- **Erros**: ${mistakes.length}\n`;
    markdown += `- **Taxa de sucesso**: ${percentage}%\n`;
    markdown += `- **Sequência máxima**: ${maxStreak}\n\n`;
    markdown += `---\n\n`;

    if (previousSessions) {
      markdown = `# 📊 Relatório Diário - QUIZZER ISEP\n\n` +
                 `**Data**: ${new Date().toLocaleDateString('pt-PT')}\n` +
                 `**Dia**: ${new Date().toLocaleString('pt-PT', { weekday: 'long' })}\n\n` +
                 `---\n\n` +
                 previousSessions + '\n\n' + markdown;
    }

    return markdown;
  };

  const downloadReport = () => {
    const markdown = generateMarkdownReport();
    const element = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);
    
    const reportKey = `quizzReport_${today}`;
    localStorage.setItem(reportKey, markdown);
    
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(markdown));
    element.setAttribute('download', `relatorio_diario_${today}.md`);
    element.click();
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!quizFinished && !levelCompleted && currentView === 'quiz') {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, quizFinished, levelCompleted, currentView]);

  const currentCadeiraData = getCurrentCadeiraData();
  const currentLevelData = getCurrentLevelData();
  const currentExerciseData = getCurrentExerciseData();
  const totalExercisesInLevel = currentLevelData?.exercises.length || 0;
  const totalPossibleScore = currentLevelData?.exercises.length || 0;
  const isCorrect = selectedAnswer === currentExerciseData?.correct;
  const commentKey = `${selectedLevel}-${currentExercise}`;
  const hasComment = comments[commentKey];

  const TheoryModal = ({ theory, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            <Lightbulb size={28} /> {theory.title}
          </h2>
          <button onClick={onClose} className="modal-close-btn">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <p className="theory-content">{theory.content}</p>
          {theory.keyPoints && (
            <div className="theory-keypoints">
              <h3 className="keypoints-title">
                <Target size={18} /> Pontos Chave
              </h3>
              <ul className="keypoints-list">
                {theory.keyPoints.map((point, i) => (
                  <li key={i} className="keypoint-item">
                    <span className="bullet-point">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // VIEW: Seleção de Cadeiras
  if (currentView === 'cadeiras') {
    return (
      <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="main-header">
          <div className="header-content">
            <h1 className="app-title">
              <Sparkles size={28} /> QUIZZER ISEP
            </h1>
            <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className="cadeiras-grid">
            {cadeiras.map(cadeira => (
              <button
                key={cadeira.id}
                onClick={() => {
                  setSelectedCadeira(cadeira.id);
                  setCurrentView('levels');
                }}
                className="cadeira-card"
                style={{
                  background: `linear-gradient(135deg, ${cadeira.color} 0%, ${cadeira.color}dd 100%)`
                }}
              >
                <div className="cadeira-icon">
                  {cadeira.icon === 'Code' ? '💻' : cadeira.icon === 'Brain' ? '🧠' : '📊'}
                </div>
                <div className="cadeira-info">
                  <h3 className="cadeira-name">{cadeira.name}</h3>
                  <p className="cadeira-desc">{cadeira.description}</p>
                  <div className="cadeira-footer" style={{ marginTop: '0.75rem' }}>
                    <span>{cadeira.levels.length} níveis</span>
                    <span>{completedLevels[cadeira.id]?.length || 0} completos</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VIEW: Seleção de Levels
  if (currentView === 'levels' && currentCadeiraData) {
    const currentCadeiraCompletedLevels = getCurrentCadeiraCompletedLevels();
    
    return (
      <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="main-header">
          <div className="header-content">
            <h1 className="app-title">
              <Sparkles size={28} /> QUIZZER ISEP
            </h1>
            <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <button onClick={goToCadeiras} className="breadcrumb-btn">
              ← Voltar
            </button>
            <h2 className="cadeira-title">{currentCadeiraData.name}</h2>
          </div>

          <div className="stats-grid-main">
            <div className="stat-card-main">
              <Zap className="icon-yellow" size={32} />
              <div>
                <p className="stat-label-main">Total XP</p>
                <p className="stat-value-main">{totalXP}</p>
              </div>
            </div>
            <div className="stat-card-main">
              <Trophy className="icon-gold" size={32} />
              <div>
                <p className="stat-label-main">Níveis Feitos</p>
                <p className="stat-value-main">{currentCadeiraCompletedLevels.length}/{currentCadeiraData.levels.length}</p>
              </div>
            </div>
            <div className="stat-card-main">
              <Target className="icon-blue" size={32} />
              <div>
                <p className="stat-label-main">Pontuação Atual</p>
                <p className="stat-value-main">{getCurrentCadeiraScore()}</p>
              </div>
            </div>
            <div className="stat-card-main">
              <Flame className="icon-orange" size={32} />
              <div>
                <p className="stat-label-main">Melhor Sequência</p>
                <p className="stat-value-main">{maxStreak}</p>
              </div>
            </div>
          </div>

          <div className="levels-section">
            <h2 className="section-title">Seleciona um Nível</h2>
            <div className="levels-grid">
              {currentCadeiraData.levels.map(level => {
                const isCompleted = currentCadeiraCompletedLevels.includes(level.id);
                return (
                  <button
                    key={level.id}
                    onClick={() => startLevel(level.id)}
                    className="level-card"
                    style={{
                      background: `linear-gradient(135deg, ${level.color} 0%, ${level.color}dd 100%)`
                    }}
                  >
                    <div className="level-icon">
                      {level.icon === 'Code' ? '💻' : '🧠'}
                    </div>
                    <div className="level-info">
                      <div className="level-header">
                        <div className="level-text">
                          <h3 className="level-name">{level.name}</h3>
                          <p className="level-desc">{level.description}</p>
                        </div>
                        {isCompleted && <CheckCircle size={24} />}
                      </div>
                      <div className="level-footer">
                        <span>{level.exercises.length} questões</span>
                        <span>+{level.xp} XP</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // VIEW: Quiz
  if (currentView === 'quiz' && currentExerciseData) {
    // Tela de Conclusão do Nível
    if (levelCompleted) {
      const percentage = Math.round((score / totalExercisesInLevel) * 100);
      let medal = percentage === 100 ? '🥇' : percentage >= 80 ? '🥈' : percentage >= 60 ? '🥉' : '🎯';

      return (
        <div className={`level-completed ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <div className="finished-container">
            <div className="medal-icon">{medal}</div>
            <h1 className="finished-title">Nível Concluído!</h1>
            <p className="finished-subtitle">Completaste {currentLevelData?.name}</p>

            <div className="score-card">
              <div className="score-row">
                <span>Pontuação</span>
                <span className="score-value">{score}/{totalExercisesInLevel}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={() => { 
                setLevelCompleted(false); 
                setCurrentView('levels'); 
                resetQuizState();
              }} className="btn btn-primary">
                <ArrowRight size={20} /> Voltar aos Níveis
              </button>
              <button onClick={downloadReport} className="btn btn-success">
                <Download size={20} /> Relatório
              </button>
              <button onClick={resetProgress} className="btn btn-danger">
                <RotateCw size={20} /> Resetar Progresso
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Tela final
    if (quizFinished) {
      const totalAllQuestions = currentCadeiraData.levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0);
      const percentage = Math.round((score / totalAllQuestions) * 100);
      let medal = percentage === 100 ? '🏆' : percentage >= 80 ? '🥇' : '🎉';
      
      return (
        <div className={`quiz-finished ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <div className="finished-container">
            <div className="medal-icon">{medal}</div>
            <h1 className="finished-title">Parabéns!</h1>
            <p className="finished-subtitle">Completaste todos os níveis de {currentCadeiraData.name}</p>
            
            <div className="score-card">
              <div className="score-row">
                <span>Pontuação Final</span>
                <span className="score-value">{score}/{totalAllQuestions}</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="percentage-text">{percentage}% de Taxa de Sucesso</div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <Flame size={20} className="icon-orange" />
                <p className="stat-label">Melhor Sequência</p>
                <p className="stat-value">{maxStreak}</p>
              </div>
              <div className="stat-card">
                <Zap size={20} className="icon-yellow" />
                <p className="stat-label">XP Ganho</p>
                <p className="stat-value">{totalXP}</p>
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={downloadReport} className="btn btn-success">
                <Download size={20} /> Relatório Diário
              </button>
              <button onClick={() => { 
                setQuizFinished(false); 
                setCurrentView('cadeiras'); 
                resetQuizState(); 
              }} className="btn btn-primary">
                <Home size={20} /> Menu Principal
              </button>
              <button onClick={resetProgress} className="btn btn-danger">
                <AlertCircle size={20} /> Resetar Tudo
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Tela de Quiz
    return (
      <div className={`quiz-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {showTheory && <TheoryModal theory={currentExerciseData.theoryPoints} onClose={() => setShowTheory(false)} />}

        <div className="quiz-header">
          <div className="quiz-header-content">
            <div className="quiz-nav">
              <button onClick={() => setCurrentView('levels')} className="btn btn-secondary">
                <ChevronLeft size={20} /> Níveis
              </button>
              <h1 className="quiz-title">{currentLevelData.name}</h1>
              <button onClick={() => setShowTheory(true)} className="btn btn-purple">
                <BookOpen size={20} /> Teoria
              </button>
            </div>

            <div className="progress-section">
              <div className="progress-info">
                <span className="progress-label">Progresso</span>
                <span>{currentExercise + 1}/{totalExercisesInLevel}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-progress"
                  style={{ width: `${((currentExercise + 1) / totalExercisesInLevel) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="quiz-content">
          <div className="quiz-stats">
            <div className="stat-item">
              <p className="stat-label-small">Questão</p>
              <p className="stat-value-small">{currentExercise + 1}</p>
            </div>
            <div className="stat-item">
              <p className="stat-label-small">Tempo</p>
              <p className="stat-value-small">{formatTime(timeSpent)}</p>
            </div>
            <div className="stat-item">
              <p className="stat-label-small">Pontos</p>
              <p className="stat-value-small score-points">{score}</p>
            </div>
            <div className="stat-item">
              <p className="stat-label-small">Sequência</p>
              <p className="stat-value-small streak-value">
                <Flame size={16} /> {streak}
              </p>
            </div>
          </div>

          <div className="question-card">
            <h2 className="question-text">{currentExerciseData.question}</h2>

            {currentExerciseData.code && (
              <pre className="code-block">
                <code>{currentExerciseData.code.trim()}</code>
              </pre>
            )}

            <div className="options-list">
              {currentExerciseData.options.map((option, idx) => {
                let optionClass = 'option-btn';
                let icon = null;

                if (showSolution) {
                  if (idx === currentExerciseData.correct) {
                    optionClass += ' option-correct';
                    icon = <CheckCircle size={24} />;
                  } else if (idx === selectedAnswer) {
                    optionClass += ' option-incorrect';
                    icon = <XCircle size={24} />;
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={showSolution}
                    className={optionClass}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}.</span>
                    {icon || <ArrowRight size={24} className="option-arrow" />}
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {!showSolution && (
            <div className="comments-section">
              <label className="comments-label">
                <MessageSquare size={20} className="icon-blue" />
                <span className="comments-title">Deixa uma dúvida (opcional)</span>
                {hasComment && <span className="comment-saved">✓ Salvo</span>}
              </label>
              <textarea
                value={currentComment}
                onChange={(e) => saveComment(e.target.value)}
                placeholder="Ex: Não entendi bem o conceito X ou o motivo desta resposta..."
                className="comment-textarea"
                rows="3"
              />
            </div>
          )}

          {showSolution && (
            <div className={`solution-card ${isCorrect ? 'solution-correct' : 'solution-incorrect'}`}>
              <h3 className={`solution-title ${isCorrect ? 'text-success' : 'text-error'}`}>
                {isCorrect ? (
                  <> <CheckCircle size={28} /> Correto! 🎉 </>
                ) : (
                  <> <XCircle size={28} /> Incorreto 😅 </>
                )}
              </h3>

              <div className="solution-content">
                <div className="explanation-card">
                  <p className="explanation-label">Explicação</p>
                  <p className="explanation-text">{currentExerciseData.explanation}</p>
                </div>

                {currentExerciseData.theoryPoints && (
                  <div className="theory-card">
                    <p className="theory-title">
                      <Lightbulb size={20} className="icon-yellow" /> {currentExerciseData.theoryPoints.title}
                    </p>
                    <p className="theory-content-small">{currentExerciseData.theoryPoints.content}</p>
                    {currentExerciseData.theoryPoints.keyPoints && (
                      <div className="keypoints-small">
                        {currentExerciseData.theoryPoints.keyPoints.map((point, i) => (
                          <p key={i} className="keypoint-small">
                            <span className="arrow">→</span>
                            <span>{point}</span>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {!isCorrect && hasComment && (
                  <div className="comment-card">
                    <p className="comment-title">
                      <MessageSquare size={20} className="icon-blue" /> Tua Dúvida
                    </p>
                    <p className="comment-text">"{currentComment}"</p>
                    <p className="comment-hint">👉 Revê esta questão no relatório final</p>
                  </div>
                )}
              </div>

              <button onClick={nextExercise} className="btn btn-next">
                Próxima Questão <ArrowRight size={22} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Carregando...</div>;
};

export default QuizzerIsep;