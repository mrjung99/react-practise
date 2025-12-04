import React, { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../contextApi/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "bg-gray-900 text-gray-200 p-4" : "p-4"}>
      <h1 className="text-4xl text-center mb-3">Welcome to the Home page</h1>

      <button
        className="bg-green-500 px-3 py-1 rounded-md text-white cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <div className="flex gap-3 w-10/12 mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
