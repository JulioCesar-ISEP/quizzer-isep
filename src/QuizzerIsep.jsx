import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, Trophy, Brain, Code, Zap, Target, FileText,
  Clock, BookOpen, ArrowRight, RotateCw, Settings, ChevronLeft,
  MessageSquare, Download, Lightbulb, Flame, Star, Award, Sparkles,
  Menu, X, Home, TrendingUp, AlertCircle, Grid3x3, Moon, Sun
} from 'lucide-react';

// Estrutura de dados corrigida conforme especificado
const cadeiras = [
  {
    id: 1,
    name: "Programação",
    description: "Fundamentos de programação e algoritmos",
    icon: "💻",
    color: "#3b82f6",
    xp: 100,
    theory: {
      title: "Introdução à Programação",
      content: "Programação é o processo de criar um conjunto de instruções que dizem ao computador como executar uma tarefa."
    },
    exercises: [
      {
        id: 1,
        question: "O que é uma variável em programação?",
        code: "let x = 10;",
        options: [
          "Um local de armazenamento nomeado",
          "Um tipo de loop",
          "Uma função matemática",
          "Um erro de sintaxe"
        ],
        correct: 0,
        explanation: "Uma variável é um local de armazenamento nomeado que contém um valor que pode ser modificado durante a execução do programa.",
        theoryPoints: {
          title: "Variáveis em Programação",
          content: "Variáveis são fundamentais para armazenar e manipular dados.",
          keyPoints: [
            "Armazenam valores temporários",
            "Têm nome e tipo",
            "Podem ser modificadas",
            "Existem em diferentes escopos"
          ],
          examples: "let nome = 'João'; const idade = 25;"
        },
        hints: [
          "Pense em como armazenamos dados",
          "Lembre-se que valores podem mudar"
        ]
      },
      {
        id: 2,
        question: "Qual é a função de um loop 'for'?",
        code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
        options: [
          "Repetir um bloco de código um número específico de vezes",
          "Declarar variáveis",
          "Definir funções",
          "Criar objetos"
        ],
        correct: 0,
        explanation: "O loop 'for' é usado para repetir um bloco de código um número específico de vezes, controlando a iteração com uma variável de contador.",
        theoryPoints: {
          title: "Loops em Programação",
          content: "Loops permitem executar o mesmo código múltiplas vezes.",
          keyPoints: [
            "For - número conhecido de iterações",
            "While - condição de parada",
            "Do-while - executa pelo menos uma vez",
            "Evitam código repetitivo"
          ],
          examples: "for (let i = 0; i < 10; i++) { /* código */ }"
        },
        hints: [
          "Pense em repetição controlada",
          "Observe a estrutura de inicialização, condição e incremento"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Algoritmos",
    description: "Estruturas de dados e complexidade",
    icon: "🧠",
    color: "#10b981",
    xp: 150,
    theory: {
      title: "Introdução a Algoritmos",
      content: "Um algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema."
    },
    exercises: [
      {
        id: 1,
        question: "O que é complexidade de tempo?",
        options: [
          "A quantidade de tempo que um algoritmo leva para executar",
          "O número de variáveis usadas",
          "O tamanho do código fonte",
          "A dificuldade de entender o algoritmo"
        ],
        correct: 0,
        explanation: "Complexidade de tempo refere-se à quantidade de tempo que um algoritmo leva para executar em relação ao tamanho da entrada.",
        theoryPoints: {
          title: "Complexidade de Algoritmos",
          content: "A complexidade ajuda a comparar a eficiência de diferentes algoritmos.",
          keyPoints: [
            "Notação Big O descreve o pior caso",
            "O(1) - tempo constante",
            "O(n) - tempo linear",
            "O(n²) - tempo quadrático"
          ],
          examples: "Busca linear: O(n), Busca binária: O(log n)"
        },
        hints: [
          "Pense em como o tempo cresce com o tamanho da entrada",
          "Considere o pior cenário possível"
        ]
      }
    ]
  }
];

const QuizzerIsep = () => {
  const [currentView, setCurrentView] = useState('cadeiras');
  const [selectedCadeira, setSelectedCadeira] = useState(null);

  // Estado do quiz
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completedCadeiras, setCompletedCadeiras] = useState([]);
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
  const [cadeiraCompleted, setCadeiraCompleted] = useState(false);

  // Persistência do tema
  useEffect(() => {
    localStorage.setItem('quizzer-theme', JSON.stringify(isDark));
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!cadeiraCompleted && currentView === 'quiz') {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, cadeiraCompleted, currentView]);

  // Funções auxiliares
  const getCurrentCadeiraData = () => cadeiras.find(c => c.id === selectedCadeira);
  const getCurrentExerciseData = () => getCurrentCadeiraData()?.exercises[currentExercise];

  // Funções de Relatório (restauradas)
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

  const generateMarkdownReport = () => {
    const currentCadeiraData = getCurrentCadeiraData();
    const totalPossibleScore = currentCadeiraData?.exercises.length || 0;
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
    markdown += `**Cadeira**: ${currentCadeiraData?.name || 'N/A'}\n`;
    markdown += `**Pontuação**: ${score}/${totalPossibleScore} (${percentage}%)\n`;
    markdown += `**XP Ganho**: ${currentCadeiraData?.xp || 0}\n`;
    markdown += `**Maior Sequência**: ${maxStreak}\n\n`;

    if (mistakes.length > 0) {
      markdown += `### ❌ Questões com Erros\n\n`;
      mistakes.forEach((mistake, idx) => {
        markdown += `#### Erro ${idx + 1}: ${mistake.question}\n`;
        markdown += `**Cadeira**: ${mistake.cadeiraName}\n`;
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

  const startCadeira = (cadeiraId) => {
    setSelectedCadeira(cadeiraId);
    setCurrentView('quiz');
    setStartTime(Date.now());
    resetQuizState();
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
    setCadeiraCompleted(false);
    setTimeSpent(0);
  };

  const handleAnswer = (selectedIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedIndex);
    setShowSolution(true);

    const currentCadeiraData = getCurrentCadeiraData();
    const currentExerciseData = getCurrentExerciseData();

    if (selectedIndex === currentExerciseData.correct) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setMaxStreak(Math.max(maxStreak, newStreak));
      setTotalXP(prev => prev + currentCadeiraData.xp);
    } else {
      setStreak(0);
      const commentKey = `${selectedCadeira}-${currentExercise}`;

      setMistakes(prev => [...prev, {
        cadeiraId: selectedCadeira,
        cadeiraName: currentCadeiraData.name,
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
    const currentCadeiraData = getCurrentCadeiraData();
    const totalExercises = currentCadeiraData?.exercises.length || 0;

    setSelectedAnswer(null);
    setShowSolution(false);
    setCurrentComment('');

    if (currentExercise < totalExercises - 1) {
      setCurrentExercise(prev => prev + 1);
    } else {
      if (!completedCadeiras.includes(selectedCadeira)) {
        setCompletedCadeiras(prev => [...prev, selectedCadeira]);
      }
      setCadeiraCompleted(true);
    }
  };

  const saveComment = (text) => {
    setCurrentComment(text);
    const key = `${selectedCadeira}-${currentExercise}`;
    setComments(prev => ({ ...prev, [key]: text }));
  };

  const resetProgress = () => {
    if (window.confirm('⚠️ Tem a certeza? Vai perder todo o progresso!')) {
      resetQuizState();
      setCompletedCadeiras([]);
      setTotalXP(0);
      setSelectedCadeira(null);
      setCurrentView('cadeiras');
      setStartTime(Date.now());
    }
  };

  // Modal de Theory melhorado
  const TheoryModal = ({ theory, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content theory-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <Lightbulb size={28} className="theory-icon" />
            <h2 className="modal-title">{theory.title}</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
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
                <span className="stat-number">{completedCadeiras.length}</span>
                <span className="stat-label">Cadeiras Completas</span>
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
                const isCompleted = completedCadeiras.includes(cadeira.id);
                return (
                  <div
                    key={cadeira.id}
                    className={`cadeira-card ${isCompleted ? 'completed' : ''}`}
                    onClick={() => startCadeira(cadeira.id)}
                  >
                    <div className="cadeira-header">
                      <div className="cadeira-icon">{cadeira.icon}</div>
                      {isCompleted && (
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
                          {cadeira.exercises.length} exercícios
                        </span>
                        <span className="meta-item">
                          <Zap size={16} />
                          +{cadeira.xp} XP
                        </span>
                      </div>
                    </div>
                    <div className="cadeira-footer">
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
    const currentCadeiraData = getCurrentCadeiraData();
    const currentExerciseData = getCurrentExerciseData();
    const totalExercises = currentCadeiraData?.exercises.length || 0;
    const isCorrect = selectedAnswer === currentExerciseData?.correct;
    const commentKey = `${selectedCadeira}-${currentExercise}`;
    const hasComment = comments[commentKey];

    // Tela de Conclusão da Cadeira
    if (cadeiraCompleted) {
      const percentage = Math.round((score / totalExercises) * 100);
      let medal = '🎯';
      if (percentage === 100) medal = '🏆';
      else if (percentage >= 80) medal = '🥇';
      else if (percentage >= 60) medal = '🥈';

      return (
        <div className={`completion-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <div className="completion-container">
            <div className="completion-header">
              <div className="medal-display">{medal}</div>
              <h1 className="completion-title">Cadeira Concluída!</h1>
              <p className="completion-subtitle">{currentCadeiraData.name}</p>
            </div>

            <div className="score-summary">
              <div className="score-card">
                <div className="score-header">
                  <Trophy className="score-icon" />
                  <span>Pontuação Final</span>
                </div>
                <div className="score-value">
                  {score}<span>/{totalExercises}</span>
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
                  <span className="stat-mini-value">+{currentCadeiraData.xp}</span>
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
                  setCadeiraCompleted(false);
                  setCurrentView('cadeiras');
                }}
                className="btn btn-primary"
              >
                <Home size={20} />
                Menu Principal
              </button>
              <button
                onClick={resetQuizState}
                className="btn btn-secondary"
              >
                <RotateCw size={20} />
                Refazer Cadeira
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

    // Tela de Quiz
    return (
      <div className={`quiz-screen ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {showTheory && (
          <TheoryModal
            theory={currentCadeiraData.theory}
            onClose={() => setShowTheory(false)}
          />
        )}

        {/* Header do Quiz */}
        <div className="quiz-header">
          <div className="quiz-header-content">
            <button
              onClick={() => setCurrentView('cadeiras')}
              className="back-btn"
            >
              <ChevronLeft size={20} />
              Voltar
            </button>

            <div className="quiz-info">
              <h1 className="quiz-title">{currentCadeiraData.name}</h1>
              <div className="quiz-meta">
                <span>Exercício {currentExercise + 1} de {totalExercises}</span>
              </div>
            </div>

            <button
              onClick={() => setShowTheory(true)}
              className="theory-btn"
            >
              <BookOpen size={20} />
              Teoria
            </button>
          </div>

          <div className="progress-section">
            <div className="progress-labels">
              <span>Progresso</span>
              <span>{currentExercise + 1}/{totalExercises}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentExercise + 1) / totalExercises) * 100}%` }}
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
                  {currentExercise < totalExercises - 1 ? (
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