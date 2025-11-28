import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetail } from "../api/GetApi";

const DataDetail = () => {
  const param = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: () => getDetail(param.id),
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Error: {error.message || "Something went wrong!"}</h1>
      </div>
    );
  }

  return (
    <section className="min-h-[80vh] p-8">
      <div className="bg-gray-700 w-8/12 mx-auto flex flex-col gap-8 p-5">
        <div className="flex flex-col gap-3">
          <p>Id: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
        <NavLink to="/data">
          <button
            className="bg-orange-700 px-3 py-1 rounded-md cursor-pointer hover:bg-orange-800
            transition-colors"
          >
            Go Back
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default DataDetail;
