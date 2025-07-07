import React from "react";
import State from "./components/State";
import DerivedState from "./components/DerivedState";
import LiftStateUp from "./components/LiftStateUp";
import ToggleSwitch from "./project/toggleSwitch/ToggleSwitch";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-center">
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <LiftStateUp /> */}
      <ToggleSwitch />
    </div>
  );
};

export default App;
