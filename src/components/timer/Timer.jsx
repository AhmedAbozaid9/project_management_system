import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { useTimer } from "@/hooks/useTimer";

const Timer = () => {
  const [inputTime, setInputTime] = useState(1);

  const { time, isRunning, isPaused, isExpired, start, pause, end } = useTimer(
    inputTime * 60,
    () => console.log("it is done")
  );

  const handleInputChange = (value) => {
    if (value > 180) setInputTime(180);
    else if (value < 1) setInputTime(1);
    else setInputTime(value);
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-6xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-white flex items-center justify-center flex-col">
        {isExpired ? (
          <>
            <input
              value={inputTime}
              onChange={(e) => handleInputChange(e.target.value)}
              type="number"
              className="bg-transparent text-center w-1/2 outline-none"
              min="1"
              max="180"
            />
            <span className="text-lg font-medium text-gray-300">Minutes</span>
          </>
        ) : (
          <div>
            {Math.floor(time / 60)}:{time % 60}
          </div>
        )}
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          className="bg-primary-purple font-medium my-6 w-32"
          onPress={isRunning ? pause : start}
        >
          {isExpired ? "Start" : isPaused ? "Resume" : "Pause"}
        </Button>
        {!isExpired && (
          <Button
            variant="bordered"
            className="font-medium my-6 w-32"
            onPress={end}
          >
            End
          </Button>
        )}
      </div>
    </div>
  );
};

export default Timer;