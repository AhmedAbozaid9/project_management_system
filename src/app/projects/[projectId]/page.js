"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Project = ({ params }) => {
  const projectId = params.projectId;
  const [project, setProject] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      setProject(data);
    })();
  }, [projectId]);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-left flex-1">{project.title}</h1>
    </div>
  );
};

export default Project;
