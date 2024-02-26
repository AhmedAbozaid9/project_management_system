import Link from "next/link";
import React from "react";
import { Skeleton } from "@nextui-org/react";

const LatestRepos = ({ latestRepos }) => {
  return (
    <div className="flex flex-col justify-center flex-1 bg-main-dark-bg rounded-lg p-5">
      <h2 className="font-md text-md font-semibold">Latest repos :</h2>
      <div className="overflow-y-auto flex flex-col gap-1">
        {latestRepos ? (
          latestRepos.map((repo) => (
            <Link
              key={repo}
              className="text-[#C9C2E8] text-sm underline py-1 cursor-pointer"
              href={`https://github.com/AhmedAbozaid9/${repo}`}
              target="_blank"
            >
              {repo}
            </Link>
          ))
        ) : (
          <div className="min-h-[92px]">
            <Skeleton className="my-3 w-3/5">
              <div className="h-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="my-3 w-2/5">
              <div className="h-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="my-3 w-4/5">
              <div className="h-3 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestRepos;
