import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex md:flex-row justify-between px-10 h-[60px] items-center shadow-md">
      <div>
        <p className="text-3xl font-semibold text-orange-700">Mr Jung</p>
      </div>

      <nav
        className="absolute md:static top-[60px] md:top-0 left-0 md:left-auto bg-gray-100 md:bg-transparent w-full 
              md:w-auto text-center md:text-left shadow-md md:shadow-none"
      >
        <ul
          className={
            isOpen
              ? "flex items-center flex-col md:flex-row gap-3"
              : "hidden items-center md:flex md:flex-row gap-7"
          }
        >
          <li className="hover:text-blue-500 transition-colors cursor-pointer mt-2 md:mt-0">
            Home
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            Service
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer mb-2 md:mb-0">
            Contact
          </li>
        </ul>
      </nav>

      <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
