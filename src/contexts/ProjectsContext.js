"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState();

  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("/api/projects");
      return data;
    },
  });
  return (
    <ProjectsContext.Provider
      value={{ currentProject, setCurrentProject, projects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsContextProvider };
