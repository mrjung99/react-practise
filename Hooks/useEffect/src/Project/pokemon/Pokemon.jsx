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

  return (
    <section className="flex flex-col items-center mt-4">
      <header>
        <h1 className="text-4xl font-medium">Let's catch Pokémon</h1>
      </header>
      <ul className="mt-6 shadow-2xl p-3 hover:scale-110 hover:transition-all">
        {data ? (
          <li>
            <figure className="flex items-center justify-center">
              <img
                className="h-24"
                src={data.sprites.other.dream_world.front_default}
                alt=""
              />
            </figure>
            <h1 className="text-center text-3xl font-medium mt-2">
              {data.name}
            </h1>
            <div className="flex gap-3 my-3 text-[12px] font-thin">
              <p className="">
                Height: <span className="font-semibold">{data.height}</span>
              </p>
              <p>
                Speed:{" "}
                <span className="font-semibold">{data.stats[5].base_stat}</span>
              </p>
              <p>
                Weight: <span className="font-semibold">{data.weight}</span>
              </p>
            </div>
          </li>
        ) : (
          <p>Loading........</p>
        )}
      </ul>
    </section>
  );
};

export default Pokemon;
