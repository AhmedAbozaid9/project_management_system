import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <span className="relative z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </span>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-main-dark-bg min-h-screen w-[60%] z-20">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
