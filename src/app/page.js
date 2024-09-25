"use client";
import axios from "axios";
import InfoCard from "@/components/dashboard/InfoCard";

import { info_cards } from "@/constants";
import SummaryProjectsTable from "@/components/Tables/SummaryProjectsTable";
import LatestRepos from "@/components/dashboard/LatestRepos";
import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import { AuthContext } from "@/contexts/authContext";
const GITHUB_USERNAME = "AhmedAbozaid9";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [latestRepos, setLatestRepos] = useState();
  const [summary, setSummary] = useState();

  const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`
      );
      setLatestRepos(data.map((project) => project.name));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/projects/summary", {
        params: {
          userId: user?.id,
        },
      });
      setSummary(data);
    })();
  }, [user]);

  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <div className="flex items-center flex-col sm:flex-row min-w-full gap-5 py-5">
        {info_cards.map((info_card) => (
          <InfoCard key={info_card.key} {...info_card} summary={summary} />
        ))}
      </div>
      <div className="flex gap-5 w-full max-sm:flex-col">
        <div className="flex flex-col justify-center basis-[66.2%] bg-main-dark-bg rounded-lg p-5">
          <h2 className="font-md">Daily Activity :</h2>
        </div>
        <LatestRepos latestRepos={latestRepos} />
      </div>
      {projects && <SummaryProjectsTable projects={projects} />}
    </main>
  );
}
