import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@nextui-org/react";

const Timer = ({ timerStamp, setTimerStamp }) => {
  const [isOver, setIsOver] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: new Date(Date.now() + 1000 * 60 * timerStamp),
      autoStart: false,
      onExpire: () => endTimer(),
    });

  const handleTimerOnChange = (e) => {
    if (e.target.value > 180) setTimerStamp(180);
    else if (e.target.value < 1) setTimerStamp(1);
    else setTimerStamp(e.target.value);
  };

  const startTimer = () => {
    setIsOver(false);
    if (isPaused) {
      setIsPaused(false);
      resume();
    } else {
      start();
    }
    console.log(timerStamp);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    pause();
  };

  const endTimer = () => {
    setIsOver(true);
    restart();
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-5xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-white flex items-center justify-center flex-col font-medium">
        {isOver ? (
          <>
            <input
              value={timerStamp}
              onChange={handleTimerOnChange}
              type="number"
              className="bg-transparent text-center w-1/2"
              min="1"
              max="180"
            />
            <span className="text-lg font-medium text-gray-300">Minutes</span>
          </>
        ) : (
          <p>
            {minutes}:{seconds}
          </p>
        )}
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          className="bg-primary-purple font-medium my-6 w-32"
          onPress={isRunning ? pauseTimer : startTimer}
        >
          {isRunning ? "Pause" : isPaused ? "Resume" : "Start"}
        </Button>
        {isRunning && (
          <Button
            variant="bordered"
            className="font-medium my-6 w-32"
            onPress={restart}
          >
            End
          </Button>
        )}
      </div>
    </div>
  );
};

export default Timer;
