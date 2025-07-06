import React from "react";

const Child = () => {
  console.log("hello from child component");
  return (
    <div>
      <h1 className="text-white text-3xl">Hello, iam child component</h1>
    </div>
  );
};

export default React.memo(Child);
