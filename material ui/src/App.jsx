import React from "react";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500 h-lvh">
      <Navbar />
      <h1 className="text-gray-100 text-center font-sans text-2xl">
        Modal popup
      </h1>
    </div>
  );
};

export default App;
