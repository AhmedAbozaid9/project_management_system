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
      if (time < 60) {
        toast.error("Cannot save the session if it's less than a minute");
      } else {
        await axios.post("/api/sessions/new", {
          time,
          type,
          project: [...currentProject][0],
          date: new Date(),
        });
        toast.success("The session has been saved successfully");
      }
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
