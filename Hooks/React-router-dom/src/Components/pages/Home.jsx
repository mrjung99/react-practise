import React from "react";
import poster from "../../images/8852084.jpg";

const Home = () => {
  return (
    <div className="h-[calc(100vh-54px)] flex flex-col md:flex-row items-center">
      <div>
        <p className="font-semibold">Explore the latest in movie industries</p>
        <h1 className="text-5xl font-bold">
          Unlimited Movies, TVsShows, & More.
        </h1>
        <p className="mt-5 font-thin">
          Discover the top best movies and dramas with a catchy subtitle like
          your ultimate guide to must-watch content.
        </p>

        <button className="bg-red-700 hover:bg-red-600 rounded-md px-2.5 py-1 font-light text-white cursor-pointer mt-6">
          Explore Now
        </button>
      </div>

      <div>
        <img src={poster} alt="" className="h-80 w-2xs" />
      </div>
    </div>
  );
};

export default Home;
