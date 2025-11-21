import React from "react";

const HeroSection = () => {
  return (
    <div className="h-lvh flex flex-col md:flex-row items-center p-3 md:px-12 font-urbanist">
      <div className="order-2 md:order-1">
        <p className="text-3xl md:text-4xl font-bold leading-normal">
          All your files in one secure location
        </p>
        <p className="">
          We store all your important files in one secure location. Access them
          whenever needed, share and collobrate with your connections.
        </p>
      </div>

      <img
        src="/public/secure.png"
        alt=""
        className="order-1 md:order-2  w-xl"
      />
    </div>
  );
};

export default HeroSection;
