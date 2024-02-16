import InfoCard from "@/components/InfoCard";

import { info_cards } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <div className="flex items-center min-w-full gap-3 py-6">
        {info_cards.map((info_card) => (
          <InfoCard key={info_card.title} {...info_card} number={5} />
        ))}
      </div>
    </main>
  );
}
