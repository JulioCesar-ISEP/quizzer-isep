export const formatTime = (totalSeconds) => {
  // Garantir que totalSeconds seja um número válido
  const seconds = typeof totalSeconds === 'number' && !isNaN(totalSeconds) && totalSeconds >= 0 
    ? totalSeconds 
    : 0;
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const calculatePercentage = (score, total) => {
  if (!total || total === 0) return 0;
  return Math.round((score / total) * 100);
};