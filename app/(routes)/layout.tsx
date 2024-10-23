import { Navbar } from "@/components/Navbar/Navbar";
import { SideBar } from "@/components/SideBar";
import React from "react";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">
        <SideBar />
      </div>
      <div className="w-full xl:ml-80">
        <Navbar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
