"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

import Button from "./Button";

const Header = () => {
  const openPortfolio = () => {
    window.open("https://simple-portfolio-six-psi.vercel.app/", "_blank");
  };

  const addProject = () => {
    console.log("aaa");
  };

  return (
    <header className="flex gap-3 w-full items-center">
      <Button title={"Add new project"} action={addProject} />
      <Button
        title={"Visit portfolio"}
        isPrimary={false}
        action={openPortfolio}
      />
      <FaUserCircle size={26} className="ml-auto" />
    </header>
  );
};

export default Header;
