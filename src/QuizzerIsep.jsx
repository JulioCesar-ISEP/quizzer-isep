import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import {
  CheckCircle, XCircle, Trophy, Brain, Code, Zap, Target, FileText,
  Clock, BookOpen, ArrowRight, RotateCw, Settings, ChevronLeft,
  MessageSquare, Download, Lightbulb, Flame, Star, Award, Sparkles,
  Menu, X, Home, TrendingUp, AlertCircle, Grid3x3, Moon, Sun, Cpu
} from 'lucide-react';
import cadeiras from '../data/cadeiras';

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
  const [completedLevels, setCompletedLevels] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [showTheory, setShowTheory] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('quizzer-theme');
    return saved ? JSON.parse(saved) : false;
  });
  const [mistakes, setMistakes] = useState([]);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [sessionStartTime] = useState(new Date());
  const [levelCompleted, setLevelCompleted] = useState(false);

  // Persistência do tema
  useEffect(() => {
    localStorage.setItem('quizzer-theme', JSON.stringify(isDark));
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!levelCompleted && currentView === 'quiz') {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, levelCompleted, currentView]);

  // Controlar o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (showTheory) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showTheory]);

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentLevelData = () => getCurrentCadeiraData()?.levels.find(l => l.id === selectedLevel);
  const getCurrentExerciseData = () => getCurrentLevelData()?.exercises[currentExercise];

  // Obter níveis completos da cadeira atual
  const getCurrentCadeiraCompletedLevels = () => {
    return completedLevels[selectedCadeira] || [];
  };

  // Funções de Relatório
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
    resetQuizState();
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
    const key = `${selectedLevel}-${currentExercise}`;
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

  // MODAL CORRIGIDO - usando useCallback e portal
  const TheoryModal = useCallback(({ theory, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    }, []);

    const handleClose = useCallback(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, [onClose]);

    const modalContent = (
      <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
        <div
          className={`modal-content theory-modal ${isVisible ? 'visible' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <div className="modal-title-section">
              <Lightbulb size={28} className="theory-icon" />
              <h2 className="modal-title">{theory.title}</h2>
            </div>
            <button onClick={handleClose} className="modal-close-btn">
              <X size={24} />
            </button>
          </div>
          <div className="modal-body">
            <div className="theory-content-card">
              <p className="theory-content">{theory.content}</p>
            </div>
            {theory.keyPoints && (
              <div className="theory-keypoints">
                <h3 className="keypoints-title">
                  <Target size={20} /> Pontos Principais
                </h3>
                <ul className="keypoints-list">
                  {theory.keyPoints.map((point, i) => (
                    <li key={i} className="keypoint-item">
                      <div className="keypoint-marker">
                        <div className="keypoint-dot"></div>
                      </div>
                      <span className="keypoint-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {theory.examples && (
              <div className="theory-examples">
                <h4 className="examples-title">📋 Exemplos</h4>
                <pre className="examples-code">
                  <code>{theory.examples}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
  }, []);

  // VIEW: Seleção de Cadeiras
  if (currentView === 'cadeiras') {
    const dailyStats = getDailyStats();

    return (
      <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="main-header">
          <div className="header-content">
            <div className="header-left">
              <Sparkles size={32} className="app-logo" />
              <h1 className="app-title">QUIZZER ISEP</h1>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle-btn"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className="welcome-section">
            <h2 className="welcome-title">Bem-vindo ao Quizzer ISEP</h2>
            <p className="welcome-subtitle">Melhora os teus conhecimentos através de quizzes interativos</p>
          </div>

          <div className="stats-overview">
            <div className="stat-item-overview">
              <Trophy className="stat-icon" />
              <div>
                <span className="stat-number">{Object.values(completedLevels).flat().length}</span>
                <span className="stat-label">Níveis Completos</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <Zap className="stat-icon" />
              <div>
                <span className="stat-number">{totalXP}</span>
                <span className="stat-label">Total XP</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <Flame className="stat-icon" />
              <div>
                <span className="stat-number">{maxStreak}</span>
                <span className="stat-label">Melhor Sequência</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <TrendingUp className="stat-icon" />
              <div>
                <span className="stat-number">{dailyStats.successRate}%</span>
                <span className="stat-label">Taxa de Sucesso</span>
              </div>
            </div>
          </div>

          <div className="action-buttons-main">
            <button onClick={downloadReport} className="btn btn-secondary">
              <Download size={20} />
              Relatório Diário
            </button>
            <button onClick={resetProgress} className="btn btn-danger">
              <RotateCw size={20} />
              Resetar Progresso
            </button>
          </div>

          <div className="cadeiras-section">
            <h3 className="section-title">Cadeiras Disponíveis</h3>
            <div className="cadeiras-grid">
              {cadeiras.map(cadeira => {
                const completedLevelsCount = completedLevels[cadeira.id]?.length || 0;
                const totalLevelsCount = cadeira.levels.length;
                const isFullyCompleted = completedLevelsCount === totalLevelsCount;

                return (
                  <div
                    key={cadeira.id}
                    className={`cadeira-card ${isFullyCompleted ? 'completed' : ''}`}
                    onClick={() => {
                      setSelectedCadeira(cadeira.id);
                      setCurrentView('levels');
                    }}
                  >
                    <div className="cadeira-header">
                      <div className="cadeira-icon">
                        {cadeira.icon === 'Cpu' ? <Cpu size={32} /> :
                          cadeira.icon === 'Code' ? <Code size={32} /> :
                            cadeira.icon === 'Brain' ? <Brain size={32} /> :
                              <FileText size={32} />}
                      </div>
                      {isFullyCompleted && (
                        <div className="completion-badge">
                          <CheckCircle size={20} />
                        </div>
                      )}
                    </div>
                    <div className="cadeira-content">
                      <h4 className="cadeira-name">{cadeira.name}</h4>
                      <p className="cadeira-desc">{cadeira.description}</p>
                      <div className="cadeira-meta">
                        <span className="meta-item">
                          <FileText size={16} />
                          {totalLevelsCount} níveis
                        </span>
                        <span className="meta-item">
                          <Zap size={16} />
                          +{cadeira.xp} XP
                        </span>
                      </div>
                      <div className="progress-info">
                        <span>{completedLevelsCount}/{totalLevelsCount} níveis completos</span>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${(completedLevelsCount / totalLevelsCount) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cadeira-footer">
                      <button className="start-btn">
                        {isFullyCompleted ? 'Ver Níveis' : 'Ver Níveis'}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // VIEW: Seleção de Levels
  if (currentView === 'levels' && getCurrentCadeiraData()) {
    const currentCadeiraData = getCurrentCadeiraData();
    const currentCadeiraCompletedLevels = getCurrentCadeiraCompletedLevels();
    const dailyStats = getDailyStats();

    return (
      <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="main-header">
          <div className="header-content">
            <div className="header-left">
              <Sparkles size={32} className="app-logo" />
              <h1 className="app-title">QUIZZER ISEP</h1>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle-btn"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <button onClick={goToCadeiras} className="back-btn">
              <ChevronLeft size={20} />
              Voltar às Cadeiras
            </button>
            <h2 className="cadeira-title">{currentCadeiraData.name}</h2>
          </div>

          <div className="stats-overview">
            <div className="stat-item-overview">
              <Zap className="stat-icon" />
              <div>
                <span className="stat-number">{totalXP}</span>
                <span className="stat-label">Total XP</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <Trophy className="stat-icon" />
              <div>
                <span className="stat-number">{currentCadeiraCompletedLevels.length}/{currentCadeiraData.levels.length}</span>
                <span className="stat-label">Níveis Completos</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <Target className="stat-icon" />
              <div>
                <span className="stat-number">{score}</span>
                <span className="stat-label">Pontuação Atual</span>
              </div>
            </div>
            <div className="stat-item-overview">
              <Flame className="stat-icon" />
              <div>
                <span className="stat-number">{maxStreak}</span>
                <span className="stat-label">Melhor Sequência</span>
              </div>
            </div>
          </div>

          <div className="levels-section">
            <h3 className="section-title">Seleciona um Nível</h3>
            <div className="levels-grid">
              {currentCadeiraData.levels.map(level => {
                const isCompleted = currentCadeiraCompletedLevels.includes(level.id);
                return (
                  <div
                    key={level.id}
                    className={`level-card ${isCompleted ? 'completed' : ''}`}
                    onClick={() => startLevel(level.id)}
                  >
                    <div className="level-header">
                      <div className="level-icon">
                        {level.icon === 'Code' ? <Code size={32} /> :
                          level.icon === 'Brain' ? <Brain size={32} /> :
                            level.icon === 'Cpu' ? <Cpu size={32} /> :
                              <FileText size={32} />}
                      </div>
                      {isCompleted && (
                        <div className="completion-badge">
                          <CheckCircle size={20} />
                        </div>
                      )}
                    </div>
                    <div className="level-content">
                      <h4 className="level-name">{level.name}</h4>
                      <p className="level-desc">{level.description}</p>
                      <div className="level-meta">
                        <span className="meta-item">
                          <FileText size={16} />
                          {level.exercises.length} exercícios
                        </span>
                        <span className="meta-item">
                          <Zap size={16} />
                          +{level.xp} XP
                        </span>
                      </div>
                    </div>
                    <div className="level-footer">
                      <button className="start-btn">
                        {isCompleted ? 'Refazer' : 'Iniciar'}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // VIEW: Quiz
  if (currentView === 'quiz' && getCurrentExerciseData()) {
    const currentLevelData = getCurrentLevelData();
    const currentExerciseData = getCurrentExerciseData();
    const totalExercisesInLevel = currentLevelData?.exercises.length || 0;
    const isCorrect = selectedAnswer === currentExerciseData?.correct;
    const commentKey = `${selectedLevel}-${currentExercise}`;
    const hasComment = comments[commentKey];

    // Tela de Conclusão do Nível
    if (levelCompleted) {
      const percentage = Math.round((score / totalExercisesInLevel) * 100);
      let medal = percentage === 100 ? '🥇' : percentage >= 80 ? '🥈' : percentage >= 60 ? '🥉' : '🎯';

      return (
        <div className={`completion-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <div className="completion-container">
            <div className="completion-header">
              <div className="medal-display">{medal}</div>
              <h1 className="completion-title">Nível Concluído!</h1>
              <p className="completion-subtitle">Completaste {currentLevelData?.name}</p>
            </div>

            <div className="score-summary">
              <div className="score-card">
                <div className="score-header">
                  <Trophy className="score-icon" />
                  <span>Pontuação Final</span>
                </div>
                <div className="score-value">
                  {score}<span>/{totalExercisesInLevel}</span>
                </div>
                <div className="score-percentage">{percentage}%</div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-mini">
                  <Flame className="stat-mini-icon" />
                  <span className="stat-mini-value">{maxStreak}</span>
                  <span className="stat-mini-label">Melhor Sequência</span>
                </div>
                <div className="stat-mini">
                  <Zap className="stat-mini-icon" />
                  <span className="stat-mini-value">+{currentLevelData.xp}</span>
                  <span className="stat-mini-label">XP Ganho</span>
                </div>
                <div className="stat-mini">
                  <Clock className="stat-mini-icon" />
                  <span className="stat-mini-value">{formatTime(timeSpent)}</span>
                  <span className="stat-mini-label">Tempo</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button
                onClick={() => {
                  setLevelCompleted(false);
                  setCurrentView('levels');
                }}
                className="btn btn-primary"
              >
                <Home size={20} />
                Voltar aos Níveis
              </button>
              <button onClick={downloadReport} className="btn btn-success">
                <Download size={20} />
                Baixar Relatório
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Tela final (todos os níveis completos)
    if (quizFinished) {
      const currentCadeiraData = getCurrentCadeiraData();
      const totalAllQuestions = currentCadeiraData.levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0);
      const percentage = Math.round((score / totalAllQuestions) * 100);
      let medal = percentage === 100 ? '🏆' : percentage >= 80 ? '🥇' : '🎉';

      return (
        <div className={`completion-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <div className="completion-container">
            <div className="completion-header">
              <div className="medal-display">{medal}</div>
              <h1 className="completion-title">Parabéns!</h1>
              <p className="completion-subtitle">Completaste todos os níveis de {currentCadeiraData.name}</p>
            </div>

            <div className="score-summary">
              <div className="score-card">
                <div className="score-header">
                  <Trophy className="score-icon" />
                  <span>Pontuação Final</span>
                </div>
                <div className="score-value">
                  {score}<span>/{totalAllQuestions}</span>
                </div>
                <div className="score-percentage">{percentage}%</div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-mini">
                  <Flame className="stat-mini-icon" />
                  <span className="stat-mini-value">{maxStreak}</span>
                  <span className="stat-mini-label">Melhor Sequência</span>
                </div>
                <div className="stat-mini">
                  <Zap className="stat-mini-icon" />
                  <span className="stat-mini-value">{totalXP}</span>
                  <span className="stat-mini-label">XP Total</span>
                </div>
                <div className="stat-mini">
                  <Clock className="stat-mini-icon" />
                  <span className="stat-mini-value">{formatTime(timeSpent)}</span>
                  <span className="stat-mini-label">Tempo</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={downloadReport} className="btn btn-success">
                <Download size={20} />
                Relatório Diário
              </button>
              <button onClick={() => {
                setQuizFinished(false);
                setCurrentView('cadeiras');
                resetQuizState();
              }} className="btn btn-primary">
                <Home size={20} />
                Menu Principal
              </button>
              <button onClick={resetProgress} className="btn btn-danger">
                <AlertCircle size={20} />
                Resetar Tudo
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Tela de Quiz
    return (
      <div className={`quiz-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {/* Modal renderizado condicionalmente com portal */}
        {showTheory && currentExerciseData?.theoryPoints && (
          <TheoryModal
            theory={currentExerciseData.theoryPoints}
            onClose={() => setShowTheory(false)}
          />
        )}

        {/* Header do Quiz */}
        <div className="quiz-header">
          <div className="quiz-header-content">
            <button
              onClick={() => setCurrentView('levels')}
              className="back-btn"
            >
              <ChevronLeft size={20} />
              Voltar
            </button>

            <div className="quiz-info">
              <h1 className="quiz-title">{currentLevelData.name}</h1>
              <div className="quiz-meta">
                <span>Exercício {currentExercise + 1} de {totalExercisesInLevel}</span>
              </div>
            </div>

            {currentExerciseData?.theoryPoints && (
              <button
                onClick={() => setShowTheory(true)}
                className="theory-btn"
              >
                <BookOpen size={20} />
                Teoria
              </button>
            )}
          </div>

          <div className="progress-section">
            <div className="progress-labels">
              <span>Progresso</span>
              <span>{currentExercise + 1}/{totalExercisesInLevel}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentExercise + 1) / totalExercisesInLevel) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Conteúdo do Quiz */}
        <div className="quiz-content">
          <div className="quiz-stats-bar">
            <div className="stat-badge">
              <Target size={16} />
              <span>Pontuação: {score}</span>
            </div>
            <div className="stat-badge streak">
              <Flame size={16} />
              <span>Sequência: {streak}</span>
            </div>
            <div className="stat-badge">
              <Clock size={16} />
              <span>{formatTime(timeSpent)}</span>
            </div>
          </div>

          <div className="question-container">
            <div className="question-card">
              <h2 className="question-text">{currentExerciseData.question}</h2>

              {currentExerciseData.code && (
                <pre className="code-block">
                  <code>{currentExerciseData.code}</code>
                </pre>
              )}

              <div className="options-grid">
                {currentExerciseData.options.map((option, index) => {
                  let optionState = '';
                  if (showSolution) {
                    if (index === currentExerciseData.correct) {
                      optionState = 'correct';
                    } else if (index === selectedAnswer) {
                      optionState = 'incorrect';
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={`option-btn ${optionState}`}
                      onClick={() => handleAnswer(index)}
                      disabled={showSolution}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="option-text">{option}</span>
                      {optionState === 'correct' && <CheckCircle className="option-icon" />}
                      {optionState === 'incorrect' && <XCircle className="option-icon" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Seção de Comentários */}
            {!showSolution && (
              <div className="comments-section">
                <label className="comments-label">
                  <MessageSquare size={18} />
                  <span>Dúvida ou comentário (opcional)</span>
                  {hasComment && <span className="comment-saved">✓ Salvo</span>}
                </label>
                <textarea
                  value={currentComment}
                  onChange={(e) => saveComment(e.target.value)}
                  placeholder="Explica a tua dúvida ou pensamento sobre esta questão..."
                  className="comment-textarea"
                  rows="3"
                />
              </div>
            )}

            {/* Solução */}
            {showSolution && (
              <div className={`solution-panel ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="solution-header">
                  <div className="solution-result">
                    {isCorrect ? (
                      <>
                        <CheckCircle size={24} />
                        <span>Resposta Correta! 🎉</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={24} />
                        <span>Resposta Incorreta</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="solution-content">
                  <div className="explanation-section">
                    <h4>📝 Explicação</h4>
                    <p>{currentExerciseData.explanation}</p>
                  </div>

                  {currentExerciseData.theoryPoints && (
                    <div className="theory-section">
                      <h4>
                        <Lightbulb size={18} />
                        {currentExerciseData.theoryPoints.title}
                      </h4>
                      <p>{currentExerciseData.theoryPoints.content}</p>
                      {currentExerciseData.theoryPoints.keyPoints && (
                        <ul className="keypoints-list-small">
                          {currentExerciseData.theoryPoints.keyPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {!isCorrect && hasComment && (
                    <div className="comment-review">
                      <h4>💬 A tua dúvida</h4>
                      <p>"{comments[commentKey]}"</p>
                      <p className="comment-hint">👉 Revê esta questão no relatório final</p>
                    </div>
                  )}
                </div>

                <button onClick={nextExercise} className="next-btn">
                  {currentExercise < totalExercisesInLevel - 1 ? (
                    <>Próximo Exercício <ArrowRight size={20} /></>
                  ) : (
                    <>Ver Resultados <Trophy size={20} /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

// Helper function
const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default QuizzerIsep;