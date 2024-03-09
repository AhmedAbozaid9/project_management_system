"use client";

import React, { useState } from "react";
import { Tabs, Tab, Select, SelectItem } from "@nextui-org/react";

import Timer from "@/components/timer/Timer";
import StopWatch from "@/components/timer/StopWatch";
import TimerStatistics from "@/components/timer/TimerStatistics";

const projects = [
  { key: 1, title: "project 1" },
  { key: 2, title: "project 2" },
];

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");
  console.log(selectedType);
  return (
    <section className="w-full p-6 flex justify-between items-center">
      <div className="flex flex-col gap-5 justify-center">
        <Select size="sm" variant="underlined" label="Select a project">
          {projects.map((project) => (
            <SelectItem key={project.key} value={project.title}>
              {project.title}
            </SelectItem>
          ))}
        </Select>

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
