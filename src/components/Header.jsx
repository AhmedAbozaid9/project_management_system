"use client";

import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Avatar, Button, Chip } from "@nextui-org/react";

import Modal from "./addProject/Modal";
import MobileNavigation from "./Navigation/MobileNavigation";
import { useSession } from "next-auth/react";
import { TimerContext } from "@/contexts/TimerContext";
import { secondsToDisplay } from "@/utils";

const Header = () => {
  const { data: session } = useSession();
  const { timer, stopwatch } = useContext(TimerContext);

  let minutes, seconds, isTimer;

  if (!timer.isExpired) {
    minutes = secondsToDisplay(timer.time).minutes;
    seconds = secondsToDisplay(timer.time).seconds;
    isTimer = true;
  }

  if (!stopwatch.isExpired) {
    minutes = secondsToDisplay(stopwatch.time).minutes;
    seconds = secondsToDisplay(stopwatch.time).seconds;
    isTimer = true;
  }

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
        {isTimer && (
          <Chip color="success" size="sm">
            {minutes}:{seconds}
          </Chip>
        )}
        <Avatar size="sm" name={session?.user.name} src={session?.user.image} />
      </div>
    </header>
  );
};

export default Header;
