import React, { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }

    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-semibold my-6">useReducer hooks</h1>
      <h1 className="text-4xl font-bold">{count}</h1>

      <div className="flex gap-6 mt-5">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded cursor-pointer"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded cursor-pointer"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
