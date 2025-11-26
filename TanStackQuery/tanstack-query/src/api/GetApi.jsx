import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const res = await api.get("/posts?_start=0&_limit=6");
  return res.status === 200 ? res.data : [];
};
