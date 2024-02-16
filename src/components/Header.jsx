import React from "react";
import { FaUserCircle } from "react-icons/fa";

import Button from "./Button";

const Header = () => {
  return (
    <header className="flex gap-5 w-full p-6">
      <Button title={"Add new project"} />
      <Button title={"Visit portfolio"} isPrimary={false} />
      <FaUserCircle size={26} className="ml-auto" />
    </header>
  );
};

export default Header;
