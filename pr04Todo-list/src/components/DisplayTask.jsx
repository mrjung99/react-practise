import React from "react";
import { MdOutlineDone, MdDeleteForever } from "react-icons/md";

const DisplayTask = ({ task }) => {
  return (
    <div>
      <ul className="text-gray-200 mt-6 select-none">
        {task.map((curTask, index) => {
          return (
            <li
              key={index}
              className="flex gap-2 justify-between my-3 bg-[rgb(0,0,0,0.4)] rounded p-2"
            >
              <h1>{curTask}</h1>

              <div className="flex gap-1">
                <button className="bg-green-900 rounded-full p-1 hover:bg-green-700 cursor-pointer">
                  <MdOutlineDone />
                </button>

                <button className="bg-red-900 rounded-full p-1 hover:bg-red-700 cursor-pointer">
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {task.length >= 2 ? (
        <button className="flex items-center gap-1 bg-red-900 hover:bg-red-800 border-none rounded py-1 px-2 cursor-pointer">
          <MdDeleteForever />
          <span>Clear all</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayTask;
