"use client";
import React, { createContext, useContext } from "react";

import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import axios from "axios";
import { ProjectsContext } from "./ProjectsContext";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  
  const { data: session } = useSession();
  const { currentProject } = useContext(ProjectsContext);

  const callback = async (time, type) => {
    if (!session || !currentProject || time < 60) {
      console.log(session, currentProject, time);
      return;
    }

    await axios.post("/api/sessions/new", {
      time,
      type,
      project: [...currentProject][0],
      date: new Date(),
      user: session.user.id,
    });
    toast.success("The session has been saved successfully");
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
