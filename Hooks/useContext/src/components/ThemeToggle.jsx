import React, { useContext } from "react";
import { ThemeContext } from "../context API/ThemeContext";

const ThemeToggle = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-lvh ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`text-4xl font-medium ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Toggle Dark and Light theme
      </h1>

      <p
        className={`text-3xl font-medium my-3 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        With react-19
      </p>

      <button
        onClick={handleThemeToggle}
        className="bg-blue-800 hover:bg-blue-700 mt-4 p-4 rounded-md text-white shadow-2xl cursor-pointer"
      >
        {theme === "dark" ? " Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
