import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md mt-4 px-3">
      <h1 className="text-4xl font-bold">Sign UP</h1>
      <h2 className="tex-[12px] text-gray-600">
        Please fill in this form to create an account
      </h2>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col text-[14px] my-3"
      >
        <label className="mt-1">First name:</label>
        <input
          onChange={(e) => handleInput(e)}
          value={user.firstName}
          className="text-[13px]  font-light border rounded border-gray-400 outline-none p-1  bg-gray-100"
          type="text"
          name="firstName"
          placeholder="first name"
        />
        <label className="mt-2.5">Last name:</label>
        <input
          onChange={(e) => handleInput(e)}
          value={user.lastName}
          className="text-[13px] font-extralight rounded border border-gray-400 outline-none p-1 bg-gray-100"
          type="text"
          name="lastName"
          placeholder="last name"
        />
        <label className="mt-2.5">Email:</label>
        <input
          onChange={(e) => handleInput(e)}
          value={user.email}
          className="text-[13px]  font-extralight rounded border border-gray-400 outline-none p-1 bg-gray-100"
          type="email"
          name="email"
          placeholder="email"
        />
        <label className="mt-2.5">Password:</label>
        <input
          onChange={(e) => handleInput(e)}
          value={user.password}
          className="text-[13px]  font-extralight rounded border border-gray-400 outline-none p-1 bg-gray-100"
          type="password"
          name="password"
          placeholder="password"
        />

        <label className="mt-2.5">Phone number:</label>
        <input
          onChange={(e) => handleInput(e)}
          value={user.phoneNumber}
          className="text-[13px] font-extralight rounded border border-gray-400 outline-none p-1 bg-gray-100"
          type="phone"
          name="phoneNumber"
          placeholder="9814624133"
          autoComplete="off"
        />

        <p className="mt-2">
          By creating an account you agree to our
          <a href="#" className="text-blue-600">
            {" "}
            Terms & Privacy
          </a>
        </p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded text-white py-1 my-4 cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
