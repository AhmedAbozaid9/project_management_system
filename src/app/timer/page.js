"use client";

import React, { useState } from "react";
import Timer from "@/components/timer/Timer";
import TimerStatistics from "@/components/timer/TimerStatistics";

const Page = () => {
  const [timerStamp, setTimerStamp] = useState(10000);

  return (
    <section className="w-full p-6 flex justify-between items-center">
      <Timer expiryTimestamp={new Date(Date.now() + timerStamp)} />
      <TimerStatistics />
    </section>
  );
};

export default Page;
