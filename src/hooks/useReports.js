import { useState, useCallback } from 'react';
import { generateMarkdownReport, cleanupOldReports, getDailyStats } from '../utils/reports';

export const useReports = () => {
  const [dailyStats, setDailyStats] = useState(getDailyStats());

  const updateDailyStats = useCallback(() => {
    setDailyStats(getDailyStats());
  }, []);

  const downloadReport = useCallback((sessionData) => {
    const markdown = generateMarkdownReport(sessionData);
    const element = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);
    const reportKey = `quizzReport_${today}`;
    
    localStorage.setItem(reportKey, markdown);
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(markdown));
    element.setAttribute('download', `relatorio_diario_${today}.md`);
    element.click();
    
    updateDailyStats();
  }, [updateDailyStats]);

  const initializeReports = useCallback(() => {
    cleanupOldReports();
    updateDailyStats();
  }, [updateDailyStats]);

  return {
    dailyStats,
    downloadReport,
    initializeReports,
    updateDailyStats
  };
};