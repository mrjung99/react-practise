import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

//get posts
export const getPost = (page) => {
  return api.get(`posts?_limit=10&_page=${page}`);
};
