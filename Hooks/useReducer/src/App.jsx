import React, { useReducer } from "react";

const App = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }

    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }

    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-semibold my-6">useReducer hooks</h1>
      <h1 className="text-4xl font-bold">{state.count}</h1>

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
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
