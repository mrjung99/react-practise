import React from "react";
import Child from "./components/Child";
import GranChild from "./components/GranChild";
import { BioProvider } from "./context API/BioContext";
import GrandGrandChild from "./components/GrandGrandChild";

const App = () => {
  return (
    <>
      <Child />
      <BioProvider>
        <GranChild />
        <GrandGrandChild />
      </BioProvider>
    </>
  );
};

export default App;
