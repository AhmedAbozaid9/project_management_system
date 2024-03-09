"use client";
import axios from "axios";

import ProjectsTable from "@/components/Tables/SummaryProjectsTable";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  console.log(projects);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    })();
  }, [setProjects]);

  return (
    <div className="w-full">
      <ProjectsTable />
    </div>
  );
};

export default Page;
