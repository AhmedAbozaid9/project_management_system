import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@nextui-org/react";

const Timer = ({ timerStamp, setTimerStamp }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: new Date(Date.now() + 1000 * 60 * timerStamp),
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  const handleTimerOnChange = (e) => {
    if (e.target.value > 180) setTimerStamp(180);
    else if (e.target.value < 1) setTimerStamp(1);
    else setTimerStamp(e.target.value);
  };

  console.log(totalSeconds);
  console.log(isRunning);
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="w-72 h-72 gap-2 p-3 rounded-full border-2 border-white flex items-center justify-center flex-col text-5xl font-medium">
        <input
          value={timerStamp}
          onChange={handleTimerOnChange}
          type="number"
          className="bg-transparent text-center w-1/2"
          min="1"
          max="180"
        />
        <span className="text-lg font-medium">Mins</span>
      </div>
      <Button
        className="bg-primary-purple font-medium w-48 my-6  "
        onPress={isRunning ? pause : start}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>
    </div>
  );
};

export default Timer;
