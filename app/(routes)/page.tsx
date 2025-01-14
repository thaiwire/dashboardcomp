import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { Saledistributors } from "./components/Salesdistributors";

export const dataCardsSummary = [
  {
    icon: UsersRound,
    total: "12.501",
    average: 15,
    title: "Company Created",
    tooltipText: "Sell all Created Company ",
  },
  {
    icon: Waypoints,
    total: "86.501",
    average: 80,
    title: "Total Revenue",
    tooltipText: "Sell all Summary",
  },
  {
    icon: BookOpenCheck,
    total: "312.501",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "Sell all Bounce Rate ",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
        {dataCardsSummary.map(
          ({ icon, total, average, title, tooltipText }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltipText={tooltipText}
            />
          )
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <Saledistributors />
      </div>
      <div
        className="flex-col xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12
      md:mb-10 justify-center "
      >
        <p>Total subscribers</p>
        <p>list integrations</p>
      </div>
    </div>
  );
}
