import { jsx } from "react/jsx-runtime";

const key = "react-todo";

export const getLocalStorageToDoData = () => {
  const data = localStorage.getItem(key);
  if (!data) return [];

  return JSON.parse(data);
};

export const setLocalStorageToDoData = (task) => {
  return localStorage.setItem(key, JSON.stringify(task));
};
