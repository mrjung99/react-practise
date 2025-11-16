import React, { useEffect, useState } from "react";
import { deleteData, getData } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updatePost, setUpdatePost] = useState();

  const getApiData = async () => {
    try {
      const res = await getData();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  //* function to delete posts
  const handleDeletePost = async (id) => {
    try {
      const res = await deleteData(id);
      // console.log(res);
      if (res.status === 200) {
        const updatedData = data.filter((currData) => {
          return currData.id !== id;
        });
        setData(updatedData);
      } else {
        console.log("Failed to delete post: ", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (currData) => {
    setUpdatePost(currData);
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center gap-4">
      <Form
        data={data}
        setData={setData}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
      />
      <ul className="grid md:grid-cols-3 gap-7 p-4">
        {data.map((currData) => {
          const { id, title, body } = currData;
          return (
            <li
              key={id}
              className="bg-gray-800 flex flex-col text-gray-300 gap-3 
              p-3 rounded-lg border-l border-gray-500 hover:outline hover:outline-gray-600 "
            >
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleUpdatePost(currData)}
                  className="bg-green-600 hover:bg-green-500 transition-colors text-white px-4 
                  py-1 rounded cursor-pointer"
                >
                  Edit
                </button>
                <button
                  className="bg-orange-600 hover:bg-orange-500 transition-colors
                  text-white px-4 py-1 rounded cursor-pointer"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
