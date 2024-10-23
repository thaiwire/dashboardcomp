import { Customicon } from "@/components/CustomIcon";
import { BarChart } from "lucide-react";
import { GraphicSuscribers } from "../GraphicSuscribers";

export function Saledistributors() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <Customicon icon={BarChart} />
        <p className="text-xl">Sales distributors</p>
      </div>
      <div>
        <GraphicSuscribers />
      </div>
    </div>
  );
}
