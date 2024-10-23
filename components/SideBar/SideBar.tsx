import { Logo } from "../Logo";
import { SidebarRoutes } from "../SidebarRoutes";

export function SideBar() {
  return (
    <div className="h-full flex flex-col border-r">
      <Logo />
      <SidebarRoutes />
    </div>
  );
}
