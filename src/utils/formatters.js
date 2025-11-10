export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const calculatePercentage = (score, total) => {
  return total > 0 ? Math.round((score / total) * 100) : 0;
};