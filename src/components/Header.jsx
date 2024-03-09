"use client";

import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Avatar, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import Modal from "./addProject/Modal";
import MobileNavigation from "./Navigation/MobileNavigation";
import { TimerContext } from "@/contexts/timerContext";

const Header = () => {
  const { data: session } = useSession();
  const { timer } = useContext(TimerContext);
  console.log(timer);

  const openPortfolio = () => {
    window.open("https://simple-portfolio-six-psi.vercel.app/", "_blank");
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
