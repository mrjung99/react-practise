import React from "react";
import { MdOutlineDone, MdDeleteForever } from "react-icons/md";

const DisplayTask = ({
  checked,
  task,
  onCheckedClicked,
  onhandleDeleteClicked,
}) => {
  return (
    <li className="flex gap-2 justify-between my-3 bg-[rgb(0,0,0,0.4)] rounded p-2">
      <h1 className={checked ? "line-through" : ""}>{task}</h1>

      <div className="flex gap-1">
        <button
          onClick={() => onCheckedClicked(task)}
          className="bg-green-900 rounded-full p-1 hover:bg-green-700 cursor-pointer"
        >
          <MdOutlineDone />
        </button>

        <button
          onClick={() => onhandleDeleteClicked(task)}
          className="bg-red-900 rounded-full p-1 hover:bg-red-700 cursor-pointer"
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default DisplayTask;
