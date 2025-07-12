import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    count < 20 ? setCount(count + step) : "";
  };

  const decrement = () => {
    count > 0 ? setCount((prev) => prev - step) : "";
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="border w-full mx-auto max-w-md p-3">
      <section className="flex flex-col gap-3 mb-3">
        <p>
          Count:<span className="text-lg font-semibold pl-1">{count}</span>
        </p>
        <p>
          Step:{" "}
          <input
            onChange={(e) => setStep(Number(e.target.value))}
            type="number"
            className="border outline-none px-1"
          />
        </p>
      </section>
      <section className="flex gap-4 items-center justify-center">
        <button
          onClick={increment}
          className="bg-black text-white px-1.5 cursor-pointer"
        >
          Increament
        </button>
        <button
          onClick={decrement}
          className="bg-black text-white px-1.5 cursor-pointer"
        >
          Decreament
        </button>
        <button
          onClick={reset}
          className="bg-black text-white px-1.5 cursor-pointer"
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default App;
