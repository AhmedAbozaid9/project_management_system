"use client";

import React, { useState } from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";

import Timer from "@/components/timer/Timer";
import StopWatch from "@/components/timer/StopWatch";
import TimerStatistics from "@/components/timer/TimerStatistics";
import SelectProject from "@/components/timer/SelectProject";

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");

  return (
    <section className="w-full p-6 flex max-md:flex-col justify-between">
      <div className="flex flex-1 flex-col gap-5 items-center">
        <SelectProject />

        <Tabs
          size="sm"
          selectedKey={selectedType}
          onSelectionChange={setSelectedType}
          radius="full"
          className="mx-auto"
          variant="bordered"
        >
          <Tab key="Timer" title="Timer" />
          <Tab key="Stopwatch" title="Stopwatch" />
        </Tabs>
        {selectedType === "Timer" ? <Timer /> : <StopWatch />}
      </div>
      <Divider orientation="vertical" className="max-md:hidden mx-5" />
      <TimerStatistics />
    </section>
  );
};

export default Page;
