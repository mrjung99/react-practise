import React, { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className=" min-h-screen p-4 dark:bg-gray-900 bg-gray-50">
      <h1 className="text-4xl dark:text-gray-100 text-center py-3 mb-5">
        Theme toggle with context api
      </h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <div className="flex flex-wrap md:flex-nowrap gap-5 w-10/12 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
