"use client";

import ProjectsTable from "@/components/Tables/ProjectsTable";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import React, { useContext } from "react";

const Page = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className="w-full">
      {projects && <ProjectsTable projects={projects} />}
    </div>
  );
};

export default Page;
