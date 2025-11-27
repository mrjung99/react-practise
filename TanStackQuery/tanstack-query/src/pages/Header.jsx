import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mx-auto h-[60px] shadow-md flex items-center justify-center">
      <ul className="flex gap-9">
        {["/", "data", "about"].map((path, index) => {
          const name =
            path === "/"
              ? "Home"
              : path.charAt(0).toUpperCase() + path.slice(1);
          return (
            <NavLink to={path} key={index}>
              <li className="cursor-pointer">{name}</li>
            </NavLink>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
