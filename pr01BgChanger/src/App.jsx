import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-semibold py-2 text-white">BG-Changer</h1>
      <div className=" flex flex-wrap justify-center gap-3 fixed bottom-12 rounded-3xl bg-white py-2 px-3 ">
        <button
          onClick={() => setColor("red")}
          className="outline-none text-white cursor-pointer bg-red-700 rounded-2xl py-1 px-3 shadow-2xl"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="outline-none text-white cursor-pointer bg-green-700 rounded-2xl py-1 px-3 shadow-2xl"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="outline-none text-white cursor-pointer bg-blue-700 rounded-2xl py-1 px-3 shadow-2xl"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="outline-none text-white cursor-pointer bg-yellow-700 rounded-2xl py-1 px-3 shadow-2xl"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("orange")}
          className="outline-none text-white cursor-pointer bg-orange-700 rounded-full  px-3 shadow-2xl"
        >
          Orange
        </button>
      </div>
    </div>
  );
};

export default App;
