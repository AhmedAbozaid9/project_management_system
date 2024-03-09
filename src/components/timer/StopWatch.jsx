import React from "react";
import { useStopwatch } from "@/hooks/useStopwatch";

const StopWatch = () => {
  const { time, isRunning, isPaused, isExpired, start, pause, resume, end } =
    useStopwatch(() => console.log("aaaaaa"));
  console.log(time);
  return (
    <div>
      StopWatch {time}
      <button onClick={start}>click me</button>
    </div>
  );
};

export default StopWatch;
