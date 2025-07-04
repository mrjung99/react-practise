import React from "react";

const NetflixCard = ({ data }) => {
  console.log(data);
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  console.log(data);
  return (
    <li className="bg-[#242424] w-[60%] text-white px-3 py-3  shadow-md rounded-xl">
      <div className="flex flex-col ">
        <div>
          <img src={img_url} alt="name" className="rounded-xl object-cover" />
        </div>
        <div className="mt-1">
          <h1 className="text-blue-500 font-semibold">
            <span className="text-xl text-orange-600 font-semibold">
              Title:{" "}
            </span>
            {name}
          </h1>
        </div>
        <div>
          <span>Rating: {rating}</span>
        </div>
        <div>
          <span>Cast: {cast.join(", ")}</span>
        </div>
        <div>
          <span>Genre: {genre.join(", ")}</span>
        </div>
        <div>
          <p>Description: {description}</p>
        </div>
        <div className="mt-2 mb-1">
          <a href={watch_url} target="_blank">
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-2 py-1 rounded-lg cursor-pointer outline-none border-none">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default NetflixCard;
