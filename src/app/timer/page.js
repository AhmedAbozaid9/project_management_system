"use client";

import React, { useState } from "react";
import { Tabs, Tab, Select, SelectItem } from "@nextui-org/react";

import Timer from "@/components/timer/Timer";
import StopWatch from "@/components/timer/StopWatch";
import TimerStatistics from "@/components/timer/TimerStatistics";
import SelectProject from "@/components/timer/SelectProject";

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");
  return (
    <section className="w-full p-6 flex justify-between items-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <SelectProject />

        <Tabs
          size="sm"
          selectedKey={selectedType}
          onSelectionChange={setSelectedType}
          radius="full"
          className="mx-auto"
          classNames={{
            panel: "bg-primary-purple",
          }}
        >
          <Tab key="Timer" title="Timer" />
          <Tab key="Stopwatch" title="Stopwatch" />
        </Tabs>
        {selectedType === "Timer" ? <Timer /> : <StopWatch />}
      </div>
      <TimerStatistics />
    </section>
  );
};

export default Page;
