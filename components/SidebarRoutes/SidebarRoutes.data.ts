import {
  BarChart4,
  Building2,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  CircleHelpIcon,
  Calculator,
  Calendar,
  BarChart,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Company",
    href: "/companies",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/task",
  },
];

export const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];
