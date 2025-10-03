import React from "react";

const EventPropagation = () => {
  const handleGrandParent = (e) => {
    // e.stopPropagation();
    console.log("grand parent clicked");
  };

  const handleParent = (e) => {
    // e.stopPropagation();
    console.log("parent clicked");
  };

  const handleChild = (e) => {
    // e.stopPropagation();
    console.log("child clicked");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Demo of Event propagation</h1>
      <div
        className="border-2 bg-amber-600 h-[200px] w-[500px] flex justify-center items-center"
        onClick={handleGrandParent}
      >
        <div
          className="h-[150px] w-[400px] bg-amber-200 border-2 flex justify-center items-center"
          onClick={handleParent}
        >
          <button
            className="border-sky-100 bg-blue-500 p-1 rounded text-white cursor-pointer"
            onClick={handleChild}
          >
            Child div
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPropagation;
