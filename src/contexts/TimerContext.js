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
  console.log(session);
  const { currentProject } = useContext(ProjectsContext);
  const callback = async (time, type) => {
    if (!session) {
      return;
    }

    if (currentProject) {
      if (time < 60) {
        toast.error("Cannot save the session if it's less than a minute");
      } else {
        await axios.post("/api/sessions/new", {
          time,
          type,
          project: [...currentProject][0],
          date: new Date(),
          user: session.user._id,
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
