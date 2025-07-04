import React from "react";
import seriesData from "../api/seriesData.json";
import NetflixCard from "./NetflixCard";

const NetflixSeries = () => {
  return (
    <ul className=" mb-5 mt-2 flex flex-col gap-5 items-center justify-center">
      {seriesData.map((data) => {
        return <NetflixCard key={data.id} data={data} />;
      })}
    </ul>
  );
};

export default NetflixSeries;
