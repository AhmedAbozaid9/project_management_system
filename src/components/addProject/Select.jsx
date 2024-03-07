import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const MySelect = ({ label, placeholder, value, setValue }) => {
  const types = ["Small project", "Website"];
  return (
    <div className="flex w-full flex-col gap-2">
      <Select
        variant="bordered"
        label={label}
        placeholder={placeholder}
        selectedKeys={value}
        onSelectionChange={setValue}
      >
        {types.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default MySelect;
