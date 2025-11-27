import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPosts } from "../api/GetApi";

const Data = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data", pageNumber],
    queryFn: () => getPosts(pageNumber),
    // staleTime: 1000,
    //gcTime: 20000,
    //* polling refers to the techniques of fetching data from an api at regular intervals
    //* to keep the ui up-to-date with the latest information || refetchInterval and
    // *refetchIntervalInBackground are used for pooling
    // refetchInterval:1000, -> this only update the data when the user interact with page or data
    // refetchIntervalInBackground:true -> this will update the data even in background
    placeholderData: keepPreviousData, //this will restrict the component being re-render while pagination
  });

  const handleroundedbutton = (e) => {
    setPageNumber(Number(e.target.textContent) - 1);
    console.log(Number(e.target.textContent));
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error: {error.message || "Something went wrong!"}</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ul className="w-10/12 mx-auto grid grid-row-3 gap-3">
        {data?.map((currData) => {
          return (
            <li key={currData.id} className="bg-gray-700 p-3">
              <p>
                <span>ID: </span>
                {currData.id}
              </p>
              <p>
                <span>Title: </span>
                {currData.title}
              </p>
              <p>
                <span>Body: </span>
                {currData.body}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 mt-8">
        <button
          className="bg-green-700 hover:bg-green-800 py-1 px-3 text-white cursor-pointer"
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          Prev
        </button>
        <button
          className="bg-gray-200 text-gray-900 rounded-full px-2 py-1 hover:bg-gray-300 
          cursor-pointer"
          onClick={() => setPageNumber(0)}
        >
          1
        </button>
        <button
          className="bg-gray-200 text-gray-900 rounded-full px-2 py-1 hover:bg-gray-300 
          cursor-pointer"
          onClick={() => setPageNumber(3)}
        >
          2
        </button>
        <button
          className="bg-gray-200 text-gray-900 rounded-full px-2 py-1 hover:bg-gray-300 
          cursor-pointer"
          onClick={() => setPageNumber(6)}
        >
          3
        </button>
        <button
          className="bg-gray-200 text-gray-900 rounded-full px-2 py-1 hover:bg-gray-300 
          cursor-pointer"
          onClick={() => setPageNumber(9)}
        >
          4
        </button>
        <p>......</p>
        {/* <p>{pageNumber / 3 + 1}</p> */}
        <button
          className="bg-green-700 hover:bg-green-800 py-1 px-3 text-white cursor-pointer"
          onClick={() => setPageNumber((prev) => prev + 3)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Data;
