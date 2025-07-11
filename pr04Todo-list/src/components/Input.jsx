import React from "react";

const Input = ({ inputValue, setInputValue, handleAddTask }) => {
  return (
    <div className="flex  rounded overflow-hidden mt-5">
      <input
        type="text"
        placeholder="Enter Task"
        className="outline-none bg-gray-300 text-black w-full p-1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={handleAddTask}
        className="bg-blue-900 text-gray-200 py-1.5 px-2 shrink-0 
        outline-none cursor-pointer hover:bg-blue-700 select-none"
      >
        Add Task
      </button>
    </div>
  );
};

export default Input;
