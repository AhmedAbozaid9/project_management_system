import React from "react";
import { Button } from "@nextui-org/react";

import { useStopwatch } from "@/hooks/useStopwatch";

const StopWatch = () => {
  const { time, isPaused, isExpired, start, pause, resume, end } = useStopwatch(
    () => console.log("aaaaaa")
  );
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-6xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-[#2F2E35] flex items-center justify-center flex-col">
        <div>
          {Math.floor(time / 60)}:{time % 60}
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