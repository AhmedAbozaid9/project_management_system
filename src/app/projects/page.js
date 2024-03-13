"use client";
import axios from "axios";

import ProjectsTable from "@/components/Tables/ProjectsTable";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    })();
  }, [setProjects]);
  console.log(projects);
  
  return (
    <div className="w-full">
      {projects && <ProjectsTable projects={projects} />}
    </div>
  );
};

export default Page;
