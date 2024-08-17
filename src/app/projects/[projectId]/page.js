import React from "react";
import MainSingleProject from "@/components/SingleProject/MainSingleProject";

const Project = ({ params }) => {
  const projectId = params.projectId;


  return (
    <div className="flex flex-col w-full">
      <MainSingleProject projectId={projectId}/>
    </div>
  );
};

export default Project;
