import React, { useState } from "react";
import { postData } from "../api/PostApi";

const Form = ({ data, setData }) => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  const handleInputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async (addPost) => {
    try {
      const res = await postData(addPost);
      console.log(res.data);

      if (res.status === 201 && res.data.title !== "" && res.data.body !== "") {
        setData([...data, res.data]);
        setAddPost({ title: "", body: "" });
      } else {
        console.log("Please enter title and body");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <div className="  w-11/12 md:w-auto   bg-gray-800 rounded p-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="bg-gray-200 px-2 py-1 text-[14px] text-gray-900 outline-1 outline-blue-800 rounded"
          value={addPost.title}
          onChange={handleInputchange}
        />
        <input
          type="text"
          placeholder="Body"
          name="body"
          className="bg-gray-200 px-2 py-1 text-[14px] text-gray-900 outline-1 outline-blue-800 rounded"
          value={addPost.body}
          onChange={handleInputchange}
        />
        <button
          type="submit"
          className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition-colors cursor-pointer"
        >
          Add Posts
        </button>
      </form>
    </div>
  );
};

export default Form;
