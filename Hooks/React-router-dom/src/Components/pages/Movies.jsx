import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../ui/Card";

const Movies = () => {
  const moviesData = useLoaderData();

  return (
    <>
      <ul className="m-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {moviesData.Search.map((currMovie) => {
          return <Card key={currMovie.imdbID} currMovie={currMovie} />;
        })}
      </ul>
    </>
  );
};

export default Movies;
