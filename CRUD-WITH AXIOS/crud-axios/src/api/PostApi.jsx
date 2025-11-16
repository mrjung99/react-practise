import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//*get posts
export const getData = () => api.get("/posts");

//*delete posts
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

//* add post
export const postData = (post) => {
  return api.post("/posts", post);
};

//*update post (put method)
export const updatePostData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
