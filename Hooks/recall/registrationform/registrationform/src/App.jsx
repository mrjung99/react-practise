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
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="first name"
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          onChange={handleInput}
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="last name"
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleInput}
          type="email"
          name="email"
          value={user.email}
          placeholder="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleInput}
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
        />
        <label htmlFor="mobileNo">Mobile no:</label>
        <input
          onChange={handleInput}
          type="number"
          name="mobileNo"
          value={user.mobileNo}
          placeholder="mobile"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default App;
