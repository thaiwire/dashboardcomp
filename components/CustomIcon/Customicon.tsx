import { CustomiconProps } from "./Customicon.types";

export function Customicon(props: CustomiconProps) {
  const { icon: Icon } = props;
  return (
    <div className="p-2 bg-slate-400 rounded-lg">
      <Icon strokeWidth={1} className="m-4 h-4" />
    </div>
  );
}
