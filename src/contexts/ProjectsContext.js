"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./authContext";

const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [currentProject, setCurrentProject] = useState();

  const { data: projects, refetch } = useQuery({
    enabled: !!user,
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("/api/projects", {
        params: {
          userId: user?.id,
        },
      });
      return data;
    },
  });
  return (
    <ProjectsContext.Provider
      value={{ currentProject, setCurrentProject, projects, refetch }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsContextProvider };
