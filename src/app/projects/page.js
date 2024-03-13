"use client";
import axios from "axios";

import ProjectsTable from "@/components/Tables/ProjectsTable";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  useEffect(() => {
    !projects &&
      (async () => {
        const { data } = await axios.get("/api/projects");
        setProjects(data);
      })();
  }, [projects, setProjects]);

  return (
    <div className="w-full">
      {projects && <ProjectsTable projects={projects} />}
    </div>
  );
};

export default Page;
