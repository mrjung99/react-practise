import React, { useEffect, useState } from "react";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-1 text-5xl font-bold mb-2">
        {/* <LuListTodo className="" /> */}
        <h1>Todo list</h1>
      </div>
      <h1 className="text-center text-[14px]">{dateTime}</h1>
    </>
  );
};

export default Header;
