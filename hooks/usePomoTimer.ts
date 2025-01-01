import { useState, useEffect, useCallback } from "react";

type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

const TIMER_DURATIONS = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export function usePomoTimer() {
  const [mode, setMode] = useState<TimerMode>("pomodoro");
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATIONS[mode]);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => setIsActive(true), []);
  const pauseTimer = useCallback(() => setIsActive(false), []);
  const resetTimer = useCallback(() => {
    setIsActive(false);
    setTimeLeft(TIMER_DURATIONS[mode]);
  }, [mode]);

  const changeMode = useCallback((newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(TIMER_DURATIONS[newMode]);
    setIsActive(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return {
    mode,
    timeLeft,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
    changeMode,
  };
}
