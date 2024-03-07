import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { projectsTech } from "@/constants";

const MySelect = ({ label, placeholder, values, setValues }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Select
        variant="bordered"
        label={label}
        selectionMode="multiple"
        placeholder={placeholder}
        selectedKeys={values}
        onSelectionChange={setValues}
      >
        {projectsTech.map((project) => (
          <SelectItem key={project} value={project}>
            {project}
          </SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">
        Selected: {Array.from(values).join(", ")}
      </p>
    </div>
  );
};

export default MySelect;
