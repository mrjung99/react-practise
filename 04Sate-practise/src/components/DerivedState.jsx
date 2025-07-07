import React, { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 40 },
  ]);

  //derived state
  const userCount = users.length;

  //average age
  const averageAge = Math.round(
    users.reduce((acc, user) => acc + user.age, 0) / userCount
  );

  return (
    <>
      <h1 className="text-4xl font-bold">Derived State</h1>
      <ul className="text-2xl pt-1.5">
        {users.map((user, index) => {
          return (
            <li>
              {user.name} - {user.age} years old
            </li>
          );
        })}
      </ul>
      <h2>Total users : {userCount}</h2>
      <h2>Average age : {averageAge}</h2>
    </>
  );
};

export default DerivedState;
