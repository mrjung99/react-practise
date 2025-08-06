import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ currMovie }) => {
  const { Poster, imdbID } = currMovie;
  return (
    <div className="w-40 h-50 shadow-2xl bg-white flex flex-col items-center">
      {/* Popped out image */}
      <div className="w-32 h-42">
        <img
          src={Poster}
          alt="Movie Poster"
          className="w-full h-full object-cover shadow-lg"
        />
      </div>

      {/* Card content */}
      <div className="text-center w-full mt-2 ">
        <NavLink to={`/movies/${imdbID}`}>
          <button className=" w-full px-2 py-0.5 bg-gray-500 text-white text-[12px] hover:bg-gray-600 transition cursor-pointer">
            Watch Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
