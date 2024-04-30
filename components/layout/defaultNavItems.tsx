import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Patients",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "HR",
    href: "/team",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Labs",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Pharma",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: "Registration",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Consultation",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Tests & Reports",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Billings",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
];
