"use client";
import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import React, { createContext } from "react";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const callback = () => {
    console.log("manta 7elw aho");
  };

  const stopwatch = useStopwatch(callback);
  const timer = useTimer(callback);

  return (
    <TimerContext.Provider value={{ timer, stopwatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
