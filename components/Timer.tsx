"use client";

import { useState, useEffect } from "react";
import { usePomoTimer } from "@/hooks/usePomoTimer";
import { formatTime } from "@/utils/formatTime";

export function Timer() {
  const {
    mode,
    timeLeft,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
    changeMode,
  } = usePomoTimer();
  const [error, setError] = useState<string | null>(null);

  const handleModeChange = (
    newMode: "pomodoro" | "shortBreak" | "longBreak"
  ) => {
    try {
      changeMode(newMode);
      setError(null);
    } catch (err) {
      setError(`Failed to change mode to ${newMode}. Please try again.`);
    }
  };

  const handleTimerAction = (action: () => void, actionName: string) => {
    try {
      action();
      setError(null);
    } catch (err) {
      setError(`Failed to ${actionName} timer. Please try again.`);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="font-mono">
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4">
        {formatTime(timeLeft)}
      </div>
      <div className="flex justify-between items-center mb-8">
        {["pomodoro", "shortBreak", "longBreak"].map((timerMode) => (
          <button
            key={timerMode}
            onClick={() => handleModeChange(timerMode as any)}
            className={`text-lg sm:text-xl md:text-2xl ${
              mode === timerMode ? "underline" : ""
            }`}
          >
            {timerMode === "pomodoro"
              ? "Work"
              : timerMode === "shortBreak"
              ? "Short"
              : "Long"}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() =>
            handleTimerAction(
              isActive ? pauseTimer : startTimer,
              isActive ? "pause" : "start"
            )
          }
          className="text-lg sm:text-xl md:text-2xl border-b-2 border-current pb-1"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => handleTimerAction(resetTimer, "reset")}
          className="text-lg sm:text-xl md:text-2xl border-b-2 border-current pb-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
