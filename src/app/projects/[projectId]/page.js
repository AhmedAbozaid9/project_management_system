import React from "react";

const page = ({ params }) => {
  const projectId = params.projectId;

  return <div>{projectId}</div>;
};

export default page;
