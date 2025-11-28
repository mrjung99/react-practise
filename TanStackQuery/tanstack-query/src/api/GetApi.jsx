import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : [];
};

//get the current data
export const getDetail = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.status === 200 ? res.data : [];
};
