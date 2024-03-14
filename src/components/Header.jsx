"use client";

import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Avatar, Button, Chip } from "@nextui-org/react";

import Modal from "./addProject/Modal";
import MobileNavigation from "./Navigation/MobileNavigation";
import { useSession } from "next-auth/react";
import { TimerContext } from "@/contexts/TimerContext";

const Header = () => {
  const { data: session } = useSession();
  const { timer, stopwatch } = useContext(TimerContext);

  const openPortfolio = () => {
    window.open("https://simple-portfolio-six-psi.vercel.app/", "_blank");
  };

  return (
    <header className="flex gap-3 w-full items-center justify-stretch">
      <MobileNavigation />
      <Modal />

      <>
        <Button
          variant="bordered"
          onPress={openPortfolio}
          radius="sm"
          size="sm"
          className="sm:hidden"
        >
          <FaExternalLinkAlt className="sm:hidden" />
          <span className="max-sm:hidden">Visit Portfolio</span>
        </Button>

        <Button
          variant="bordered"
          onPress={openPortfolio}
          radius="sm"
          size="md"
          className="max-sm:hidden"
        >
          <FaExternalLinkAlt className="sm:hidden" />
          <span className="max-sm:hidden">Visit Portfolio</span>
        </Button>
      </>

      <div className="ml-auto flex gap-3 items-center">
        {!stopwatch.isExpired && <Chip color="success">{stopwatch.time}</Chip>}
        {!timer.isExpired && <Chip color="success">{timer.time}</Chip>}
        <Avatar size="sm" name={session?.user.name} src={session?.user.image} />
      </div>
    </header>
  );
};

export default Header;
