import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : [];
};

//get the individual data
export const getDetail = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.status === 200 ? res.data : [];
};

//delete post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//update post
export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "Data updated" });
};
