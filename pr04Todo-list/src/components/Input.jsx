import React from "react";
import { useState } from "react";

const Input = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    const newId = Date.now();
    setInputValue({ id: newId, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddToDo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex  rounded overflow-hidden mt-5">
        <input
          type="text"
          placeholder="Enter Task"
          className="outline-none bg-gray-300 text-black w-full p-1"
          value={inputValue.content}
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-900 text-gray-200 py-1.5 px-2 shrink-0 
        outline-none cursor-pointer hover:bg-blue-700 select-none"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Input;
