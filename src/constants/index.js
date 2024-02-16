import { LuLayoutDashboard } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { IoPieChart } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

export const links = [
  { title: "Dashboard", route: "/", icon: <LuLayoutDashboard size={22} /> },
  { title: "Projects", route: "/projects", icon: <CiViewList size={22} /> },
  { title: "Timer", route: "/timer", icon: <CiStopwatch size={22} /> },
  { title: "Analytics", route: "/analytics", icon: <IoPieChart size={22} /> },
  {
    title: "Messages",
    route: "/messages",
    icon: <MdMarkEmailUnread size={22} />,
  },
];
