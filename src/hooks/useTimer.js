import { useState, useEffect } from 'react';

export const useTimer = (isActive = true) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, isActive]);

  const resetTimer = () => {
    setTimeSpent(0);
    setStartTime(Date.now());
  };

  return { timeSpent, resetTimer, setStartTime };
};