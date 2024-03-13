"use client";
import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import React, { createContext, useEffect, useState } from "react";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const [initialTime, setInitialTime] = useState(1);
  const [callback, setCallback] = useState();

  const stopwatch = useStopwatch(callback);
  const timer = useTimer(initialTime, callback);

  if (!timer.isExpired) {
    stopwatch.end();
  }
  if (!stopwatch.isExpired) {
    timer.end();
  }

  return (
    <TimerContext.Provider value={{ timer, stopwatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
