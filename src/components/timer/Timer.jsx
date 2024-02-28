import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@nextui-org/react";

const Timer = ({ expiryTimestamp }) => {
  const [chosenTime, setChosenTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  console.log(chosenTime);
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

  const changeTime = (unit) => {
    const name = unit.name;
    setChosenTime((prev) => ({ ...prev, [name]: unit.value }));
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="w-72 h-72 rounded-full border-2 border-white flex items-center justify-center text-5xl font-medium">
        <input
          value={chosenTime.hours}
          onChange={(e) => changeTime(e.target)}
          type="number"
          name="hours"
          className="bg-transparent flex-1"
          min="0"
        />
        <input
          value={chosenTime.minutes}
          onChange={(e) => changeTime(e.target)}
          type="number"
          name="minutes"
          className="bg-transparent flex-1"
          min="0"
        />
        <span>:</span>
        <input
          value={chosenTime.seconds}
          onChange={(e) => changeTime(e.target)}
          type="number"
          name="seconds"
          className="flex-1"
          min="0"
        />
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
