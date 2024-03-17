import React from "react";
import Sidebar from "./Sidebar";

const Navigation = () => {
  return (
    <aside className="bg-main-dark-bg md:flex flex-col h-screen sticky hidden">
      <Sidebar />
    </aside>
  );
};

export default Navigation;
