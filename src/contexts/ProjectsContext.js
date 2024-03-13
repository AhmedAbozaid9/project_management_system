"use client";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    })();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsContextProvider };
