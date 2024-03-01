"use client";

import React, { useState } from "react";
import Timer from "@/components/timer/Timer";
import TimerStatistics from "@/components/timer/TimerStatistics";

const Page = () => {
  const [timerStamp, setTimerStamp] = useState(1);

  return (
    <section className="w-full p-6 flex justify-between items-center">
      <Timer timerStamp={timerStamp} setTimerStamp={setTimerStamp} />
      <TimerStatistics />
    </section>
  );
};

export default Page;
