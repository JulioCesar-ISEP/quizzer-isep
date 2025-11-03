import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, Trophy, Brain, Code, Zap, Target, FileText,
  Clock, BookOpen, ArrowRight, RotateCw, Settings, ChevronLeft,
  MessageSquare, Download, Lightbulb, Flame, Star, Award, Sparkles,
  Menu, X, Home, TrendingUp, AlertCircle
} from 'lucide-react';

const levels = [
  {
    id: 1,
    name: "Fundamentos",
    description: "Conceitos básicos",
    icon: "Brain",
    color: "#3b82f6",
    xp: 100,
    theory: { title: "Teoria Geral", content: "Conteúdo geral..." },
    exercises: [
      {
        id: 1,
        question: "O que é uma variável?",
        code: "let x = 10;",
        options: ["Um espaço na memória", "Uma função", "Uma classe", "Um módulo"],
        correct: 0,
        explanation: "Uma variável é um espaço nomeado na memória para armazenar valores.",
        theoryPoints: {
          title: "Variáveis em Profundidade",
          content: "Uma variável é um identificador que referencia um local de memória...",
          keyPoints: ["Tipo de dado", "Escopo", "Inicialização"],
          examples: "let nome = 'João'; // string\nlet idade = 25; // number"
        },
        hints: ["Pense em uma caixa com etiqueta", "A etiqueta é o nome, o conteúdo é o valor"]
      },
      {
        id: 2,
        question: "Qual é o escopo global?",
        code: "var global = 5;\nfunction test() { console.log(global); }",
        options: ["Dentro da função", "Fora da função", "Na classe", "No módulo"],
        correct: 1,
        explanation: "Escopo global é quando a variável é acessível em todo o programa.",
        theoryPoints: {
          title: "Escopos em JavaScript",
          content: "Existem diferentes níveis de escopo: global, função e bloco...",
          keyPoints: ["Global - acessível em qualquer lugar", "Local - dentro de funções"],
          examples: "let x = 10;\nfunction test() { console.log(x); }"
        },
        hints: ["Considere onde a variável é declarada"]
      }
    ]
  },
  {
    id: 2,
    name: "Estruturas de Controlo",
    description: "if/else e loops",
    icon: "Code",
    color: "#10b981",
    xp: 150,
    theory: { title: "Controlo de Fluxo", content: "Aprenderás a controlar o fluxo..." },
    exercises: [
      {
        id: 1,
        question: "Qual é o resultado: 5 > 3 && 2 < 4?",
        code: "if (5 > 3 && 2 < 4) { console.log('Verdadeiro'); }",
        options: ["Verdadeiro", "Falso", "undefined", "Erro"],
        correct: 0,
        explanation: "Ambas as condições são true, logo && retorna true.",
        theoryPoints: {
          title: "Operadores Lógicos",
          content: "&& (AND), || (OR), ! (NOT) permitem combinar condições...",
          keyPoints: ["&& precisa de ambas", "|| precisa de uma", "! inverte"],
          examples: "true && true = true\nfalse || true = true"
        },
        hints: ["&& significa 'E'", "Ambas precisam ser verdadeiras"]
      }
    ]
  }
];

const QuizzerIsep = () => {
  // Estado do jogo
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completedLevels, setCompletedLevels] = useState([]);
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

  // Função para limpar relatórios antigos
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

  // Executar limpeza ao iniciar o componente
  useEffect(() => {
    cleanupOldReports();
  }, []);

  // Função para obter estatísticas do dia
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

  // Achievements
  const checkAchievements = (newScore, newStreak, newErrors) => {
    const newAchievements = [];
    
    if (newStreak === 3) newAchievements.push({ id: 'streak3', name: 'Em Forma', icon: '🔥', desc: '3 respostas seguidas corretas' });
    if (newStreak === 5) newAchievements.push({ id: 'streak5', name: 'Mestre', icon: '👑', desc: '5 respostas seguidas corretas' });
    if (newScore === levels.reduce((a, l) => a + l.exercises.length, 0)) newAchievements.push({ id: 'perfect', name: 'Perfeição', icon: '✨', desc: 'Todas as questões corretas' });
    if (newErrors === 0) newAchievements.push({ id: 'noerrors', name: 'Sem Erros', icon: '🎯', desc: 'Completaste sem erros' });
    
    newAchievements.forEach(ach => {
      if (!achievements.find(a => a.id === ach.id)) {
        setAchievements(prev => [...prev, ach]);
      }
    });
  };

  const handleAnswer = (selectedIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedIndex);
    setShowSolution(true);

    const currentLvl = levels.find(l => l.id === currentLevel);
    const exercise = currentLvl.exercises[currentExercise];

    if (selectedIndex === exercise.correct) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setMaxStreak(Math.max(maxStreak, newStreak));
      setTotalXP(prev => prev + currentLvl.xp);
      checkAchievements(newScore, newStreak, 0);
    } else {
      setStreak(0);
      const commentKey = `${currentLevel}-${currentExercise}`;
      setMistakes(prev => [...prev, {
        levelId: currentLevel,
        levelName: currentLvl.name,
        exerciseIndex: currentExercise,
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
  };

  const nextExercise = () => {
    const currentLvl = levels.find(l => l.id === currentLevel);
    const totalExercises = currentLvl.exercises.length;

    setSelectedAnswer(null);
    setShowSolution(false);
    setCurrentComment('');

    if (currentExercise < totalExercises - 1) {
      setCurrentExercise(prev => prev + 1);
    } else {
      if (!completedLevels.includes(currentLevel)) {
        setCompletedLevels(prev => [...prev, currentLevel]);
      }
      
      // Verificar se todos os níveis foram completados
      if (completedLevels.length + 1 === levels.length) {
        setQuizFinished(true);
        checkAchievements(score, streak, mistakes.length);
      } else {
        // Apenas completou um nível - mostrar tela de conclusão do nível
        setLevelCompleted(true);
      }
      setCurrentExercise(0);
    }
  };

  const saveComment = (text) => {
    setCurrentComment(text);
    const commentKey = `${currentLevel}-${currentExercise}`;
    setComments(prev => ({ ...prev, [commentKey]: text }));
  };

  const resetProgress = () => {
    if (window.confirm('⚠️ Tem a certeza? Vai perder todo o progresso!')) {
      setCurrentLevel(null);
      setCurrentExercise(0);
      setScore(0);
      setStreak(0);
      setMaxStreak(0);
      setTotalXP(0);
      setQuizFinished(false);
      setLevelCompleted(false);
      setMistakes([]);
      setComments({});
      setCompletedLevels([]);
      setTimeSpent(0);
      setAchievements([]);
      setStartTime(Date.now());
    }
  };

  const generateMarkdownReport = () => {
    const totalPossibleScore = currentLevelData?.exercises.length || 0;
    const percentage = totalPossibleScore > 0 ? Math.round((score / totalPossibleScore) * 100) : 0;
    const today = new Date().toISOString().slice(0, 10);
    
    // Tentar carregar relatório existente do dia
    const existingReportKey = `quizzReport_${today}`;
    const existingReport = localStorage.getItem(existingReportKey);
    
    let markdown = '';
    let sessionCount = 1;
    let previousSessions = '';

    if (existingReport) {
      // Extrair sessões anteriores do relatório existente
      const sessionsMatch = existingReport.match(/## Sessão \d+ - [\s\S]*?(?=## Sessão|$)/g);
      if (sessionsMatch) {
        sessionCount = sessionsMatch.length + 1;
        previousSessions = sessionsMatch.join('\n\n');
      }
    }

    // Cabeçalho do relatório diário
    if (!existingReport) {
      markdown += `# 📊 Relatório Diário - QUIZZER ISEP\n\n`;
      markdown += `**Data**: ${new Date().toLocaleDateString('pt-PT')}\n`;
      markdown += `**Dia**: ${new Date().toLocaleString('pt-PT', { weekday: 'long' })}\n\n`;
      markdown += `---\n\n`;
    }

    // Nova sessão
    markdown += `## Sessão ${sessionCount} - ${sessionStartTime.toLocaleTimeString('pt-PT')}\n\n`;
    markdown += `**Início**: ${sessionStartTime.toLocaleString('pt-PT')}\n`;
    markdown += `**Tempo Total**: ${formatTime(timeSpent)}\n`;
    markdown += `**Nível**: ${currentLevelData?.name || 'N/A'}\n`;
    markdown += `**Pontuação**: ${score}/${totalPossibleScore} (${percentage}%)\n`;
    markdown += `**XP Ganho**: ${currentLevelData?.xp || 0}\n`;
    markdown += `**Maior Sequência**: ${maxStreak}\n\n`;

    // Conquistas desta sessão
    const newAchievements = achievements.filter(ach => 
      !existingReport || !existingReport.includes(ach.name)
    );

    if (newAchievements.length > 0) {
      markdown += `### 🏆 Conquistas desta Sessão\n`;
      newAchievements.forEach(ach => {
        markdown += `- ${ach.icon} **${ach.name}**: ${ach.desc}\n`;
      });
      markdown += `\n`;
    }

    // Questões com erro
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

    // Resumo da sessão
    markdown += `### 📈 Resumo da Sessão\n`;
    markdown += `- **Total de questões**: ${totalPossibleScore}\n`;
    markdown += `- **Acertos**: ${score}\n`;
    markdown += `- **Erros**: ${mistakes.length}\n`;
    markdown += `- **Taxa de sucesso**: ${percentage}%\n`;
    markdown += `- **Sequência máxima**: ${maxStreak}\n\n`;

    markdown += `---\n\n`;

    // Combinar com sessões anteriores se existirem
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
    
    // Salvar no localStorage para referência futura
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
      if (!quizFinished && !levelCompleted) {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, quizFinished, levelCompleted]);

  const currentLevelData = levels.find(l => l.id === currentLevel);
  const currentExerciseData = currentLevelData?.exercises[currentExercise];
  const totalExercisesInLevel = currentLevelData?.exercises.length || 0;
  const totalPossibleScore = currentLevelData?.exercises.length || 0;
  const isCorrect = selectedAnswer === currentExerciseData?.correct;
  const commentKey = `${currentLevel}-${currentExercise}`;
  const hasComment = comments[commentKey];
  const dailyStats = getDailyStats();

  // Componente Modal Teoria
  const TheoryModal = ({ theory, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            <Lightbulb size={28} className="icon-yellow" /> {theory.title}
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

  // Tela de Conclusão do Nível
  if (levelCompleted) {
    const percentage = Math.round((score / totalPossibleScore) * 100);
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
              <span className="score-value">{score}/{totalPossibleScore}</span>
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
              <div className="stat-header">
                <Flame size={20} className="icon-orange" />
                <span className="stat-label">Melhor Sequência</span>
              </div>
              <p className="stat-value">{maxStreak}</p>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <Zap size={20} className="icon-yellow" />
                <span className="stat-label">XP Ganho</span>
              </div>
              <p className="stat-value">{currentLevelData?.xp || 0}</p>
            </div>
          </div>

          {achievements.length > 0 && (
            <div className="achievements-section">
              <h3 className="achievements-title">
                <Trophy size={20} className="icon-yellow" /> Conquistas
              </h3>
              <div className="achievements-grid">
                {achievements.map(ach => (
                  <div key={ach.id} title={ach.desc} className="achievement-item">
                    {ach.icon}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="action-buttons">
            <button
              onClick={downloadReport}
              className="btn btn-success"
            >
              <Download size={20} /> Relatório Diário
            </button>
            <button
              onClick={() => {
                setLevelCompleted(false);
                setCurrentLevel(null);
                setScore(0);
                setStreak(0);
                setMistakes([]);
                setComments({});
                setTimeSpent(0);
                setStartTime(Date.now());
              }}
              className="btn btn-primary"
            >
              <Home size={20} /> Menu Principal
            </button>
            <button
              onClick={() => {
                setLevelCompleted(false);
                setCurrentExercise(0);
                setScore(0);
                setStreak(0);
                setMistakes([]);
                setComments({});
                setTimeSpent(0);
                setStartTime(Date.now());
              }}
              className="btn btn-secondary"
            >
              <RotateCw size={20} /> Refazer Nível
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela Final (todos os níveis completos)
  if (quizFinished) {
    const totalAllQuestions = levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0);
    const percentage = Math.round((score / totalAllQuestions) * 100);
    let medal = percentage === 100 ? '🏆' : percentage >= 80 ? '🥇' : '🎉';
    
    return (
      <div className={`quiz-finished ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="finished-container">
          <div className="medal-icon">{medal}</div>
          <h1 className="finished-title">Parabéns!</h1>
          <p className="finished-subtitle">Completaste todos os níveis</p>
          
          <div className="score-card">
            <div className="score-row">
              <span>Pontuação Total</span>
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
              <div className="stat-header">
                <Flame size={20} className="icon-orange" />
                <span className="stat-label">Melhor Sequência</span>
              </div>
              <p className="stat-value">{maxStreak}</p>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <Zap size={20} className="icon-yellow" />
                <span className="stat-label">XP Total</span>
              </div>
              <p className="stat-value">{totalXP}</p>
            </div>
          </div>

          {achievements.length > 0 && (
            <div className="achievements-section">
              <h3 className="achievements-title">
                <Trophy size={20} className="icon-yellow" /> Conquistas
              </h3>
              <div className="achievements-grid">
                {achievements.map(ach => (
                  <div key={ach.id} title={ach.desc} className="achievement-item">
                    {ach.icon}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="action-buttons">
            <button
              onClick={downloadReport}
              className="btn btn-success"
            >
              <Download size={20} /> Relatório Diário
            </button>
            <button
              onClick={() => {
                setQuizFinished(false);
                setCurrentLevel(null);
              }}
              className="btn btn-primary"
            >
              <RotateCw size={20} /> Menu Principal
            </button>
            <button
              onClick={resetProgress}
              className="btn btn-danger"
            >
              <AlertCircle size={20} /> Resetar Tudo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Menu Principal
  if (!currentLevel || !currentLevelData || !currentExerciseData) {
    return (
      <div className={`main-menu ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {/* Header */}
        <div className="main-header">
          <div className="header-content">
            <h1 className="app-title">
              <Sparkles size={28} /> QUIZZER
            </h1>
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <div className="main-content">
          {/* Estatísticas do Dia */}
          <div className="daily-stats-card">
            <h3 className="section-title">📊 Estatísticas do Dia</h3>
            <div className="stats-grid-main">
              <div className="stat-card-main">
                <Clock className="icon-blue" size={32} />
                <div>
                  <p className="stat-label-main">Sessões</p>
                  <p className="stat-value-main">{dailyStats.sessions}</p>
                </div>
              </div>
              <div className="stat-card-main">
                <Target className="icon-green" size={32} />
                <div>
                  <p className="stat-label-main">Taxa de Sucesso</p>
                  <p className="stat-value-main">{dailyStats.successRate}%</p>
                </div>
              </div>
              <div className="stat-card-main">
                <Zap className="icon-yellow" size={32} />
                <div>
                  <p className="stat-label-main">XP do Dia</p>
                  <p className="stat-value-main">{dailyStats.totalXP}</p>
                </div>
              </div>
            </div>
            <button
              onClick={downloadReport}
              className="btn btn-success"
              style={{ marginTop: '1rem', width: '50%' }}
            >
              <Download size={20} /> Baixar Relatório Diário
            </button>
          </div>

          {/* Stats Card */}
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
                <p className="stat-value-main">{completedLevels.length}/{levels.length}</p>
              </div>
            </div>
            <div className="stat-card-main">
              <Target className="icon-blue" size={32} />
              <div>
                <p className="stat-label-main">Pontuação Total</p>
                <p className="stat-value-main">{score}</p>
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

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="achievements-main">
              <h2 className="section-title">
                <Trophy className="icon-yellow" /> Conquistas ({achievements.length})
              </h2>
              <div className="achievements-list">
                {achievements.map(ach => (
                  <div key={ach.id} className="achievement-card">
                    <span className="achievement-icon">{ach.icon}</span>
                    <div>
                      <p className="achievement-name">{ach.name}</p>
                      <p className="achievement-desc">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Níveis */}
          <div className="levels-section">
            <h2 className="section-title">Seleciona um Nível</h2>
            <div className="levels-grid">
              {levels.map(level => {
                const isCompleted = completedLevels.includes(level.id);
                return (
                  <button
                    key={level.id}
                    onClick={() => setCurrentLevel(level.id)}
                    className="level-card"
                    style={{ 
                      background: `linear-gradient(135deg, ${level.color} 0%, ${level.color}dd 100%)`
                    }}
                  >
                    <div className="level-icon">
                      {level.icon === 'Brain' ? '🧠' : level.icon === 'Code' ? '💻' : '⚡'}
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

          {/* Botões de Ação */}
          <div className="action-buttons-main">
            <button
              onClick={() => setShowStats(true)}
              className="btn btn-primary"
            >
              <TrendingUp size={20} /> Estatísticas
            </button>
            <button
              onClick={resetProgress}
              className="btn btn-danger"
            >
              <RotateCw size={20} /> Resetar Progresso
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de Exercício
  return (
    <div className={`quiz-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {showTheory && <TheoryModal theory={currentExerciseData.theoryPoints} onClose={() => setShowTheory(false)} />}

      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-header-content">
          <div className="quiz-nav">
            <button
              onClick={() => setCurrentLevel(null)}
              className="btn btn-secondary"
            >
              <ChevronLeft size={20} /> Menu
            </button>
            <h1 className="quiz-title">{currentLevelData.name}</h1>
            <button
              onClick={() => setShowTheory(true)}
              className="btn btn-purple"
            >
              <BookOpen size={20} /> Teoria
            </button>
          </div>

          {/* Progress Bar */}
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

      {/* Stats */}
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
              <Flame size={16} className="icon-orange" /> {streak}
            </p>
          </div>
        </div>

        {/* Questão */}
        <div className="question-card">
          <h2 className="question-text">{currentExerciseData.question}</h2>

          {currentExerciseData.code && (
            <pre className="code-block">
              <code>{currentExerciseData.code.trim()}</code>
            </pre>
          )}

          {/* Opções */}
          <div className="options-list">
            {currentExerciseData.options.map((option, idx) => {
              let optionClass = 'option-btn';
              let icon = null;

              if (showSolution) {
                if (idx === currentExerciseData.correct) {
                  optionClass += ' option-correct';
                  icon = <CheckCircle size={24} className="icon-success" />;
                } else if (idx === selectedAnswer) {
                  optionClass += ' option-incorrect';
                  icon = <XCircle size={24} className="icon-error" />;
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

        {/* Comentários */}
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

        {/* Solução */}
        {showSolution && (
          <div className={`solution-card ${isCorrect ? 'solution-correct' : 'solution-incorrect'}`}>
            <h3 className={`solution-title ${isCorrect ? 'text-success' : 'text-error'}`}>
              {isCorrect ? (
                <>
                  <CheckCircle size={28} /> Correto! 🎉
                </>
              ) : (
                <>
                  <XCircle size={28} /> Incorreto 😅
                </>
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

            <button
              onClick={nextExercise}
              className="btn btn-next"
            >
              Próxima Questão <ArrowRight size={22} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizzerIsep;