import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { projectsTech } from "@/constants";

const MySelect = () => {
  const [values, setValues] = React.useState(new Set([]));

  return (
    <div className="flex w-full flex-col gap-2">
      <Select
        variant="bordered"
        label="Project Tech"
        selectionMode="multiple"
        placeholder="Select a tech"
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
