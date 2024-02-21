import React from "react";
import Sidebar from "./Sidebar";

const Navigation = () => {
  return (
    <aside className="bg-main-dark-bg md:flex flex-col min-h-screen p-6 hidden">
      <Sidebar />
    </aside>
  );
};

export default Navigation;
