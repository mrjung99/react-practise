import React, { useContext } from "react";
import { BioContext } from "../context API/BioContext";

const GrandGrandChild = () => {
  const { name, age } = useContext(BioContext);
  return (
    <div>
      <h1>Hello iam grand grand child, iam {age} years old</h1>
    </div>
  );
};

export default GrandGrandChild;
