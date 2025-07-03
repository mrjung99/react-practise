import { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    count < 10 ? setCount(count + 1) : "";
  };

  const decrease = () => {
    count > 0 ? setCount(count - 1) : "";
  };

  return (
    <div>
      <h1>This is the first react app</h1>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
