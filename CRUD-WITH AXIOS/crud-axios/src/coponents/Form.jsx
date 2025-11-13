import React, { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

const Form = ({ data, setData, updatePost }) => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  //* get updated data and info
  useEffect(() => {
    updatePost &&
      setAddPost({
        title: updatePost.title || "",
        body: updatePost.body || "",
      });
  }, [updatePost]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async () => {
    const res = await postData(addPost);
    console.log(res.data);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddPost();
      setAddPost({ title: "", body: "" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <div className="bg-gray-800 p-5 rounded w-10/12 md:w-auto mt-8">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col md:flex-row gap-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={addPost.title}
          onChange={handleInputChange}
          className="bg-white px-3 py-1 text-[15px] text-gray-800 outline-0"
        />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={addPost.body}
          onChange={handleInputChange}
          className="bg-white px-3 py-1 text-[15px] text-gray-800 outline-0"
        />
        <button
          type="submit"
          className="bg-green-700 text-gray-200 px-3 py-1 rounded
          hover:bg-green-600 cursor-pointer"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Form;
