import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const apiData = () => {
  return api.get("?apikey=fdadc275&s=titanic");
};
