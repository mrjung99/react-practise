import React from "react";
import clsx from "clsx";

const NetflixCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  console.log(data);
  return (
    <li className="bg-[#242424]  overflow-hidden flex flex-col  text-white leading-4.5 font-light rounded shadow-md hover:shadow-lg transition-shadow">
      <div>
        <img src={img_url} alt="name" className="w-full h-48  object-cover" />
      </div>
      <div className="px-2 flex flex-col gap-1.5 py-2">
        <h1 className="font-semibold text-lg leading-3">Title: {name}</h1>
        <p>
          Rating:{" "}
          <span
            className={clsx(
              "px-2 rounded-lg",
              rating >= 8.5 ? "bg-green-600" : "bg-orange-600"
            )}
          >
            {rating}
          </span>
        </p>
        <p>Cast: {cast.join(", ")}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Descrition: {description}</p>
        <a href={watch_url} target="_blank">
          <button className="bg-blue-700 px-3 py-1.5 my-2 border-none hover:bg-blue-600 rounded cursor-pointer font-medium">
            Watch Now
          </button>
        </a>
      </div>
    </li>
  );
};

export default NetflixCard;
