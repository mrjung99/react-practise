import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../api/GetApi";

const Data = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: getPosts,
    staleTime: 5000,
  });

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
    <div>
      <ul>
        {data?.map((currData) => {
          return (
            <li key={currData.id}>
              <p>{currData.title}</p>
              <p>{currData.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Data;
