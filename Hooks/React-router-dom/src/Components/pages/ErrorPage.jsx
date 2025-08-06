import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <h1 className="text-5xl font-semibold">Oops !</h1>
      <h2 className="text-2xl mt-6">
        The page you're trying to access is not found.
      </h2>
      <div className="mt-12 flex gap-4">
        <button
          onClick={handleGoBack}
          className="bg-blue-800 text-white py-1.5 px-3 rounded-md cursor-pointer hover:bg-blue-900"
        >
          Go Back
        </button>

        <NavLink to="/">
          <button className="bg-blue-800 text-white py-1.5 px-3 rounded-md cursor-pointer hover:bg-blue-900">
            Go to home page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
