import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectProject = () => {
  const projects = [
    { key: 1, title: "project 1 project management system that is big" },
    { key: 2, title: "project 2" },
  ];

  return (
    <Select
      size="sm"
      label="Select a project"
      className="max-w-44 py-0"
      classNames={{
        trigger: "bg-transparent data-hover:bg-transparent",
      }}
    >
      {projects.map((project) => (
        <SelectItem key={project.key} value={project.title}>
          {project.title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectProject;
