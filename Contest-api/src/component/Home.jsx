import React, { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../contextApi/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl text-center mb-3">Welcome to the Home page</h1>

      <button
        className="bg-green-500 px-3 py-1 rounded-md text-white cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <div className="flex gap-5 w-10/12 mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
