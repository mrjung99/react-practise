import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//* get method
export const getPosts = () => api.get("/posts");

//* delete method
export const deletePost = (id) => api.delete(`/posts/${id}`);

//* posts method
export const postData = (post) => api.post("/posts", post);
