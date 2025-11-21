import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-around w-6xl mx-auto font-urbanist">
      <div>
        <p className="text-4xl font-bold leading-normal">
          All your files in one secure location
        </p>
        <p className="">
          We store all your important files in one secure location. Access them
          whenever needed, share and collobrate with your connections.
        </p>
      </div>
      <img src="/public/secure.png" alt="" className="w-xl" />
    </div>
  );
};

export default HeroSection;
