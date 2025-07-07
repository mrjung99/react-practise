import React, { useState } from "react";

const State = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 40 },
  ]);
  return (
    <>
      <h1 className="text-4xl font-bold">State with objects</h1>
      <ul className="text-2xl pt-1.5">
        {users.map((user, index) => {
          return (
            <li>
              {user.name} - {user.age} years old
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default State;
