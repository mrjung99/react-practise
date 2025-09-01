import React from "react";
import Card from "./Card";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();

  const movieDetial = useLoaderData();
  const {
    Actors,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Released,
    Title,
    Writer,
    Year,
    imdbRating,
  } = movieDetial;

  return (
    <div className="h-lvh flex  justify-center gap-11 mt-10 mx-8">
      <div className="flex flex-col gap-4">
        <figure>
          <img src={Poster} alt="" className="shadow-2xl" />
        </figure>
        <button className="text-center px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 shadow-2xl cursor-pointer">
          Watch Now
        </button>

        <NavLink to="/movies" className="w-full">
          <button className="w-full text-center px-2 py-1 bg-blue-700 text-white rounded-md hover:bg-blue-800 shadow-2xl cursor-pointer">
            Go Back
          </button>
        </NavLink>
      </div>

      <div className="text-gray-600">
        <h1 className="text-4xl text-gray-800 font-semibold mb-4">{Title}</h1>
        <h2>
          <span className="font-semibold">Genre: </span>
          {Genre}
        </h2>
        <h2>
          <span className="font-semibold">Rating: </span>
          {imdbRating}
        </h2>
        <h2>
          <span className="font-semibold">Actors: </span>
          {Actors}
        </h2>
        <h2>
          <span className="font-semibold">Director: </span>
          {Director}
        </h2>
        <h2>
          <span className="font-semibold">Language: </span>
          {Language}
        </h2>
        <h2>
          <span className="font-semibold">Country: </span>
          {Country}
        </h2>
        <h2>
          <span className="font-semibold">Released Date: </span>
          {Released}
        </h2>
        <h2 className="mt-4">{Plot}</h2>
      </div>
    </div>
  );
};

export default MovieDetail;
