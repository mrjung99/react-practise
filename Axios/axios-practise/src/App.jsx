// import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiData } from "./GetServices";

const App = () => {
  const [data, setData] = useState([]);

  //*normal method
  // const api = "http://www.omdbapi.com/?apikey=fdadc275&s=titanic";

  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get(api);
  //     setData(res.data.Search);
  //     console.log(res.data.Search);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //*professional method
  const getApiData = async () => {
    try {
      const res = await apiData();
      setData(res.data.Search);
      console.log(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-gray-800">
        Axios practise
      </h1>
      <ul className="px-3 mt-3">
        {data.map((d) => {
          return <li key={d.imdbID}>{d.Title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
