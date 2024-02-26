"use client";
import axios from "axios";
import InfoCard from "@/components/dashboard/InfoCard";

import { info_cards } from "@/constants";
import ProjectsTable from "@/components/Tables/ProjectsTable";
import LatestRepos from "@/components/dashboard/LatestRepos";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "AhmedAbozaid9";
const GITHUB_TOKEN =
  "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";

export default function Home() {
  const [latestRepos, setLatestRepos] = useState();
  useEffect(() => {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config) => {
      // Add Authorization header to the request
      config.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
      return config;
    });

    // Your asynchronous function
    (async () => {
      try {
        const { data } = await axiosInstance.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`
        );
        setLatestRepos(data.map((project) => project.name));
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <div className="flex items-center flex-col sm:flex-row min-w-full gap-5 py-5">
        {info_cards.map((info_card) => (
          <InfoCard key={info_card.title} {...info_card} number={5} />
        ))}
      </div>
      <div className="flex gap-5 w-full max-sm:flex-col">
        <div className="flex flex-col justify-center basis-[66.2%] bg-main-dark-bg rounded-lg p-5">
          <h2 className="font-md">Daily Activity :</h2>
        </div>
        <LatestRepos latestRepos={latestRepos} />
      </div>
      <ProjectsTable />
    </main>
  );
}
