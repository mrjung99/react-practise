import React from "react";

const Hero = () => {
  return (
    <section className="realtive min-h-screen flex items-center overflow-hidden p-6">
      <div className="absolute inset-0">
        <img
          src="./hero.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        {/* <div className="absolute inset-0 bg-linear-to-b from-background/20 via-backgroud/80 to-background"></div> */}
      </div>
      <div className="asolute z-10 flex flex-col items-center justify-center gap-10">
        <div className="">
          <p>
            Hi, I'm Pedro Machado — a software engineer specializing in React,
            Next.js, and TypeScript. I build scalable, performant web
            applications that users love.
          </p>
        </div>
        <div className="h-96">
          <img src="./new.jpeg" alt="" className="h-full opacity-75" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
