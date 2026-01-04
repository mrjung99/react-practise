import React, { useEffect, useState } from "react";
import { getPost } from "../api/servicesApi";
import Card from "./Card";
import Loading from "./Loading";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPost(page);
        if (res.status === 200) {
          setData((prev) => [...prev, ...res.data]);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoader(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-800 py-5">
      <h1 className="text-center text-4xl font-semibold text-gray-200">
        Infinite Scroll
      </h1>

      <ul className="grid grid-cols-1 gap-5 p-3 md:grid-cols-3 w-10/12 mx-auto">
        {data.map((currData, id) => {
          return <Card key={id} data={currData} loader={loader} />;
        })}
      </ul>

      {loader && <Loading />}
    </div>
  );
};

export default InfiniteScroll;
