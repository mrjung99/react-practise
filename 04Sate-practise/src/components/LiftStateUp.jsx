import React, { useState } from "react";

const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputValue inputValue={inputValue} setInputValue={setInputValue} />
      <DisplalyValue inputValue={inputValue} />
    </>
  );
};

export default LiftStateUp;

const InputValue = ({ inputValue, setInputValue }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Lifting state up</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-xl border focus:border-blue-400 focus:inset-shadow-2xs focus:inset-shadow-blue-200  outline-none rounded p-1 mt-3"
      />
    </>
  );
};

const DisplalyValue = ({ inputValue }) => {
  return (
    <>
      <h1 className="mt-2">You clicked: {inputValue}</h1>
    </>
  );
};
