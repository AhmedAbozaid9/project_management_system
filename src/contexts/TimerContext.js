"use client";
import React, { createContext } from "react";

import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const callback = () => {
    console.log("this should work once");
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
