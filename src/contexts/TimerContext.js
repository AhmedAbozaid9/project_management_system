"use client";
import React, { createContext, useContext } from "react";

import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import axios from "axios";
import { ProjectsContext } from "./ProjectsContext";
import toast from "react-hot-toast";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const { currentProject } = useContext(ProjectsContext);
  const callback = async (time, type) => {
    if (currentProject) {
      await axios.post("/api/sessions/new", {
        time,
        type,
        project: [...currentProject][0],
        date: new Date(),
      });
    } else {
      toast.error("session cannot be saved without selecting a project");
    }
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
