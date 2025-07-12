import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import DisplayTask from "./components/DisplayTask";
import { MdOutlineDone, MdDeleteForever } from "react-icons/md";
import {
  getLocalStorageToDoData,
  setLocalStorageToDoData,
} from "./components/Utlis";

const App = () => {
  const [task, setTask] = useState(() => getLocalStorageToDoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifContainsTask = task.find(
      (currTask) => currTask.content === content
    );

    if (ifContainsTask) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);

    setTask(updatedTask);
  };

  setLocalStorageToDoData(task);

  const handleCheckedTask = (value) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === value) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });

    setTask(updatedTask);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <div
      className="w-full mx-auto max-w-md rounded 
    text-white min-h-[90vh] bg-[rgb(255,255,255,0.1)] p-4 mt-3 shadow-md"
    >
      <Header />

      <Input onAddToDo={handleFormSubmit} />

      <ul className="text-gray-200 mt-6 select-none">
        {task.map((curTask) => {
          return (
            <DisplayTask
              key={curTask.id}
              task={curTask.content}
              checked={curTask.checked}
              onhandleDeleteClicked={handleDeleteTask}
              onCheckedClicked={handleCheckedTask}
            />
          );
        })}
      </ul>

      {task.length >= 2 ? (
        <button
          onClick={handleClearAll}
          className="flex items-center gap-1 bg-red-900 hover:bg-red-800 border-none rounded py-1 px-2 cursor-pointer"
        >
          <MdDeleteForever />
          <span>Clear all</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
