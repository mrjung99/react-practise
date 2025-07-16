// import React from "react";
// import Child from "./components/Child";
// import GranChild from "./components/GranChild";
// import { BioProvider } from "./context API/BioContext";
// import GrandGrandChild from "./components/GrandGrandChild";

import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context API/ThemeContext";

const App = () => {
  return (
    <>
      {/* <Child />
      <BioProvider>
        <GranChild />
        <GrandGrandChild />
      </BioProvider> */}

      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </>
  );
};

export default App;
