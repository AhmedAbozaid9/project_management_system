"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IoIosLogIn } from "react-icons/io";

import { links } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = ({ setIsOpen }) => {
  const {data:session} = useSession();
  console.log(session);
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between h-[100dvh] p-6 drop-shadow-md">
      <Link href="/">
        <h1 className="text-primary-purple font-semibold text-2xl mb-6 max-md:hidden">
          Project manager
        </h1>
      </Link>
      <div className="sidebar flex flex-col w-full flex-1 max-md:pt-14">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.route}
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`${
              pathname === link.route && "bg-hover-bg"
            } flex gap-5 items-center p-3 rounded-md mb-3 transition-colors font-medium hover:bg-hover-bg`}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="transition-colors hover:bg-hover-bg p-3 rounded-md mt-auto cursor-pointer flex gap-5 items-center px-2 font-medium"
          >
            <IoIosLogIn size={22} />
            Logout
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="transition-colors hover:bg-hover-bg p-3 rounded-md mt-auto cursor-pointer flex gap-5 items-center px-2 font-medium"
          >
            <IoIosLogIn size={22} />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
