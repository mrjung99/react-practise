import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const handleInput = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col  items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl text-gray-700 my-6">Registration form</h1>
          <label htmlFor="firstName">First name:</label>
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="firstName"
            value={user.firstName}
            placeholder="first name "
            className="mb-3 p-1 rounded border border-gray-800 outline-0"
          />
          <label htmlFor="lastName">Last name:</label>
          <input
            onChange={handleInput}
            type="text"
            name="lastName"
            value={user.lastName}
            placeholder="last name"
            className="mb-3 p-1 rounded border border-gray-800 outline-0"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            value={user.email}
            placeholder="email"
            className="mb-3 p-1 rounded border border-gray-800 outline-0"
          />
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleInput}
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            className="mb-3 p-1 rounded border border-gray-800 outline-0"
          />
          <label htmlFor="mobileNo">Mobile no:</label>
          <input
            onChange={handleInput}
            type="number"
            name="mobileNo"
            value={user.mobileNo}
            placeholder="mobile"
            className="mb-5 p-1 rounded border border-gray-800 outline-0"
          />
          <button
            type="submit"
            className="py-1 rounded bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default App;
