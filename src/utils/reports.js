import { formatTime } from './formatters';

export const cleanupOldReports = () => {
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

export const getDailyStats = () => {
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

export const generateMarkdownReport = (sessionData) => {
  const {
    sessionStartTime,
    timeSpent,
    currentLevelData,
    score,
    maxStreak,
    mistakes,
    totalPossibleScore
  } = sessionData;

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