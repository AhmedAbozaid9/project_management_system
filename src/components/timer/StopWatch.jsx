import React, { useContext } from "react";
import { Button } from "@nextui-org/react";

import { TimerContext } from "@/contexts/TimerContext";

const StopWatch = () => {
  const { stopwatch } = useContext(TimerContext);
  const { time, isPaused, isExpired, start, pause, resume, end } = stopwatch(
    () => console.log("fuck yeah")
  );
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-6xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-[#2F2E35] flex items-center justify-center flex-col">
        <div>
          {Math.floor(time / 60) ? Math.floor(time / 60) : "00"}:
          {time % 60 ? time % 60 : "00"}
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          className="bg-primary-purple font-medium my-6 w-32"
          onPress={isExpired ? start : isPaused ? resume : pause}
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

export default StopWatch;
