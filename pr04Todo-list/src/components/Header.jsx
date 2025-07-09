import React from "react";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-4xl font-bold text-green-700 mb-8">
      <LuListTodo className="text-orange-700" />
      <h1>Todo list</h1>
    </div>
  );
};

export default Header;
