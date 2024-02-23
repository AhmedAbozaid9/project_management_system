import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", () => handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="md:hidden relative ">
      <span className={`z-50 ${isOpen ? "fixed top-6 left-6" : "relative"}`}>
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
