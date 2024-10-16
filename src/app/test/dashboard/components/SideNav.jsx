"use client"

import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const MenuOption = [
  {
    id: 1,
    name: "Dashboard",
    path: "/test/dashboard",
    icon: PanelsTopLeft,
  },
  {
    id: 2,
    name: "Create Video",
    path: "/test/dashboard/new",
    icon: FileVideo,
  },
  {
    id: 3,
    name: "Upgrade",
    path: "/test/dashboard/upgrade",
    icon: ShieldPlus,
  },
  {
    id: 4,
    name: "Account",
    path: "/test/dashboard/account",
    icon: CircleUser,
  },
];

const SideNav = () => {
  const path = usePathname( )
  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {MenuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              key={index}
              className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${path==item.path && 'bg-primary text-white'}`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
