import React, { useContext } from "react";
import { ThemeContext } from "../contextApi/ThemeContext";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-800 border border-gray-500 p-2 rounded-md shadow-md"
          : "border border-gray-800 p-2 rounded-md bg-gray-100 shadow-md"
      }
    >
      <p>Title</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        error tempore optio iure praesentium quos voluptatibus dicta repellat
        consequuntur in, necessitatibus quia expedita amet repudiandae
        recusandae rerum et laboriosam fugiat.
      </p>
    </div>
  );
};

export default Card;
