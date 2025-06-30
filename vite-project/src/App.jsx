import { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    count < 10 ? setCount(count + 1) : "";
  };

  const decrease = () => {
    count > 0 ? setCount(count - 1) : "";
    //comment
  };

  return (
    <div>
      <h1>This is the first react app</h1>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default App;
