import React, { useEffect, useState } from "react";
import FAQ from "../api/Faq.json";
import Faq from "./Faq";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [isActiveId, setIsActiveId] = useState(false);

  useEffect(() => {
    setData(FAQ);
  }, []);

  const handleToggle = (id) => {
    setIsActiveId((prevId) => {
      return prevId === id ? false : id;
    });
  };

  return (
    <div className="bg-gray-900 h-lvh flex flex-col gap-10 items-center ">
      <h1 className="mt-4 text-4xl text-gray-400">Accordion using React</h1>
      <ul className="w-4xl flex flex-col gap-2">
        {data.map((currData) => {
          return (
            <Faq
              key={currData.id}
              isActive={isActiveId === currData.id}
              onToggle={() => handleToggle(currData.id)}
              currData={currData}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
