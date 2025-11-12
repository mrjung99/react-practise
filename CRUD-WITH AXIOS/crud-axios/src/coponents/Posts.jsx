import React, { useEffect, useState } from "react";
import { getData } from "../api/PostApi";

const Posts = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await getData();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <section className="max-w-6xl mx-auto">
      <ul className="grid grid-cols-3 gap-7">
        {data.map((currData) => {
          const { id, title, body } = currData;
          return (
            <li
              key={id}
              className="bg-gray-800 flex flex-col text-gray-300 gap-3 p-3 rounded-lg border-l border-gray-500"
            >
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <div className="flex gap-4">
                <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded cursor-pointer">
                  Edit
                </button>
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-1 rounded cursor-pointer">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
