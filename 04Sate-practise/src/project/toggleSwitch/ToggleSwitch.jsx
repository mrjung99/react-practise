import React, { useState } from "react";
import clsx from "clsx";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const container = `"h-[100px] w-[200px] p-2 bg-gray-300 rounded-full flex items-center cursor-pointer select-none",
        ${isOn ? "bg-green-500" : ""}`;

  const toggleSwitch = `" h-[80px] w-[80px] rounded-full  flex items-center justify-center text-white text-2xl font-semibold  transition-transform duration-300 ease-in",
          ${
            isOn
              ? "bg-green-500 border-4 border-white translate-x-[100px]"
              : "bg-red-500 translate-x-0"
          }`;

  return (
    <div className={clsx(container)} onClick={handleToggleSwitch}>
      <span className={clsx(toggleSwitch)}>{isOn ? "ON" : "OFF"}</span>
    </div>
  );
};

export default ToggleSwitch;
