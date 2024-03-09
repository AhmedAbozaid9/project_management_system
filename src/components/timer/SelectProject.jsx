import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectProject = () => {
  const projects = [
    { key: 1, title: "project 1" },
    { key: 2, title: "project 2" },
  ];


  return (
    <Select size="sm" variant="underlined" label="Select a project">
      {projects.map((project) => (
        <SelectItem key={project.key} value={project.title}>
          {project.title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectProject;
