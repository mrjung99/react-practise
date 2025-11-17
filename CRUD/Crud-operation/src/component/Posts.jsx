import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updatePost, setUpdatePost] = useState();

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const res = await getPosts();
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromApi();
  }, []);

  //* delete post
  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      // console.log(res);

      if (res.status === 200) {
        const newPosts = data.filter((currData) => {
          return currData.id !== id;
        });
        setData(newPosts);
        // console.log("post is deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //* update post
  const handleUpdate = (currData) => {
    setUpdatePost(currData);
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-col gap-4 items-center ">
      <Form
        data={data}
        setData={setData}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
      />
      <ul className="grid md:grid-cols-3 gap-6 text-gray-400 p-3">
        {data.map((currData) => {
          const { id, title, body } = currData;
          return (
            <li
              key={id}
              className="flex flex-col gap-2 bg-gray-800 p-3 border-l 
                rounded hover:outline hover:outline-gray-500"
            >
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <div className="flex gap-6 mt-3">
                <button
                  className="bg-green-600 px-3 py-1 text-gray-800 
                  rounded cursor-pointer hover:bg-green-500 transition-colors"
                  onClick={() => handleUpdate(currData)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-3 py-1 text-gray-800 
                  rounded cursor-pointer hover:bg-red-600 transition-colors"
                  onClick={() => handleDelete(id)}
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
