import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [data, setData] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  if (!data) {
    return <p>Loading........</p>;
  }

  return (
    <section className="flex flex-col items-center mt-4">
      <header>
        <h1 className="text-4xl font-medium">Let's catch Pokémon</h1>
      </header>
      <ul className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
        <li className="mt-6 shadow-lg p-3 hover:scale-110 hover:transition-all hover:ease-in-out border border-gray-100">
          <figure className="flex items-center justify-center">
            <img
              className="h-24"
              src={data.sprites.other.dream_world.front_default}
              alt=""
            />
          </figure>
          <h1 className="text-center text-3xl font-medium mt-2">{data.name}</h1>
          <div className="flex gap-3 my-3 text-[12px] font-thin">
            <p className="">
              Height: <span className="font-normal">{data.height}</span>
            </p>
            <p>
              Speed:{" "}
              <span className="font-normal">{data.stats[5].base_stat}</span>
            </p>
            <p>
              Weight: <span className="font-normal">{data.weight}</span>
            </p>
          </div>
        </li>

        <li className="mt-6 shadow-lg p-3 hover:scale-110 hover:transition-all border border-gray-100">
          <figure className="flex items-center justify-center">
            <img
              className="h-24"
              src={data.sprites.other.dream_world.front_default}
              alt=""
            />
          </figure>
          <h1 className="text-center text-3xl font-medium mt-2">
            {data.name}{" "}
          </h1>
          <div className="flex gap-3 my-3 text-[12px] font-thin">
            <p className="">
              Height: <span className="font-normal">{data.height}</span>
            </p>
            <p>
              Speed:{" "}
              <span className="font-normal">{data.stats[5].base_stat}</span>
            </p>
            <p>
              Weight: <span className="font-normal">{data.weight}</span>
            </p>
          </div>
        </li>

        <li className="mt-6 shadow-lg p-3 hover:scale-110 hover:transition-all border border-gray-100">
          <figure className="flex items-center justify-center">
            <img
              className="h-24"
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
            />
          </figure>
          <h1 className="text-center text-3xl font-medium mt-2">{data.name}</h1>
          <div className="flex gap-3 my-3 text-[12px] font-thin">
            <p className="">
              Height: <span className="font-normal">{data.height}</span>
            </p>
            <p>
              Speed:{" "}
              <span className="font-normal">{data.stats[5].base_stat}</span>
            </p>
            <p>
              Weight: <span className="font-normal">{data.weight}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Pokemon;
