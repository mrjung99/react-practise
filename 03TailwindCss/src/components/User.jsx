import React from "react";

const User = (props) => {
  return (
    <div>
      <p className="text-red-500 text-3xl">Welcome {props.username}</p>
    </div>
  );
};

export default User;
