"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@nextui-org/react";

import Modal from "./Modal";
import MobileNavigation from "./Navigation/MobileNavigation";

const Header = () => {
  const openPortfolio = () => {
    window.open("https://simple-portfolio-six-psi.vercel.app/", "_blank");
  };

  const addProject = () => {
    console.log("aaa");
  };

  return (
    <header className="flex gap-3 w-full items-center justify-stretch">
      <MobileNavigation />
      <Modal />

      <Button
        variant="bordered"
        onPress={openPortfolio}
        radius="sm"
        className="max-sm:hidden"
      >
        Visit Portfolio
      </Button>
      <Button
        variant="bordered"
        onPress={openPortfolio}
        radius="sm"
        className="sm:hidden ml-auto"
      >
        <FaExternalLinkAlt className="sm:hidden " onClick={openPortfolio} />
      </Button>
      <FaUserCircle size={28} className="ml-auto max-sm:hidden" />
    </header>
  );
};

export default Header;
