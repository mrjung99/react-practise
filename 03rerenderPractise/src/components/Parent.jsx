import React from "react";
import Child from "./Child";

const Parent = ({ count }) => {
  console.log("hello from parent component");
  return (
    <div>
      <Child />
      <h1 className="text-white text-3xl">
        Hello, iam parent component,count is {count}
      </h1>
    </div>
  );
};

export default React.memo(Parent);
