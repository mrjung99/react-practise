import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import DisplayTask from "./components/DisplayTask";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleAddTask = () => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  return (
    <div
      className="w-full mx-auto max-w-md rounded 
    text-white min-h-[90vh] bg-neutral-900 p-4 mt-3"
    >
      <Header />

      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTask={handleAddTask}
      />
      <DisplayTask task={task} />
    </div>
  );
};

export default App;
