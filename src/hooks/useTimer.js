import { useEffect, useState } from "react";

// the hook expects the initialTime to be in seconds

//the callback is expected to run when the timer ends

export const useTimer = (initialTime, callback) => {
  const [time, setTime] = useState(initialTime || 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRunning) setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0) {
      setTime(initialTime);
      setIsRunning(false);
      setIsExpired(true);
      callback();
    }

    return () => clearInterval(timerInterval);
  }, [time, initialTime, isRunning, callback]);

  return {
    time,
    isRunning,
    isPaused,
    isExpired,
    start: () => {
      setIsExpired(false);
      setIsPaused(false);
      setIsRunning(true);
    },
    pause: () => {
      setIsPaused(true);
      setIsRunning(false);
    },
    end: () => {
      setIsRunning(false);
      setIsExpired(true);
      setTime(initialTime);
    },
  };
};
