import React, { useState } from "react";

const Button = ({ onClick, children }) => {
  console.log(`Rendering button ${children}`);
  return (
    <button
      className={`py-1 px-2 rounded text-white cursor-pointer ${
        children === "Increment"
          ? "bg-green-600 hover:bg-green-700"
          : "bg-red-600 hover:bg-red-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
