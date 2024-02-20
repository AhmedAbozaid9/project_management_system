"use client";
import { NextUIProvider } from "@nextui-org/react";

import InfoCard from "@/components/InfoCard";

import { info_cards } from "@/constants";
import ProjectsTable from "@/components/ProjectsTable";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <div className="flex items-center flex-col sm:flex-row min-w-full gap-5 py-5">
        {info_cards.map((info_card) => (
          <InfoCard key={info_card.title} {...info_card} number={5} />
        ))}
      </div>
      <div className="flex gap-5 w-full">
        <div className="flex flex-col justify-center basis-[66.2%] bg-main-dark-bg rounded-lg p-5">
          <h2 className="font-md">Daily Activity :</h2>
        </div>
        <div className="flex flex-col justify-center flex-1 bg-main-dark-bg rounded-lg p-5">
          <h2 className="font-md text-lg font-semibold">Latest commits :</h2>
          <div className="overflow-y-auto">
            <p className="text-[#C9C2E8] text-sm underline py-1 cursor-pointer ">
              Changes this thing
            </p>
            <p className="text-[#C9C2E8] text-sm underline py-1 cursor-pointer ">
              Changes that thign
            </p>
            <p className="text-[#C9C2E8] text-sm underline py-1 cursor-pointer ">
              broke the code
            </p>
          </div>
        </div>
      </div>
      <ProjectsTable />
    </main>
  );
}
