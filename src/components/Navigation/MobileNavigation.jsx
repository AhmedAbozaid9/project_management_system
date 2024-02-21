import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <span>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </span>
      {isOpen && (
        <div>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
