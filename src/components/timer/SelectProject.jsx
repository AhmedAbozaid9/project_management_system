import React, { useContext } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { ProjectsContext } from "@/contexts/ProjectsContext";

const SelectProject = () => {
  const { projects } = useContext(ProjectsContext);
  

  return (
    <Select
      size="sm"
      label="Select a project"
      className="max-w-52 py-0"
      classNames={{
        trigger: "bg-transparent data-hover:bg-transparent",
      }}
    >
      {projects.map((project) => (
        <SelectItem key={project._id} value={project.title}>
          {project.title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectProject;
