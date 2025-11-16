import React, { useEffect, useState } from "react";
import { postData, updatePostData } from "../api/PostApi";

const Form = ({ data, setData, updatePost, setUpdatePost }) => {
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

  let isEmpty = !updatePost || Object.keys(updatePost).length === 0;

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
    if (res.status === 201 && res.data.title !== "" && res.data.body !== "") {
      setData([...data, res.data]);
      setAddPost({ title: "", body: "" });
    } else {
      console.log("Please enter the title and body");
    }
  };

  const updateData = async () => {
    try {
      const res = await updatePostData(updatePost.id, addPost);
      if (res.status === 200 && res.data.title !== "" && res.data.body !== "") {
        setData((prevData) => {
          return prevData.map((currData) => {
            return currData.id === res.data.id ? res.data : currData;
          });
        });
      } else {
        console.log("Please enter the title and body");
      }

      setAddPost({ title: "", body: "" });
      setUpdatePost({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Add Post") {
      addPostData();
    } else if (action === "Update Post") {
      updateData();
    }
  };

  const handleCancel = () => {
    setAddPost({ title: "", body: "" });
    setUpdatePost && setUpdatePost(null);
  };

  return (
    <div className="bg-gray-800 p-5 rounded w-10/12 md:w-auto mt-8 ">
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
          value={isEmpty ? "Add Post" : "Update Post"}
          className="bg-green-700 text-gray-200 px-3 py-1 rounded
          hover:bg-green-600 cursor-pointer transition-colors"
        >
          {isEmpty ? "Add Post" : "Update Post"}
        </button>
        {!isEmpty && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-600 text-gray-200 px-3 py-1 rounded
              hover:bg-gray-500 cursor-pointer transition-colors"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
