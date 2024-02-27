import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@nextui-org/react";

const Timer = ({ expiryTimestamp }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="w-72 h-72 rounded-full border-2 border-white flex items-center justify-center text-5xl font-medium">
        {minutes} : {seconds}
      </div>
      <Button
        className="bg-primary-purple font-medium max-w-28 my-6  "
        onPress={isRunning ? pause : start}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>
    </div>
  );
};

export default Timer;
