"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Checkbox, Chip } from "@nextui-org/react";

const Header = () => {
  const openPortfolio = () => {
    window.open("https://simple-portfolio-six-psi.vercel.app/", "_blank");
  };

  const addProject = () => {
    console.log("aaa");
  };

  return (
    <header className="flex gap-3 w-full items-center">
      <Button >Hello world</Button>

      <FaUserCircle size={26} className="ml-auto" />
    </header>
  );
};

export default Header;
