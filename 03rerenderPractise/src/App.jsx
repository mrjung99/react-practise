import React, { useCallback, useState } from "react";
import Parent from "./components/Parent";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-white text-2xl font-semibold">{count}</h1>
      <button
        onClick={increment}
        className="bg-gray-300 px-2 py-1.5 rounded cursor-pointer"
      >
        Increment
      </button>
      <Parent count={count} />
    </div>
  );
};

export default App;
