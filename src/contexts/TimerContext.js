"use client";
import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import React, { createContext } from "react";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const stopwatch = useStopwatch();
  const timer = useTimer();

  return (
    <TimerContext.Provider value={{ timer, stopwatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
