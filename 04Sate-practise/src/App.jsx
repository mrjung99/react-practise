import React from "react";
import State from "./components/State";
import DerivedState from "./components/DerivedState";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-center">
      {/* <State /> */}
      <DerivedState />
    </div>
  );
};

export default App;
