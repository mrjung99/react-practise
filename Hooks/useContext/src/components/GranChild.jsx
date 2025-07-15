import React, { useContext } from "react";
import { BioContext } from "../context API/BioContext";

const GranChild = () => {
  const { myName, age } = useContext(BioContext);
  return (
    <div>
      <h1>Hello iam a grand child component, my name is {myName}</h1>
    </div>
  );
};

export default GranChild;
