"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import Timer from "@/components/timer/Timer";
import TimerStatistics from "@/components/timer/TimerStatistics";

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");
  console.log(selectedType);
  return (
    <section className="w-full p-6 flex justify-between items-center">
      <div className="flex flex-col gap-5 justify-center">
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
        <Timer />
      </div>
      <TimerStatistics />
    </section>
  );
};

export default Page;
