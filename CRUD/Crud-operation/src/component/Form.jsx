import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

const Form = ({ data, setData, updatePost, setUpdatePost }) => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  //* get updated info
  useEffect(() => {
    if (updatePost) {
      setAddPost({
        title: updatePost.title || "",
        body: updatePost.body || "",
      });
    }
  }, [updatePost]);

  const isUpdatePostEmpty = !updatePost || Object.keys(updatePost).length === 0;

  const handleInputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //* add data
  const addPostData = async (addPost) => {
    try {
      const res = await postData(addPost);
      // console.log(res.data);

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

  //* update data
  const updatePostData = async () => {
    try {
      const res = await updateData(updatePost.id, addPost);
      // console.log(res);
      if (res.status === 200 && res.data.title !== "" && res.data.body !== "") {
        setData((prev) => {
          return prev.map((currData) => {
            return res.data.id === currData.id ? res.data : currData;
          });
        });
        setAddPost({ title: "", body: "" });
        setUpdatePost(null);
      } else {
        console.lof("Please enter title and body");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //* form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add Post") {
      addPostData();
    } else if (action === "Update Post") {
      updatePostData();
    }
  };

  //* handle cancel button
  const handleCancel = () => {
    setUpdatePost(null);
    setAddPost({ title: "", body: "" });
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
          value={isUpdatePostEmpty ? "Add Post" : "Update Post"}
        >
          {isUpdatePostEmpty ? "Add Post" : "Update Post"}
        </button>

        {updatePost && (
          <button
            className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-400 transition-colors 
            cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
