"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Avatar, Button } from "@nextui-org/react";

import Modal from "./addProject/Modal";
import MobileNavigation from "./Navigation/MobileNavigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

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
        className="sm:hidden"
      >
        <FaExternalLinkAlt className="sm:hidden " onClick={openPortfolio} />
      </Button>
      <Avatar
        size="sm"
        className="ml-auto"
        name={session?.user.name}
        src={session?.user.image}
      />
    </header>
  );
};

export default Header;
