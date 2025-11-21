import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-10 h-[60px] items-center shadow-md">
      <div>
        <p className="text-3xl font-semibold text-orange-700">Mr Jung</p>
      </div>
      <nav>
        <ul className="flex gap-7 ">
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            Service
          </li>
          <li className="hover:text-blue-500 transition-colors cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
