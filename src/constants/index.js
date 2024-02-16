import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdListBox } from "react-icons/io";
import { FaStopwatch } from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

import { FaRegClipboard } from "react-icons/fa6";
import { LuListChecks } from "react-icons/lu";
import { LuGoal } from "react-icons/lu";

export const links = [
  { title: "Dashboard", route: "/", icon: <LuLayoutDashboard size={22} /> },
  { title: "Projects", route: "/projects", icon: <IoMdListBox size={22} /> },
  { title: "Timer", route: "/timer", icon: <FaStopwatch size={22} /> },
  { title: "Analytics", route: "/analytics", icon: <IoPieChart size={22} /> },
  {
    title: "Messages",
    route: "/messages",
    icon: <MdMarkEmailUnread size={22} />,
  },
];

export const info_cards = [
  {
    title: "planning for",
    color: "#E074ED",
    icon: <FaRegClipboard size={28} />,
  },
  {
    title: "Working on",
    color: "#B8ECED",
    icon: <LuListChecks size={28} />,
  },
  {
    title: "Completed",
    color: "#ED74BD",
    icon: <LuGoal size={28} />,
  },
];
