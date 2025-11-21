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

      <nav className="absolute top-[60px] left-0 bg-gray-100 w-full text-center shadow-md">
        <ul className={isOpen ? "flex flex-col md:flex-row gap-7" : "hidden"}>
          <li className="hover:text-blue-500 transition-colors cursor-pointer mt-2">
            Home
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            Service
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer mb-2">
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
