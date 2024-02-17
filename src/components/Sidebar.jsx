"use client";
import React from "react";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";

import { links } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-main-dark-bg md:flex flex-col min-h-screen p-6 hidden">
      <Link href="/">
        <h1 className="text-primary-purple font-semibold text-2xl mb-6  ">
          Project manager
        </h1>
      </Link>
      <div className="flex flex-col h-full w-full flex-1">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.route}
            className={`${
              pathname === link.route && "bg-hover-bg"
            } flex gap-5 items-center p-3 rounded-md mb-3 transition-colors font-medium hover:bg-hover-bg`}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
        <div className="transition-colors hover:bg-hover-bg p-3 rounded-md mt-auto cursor-pointer flex gap-5 items-center px-2 font-medium">
          <IoIosLogIn size={22} />
          Login
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
