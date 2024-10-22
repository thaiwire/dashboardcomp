import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { UsersRound } from "lucide-react";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
        <CardSummary
          icon={UsersRound}
          total="12.501"
          average={15}
          title="Company Created"
          tooltipText="Sell all Company"
        />
      </div>
    </div>
  );
}
