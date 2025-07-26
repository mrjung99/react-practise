import React, { useCallback, useState } from "react";
import Button from "./components/Button";

const App = ({ onClick, children }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");
    setCount(count + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement");

    setCount(count - 1);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[100vh]">
      <h1 className="text-4xl font-semibold">Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default App;
