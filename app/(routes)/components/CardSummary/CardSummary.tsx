import { Customicon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, average, title, tooltipText } = props;

  return (
    <div
      className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow
    transition"
    >
      <div className="flex justify-between">
        <Customicon icon={Icon} />
        {title}
      </div>
    </div>
  );
}
