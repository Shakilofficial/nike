// src/components/Nav.jsx

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import AuthLinks from "./AuthLinks";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-900 hover:text-coral-red transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <AuthLinks />
        </div>
        <div className="hidden max-lg:block">
          <motion.img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-rose-50 shadow-lg max-lg:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col items-center py-4">
              {navLinks.map((item) => (
                <li key={item.label} className="py-2">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-gray-900 hover:text-coral-red transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-center py-2"
              >
                <AuthLinks />
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
