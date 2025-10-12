import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around gap-25 items-center shadow-2xl h-14 px-3">
      <div>React-project</div>
      <div>
        <ul className="flex gap-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-500 "
                    : "text-gray-700 hover:underline underline-offset-4 decoration-blue-500 "
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-500 "
                    : "text-gray-700 hover:underline underline-offset-4 decoration-blue-500 "
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-blue-500 "
                    : "text-gray-700 hover:underline underline-offset-4 decoration-blue-500"
                }`
              }
            >
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-700 hover:underline underline-offset-4 decoration-blue-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
