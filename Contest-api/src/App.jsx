import React from "react";
import Home from "./component/Home";
import { ThemeProvider } from "./contextApi/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
