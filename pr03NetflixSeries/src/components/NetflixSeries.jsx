import React from "react";
import seriesData from "../api/seriesData.json";
import NetflixCard from "./NetflixCard";

const NetflixSeries = () => {
  return (
    <>
      <h1 className="text-white text-3xl ml-6 my-4 ">Series List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 list-none">
        {seriesData.map((data) => {
          return <NetflixCard key={data.id} data={data} />;
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
