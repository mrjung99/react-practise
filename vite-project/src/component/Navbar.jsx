import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
          <p>Logo</p>
        </div>
        <div className="right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
