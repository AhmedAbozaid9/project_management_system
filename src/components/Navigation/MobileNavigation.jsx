import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./Sidebar";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden relative">
      {isOpen && (
        <div
          className="absolute overflow-hidden top-0 left-0 w-screen h-screen z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      <span className={`z-50 ${isOpen ? "fixed top-6 left-6" : "relative"}`}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 bg-main-dark-bg min-h-screen w-[60%] z-20 "
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.1 }}
            variants={variants}
          >
            <Sidebar setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
