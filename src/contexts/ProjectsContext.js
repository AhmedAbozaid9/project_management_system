import React, { createContext, useState } from "react";

const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(null);
  return (
    <ProjectsContextProvider value={{ projects, setProjects }}>
      {children}
    </ProjectsContextProvider>
  );
};

export default ProjectsContext;
