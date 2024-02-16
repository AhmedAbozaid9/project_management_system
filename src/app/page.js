import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-1 gap-3">
        <InfoCard title="Planning for" number={4} />
        <InfoCard title="Working on" number={4} />
        <InfoCard title="Finished" number={4} />
      </div>
    </main>
  );
}
