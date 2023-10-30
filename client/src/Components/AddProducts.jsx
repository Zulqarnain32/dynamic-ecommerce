import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [postData, setPostData] = useState("");
  const [file, setImage] = useState(null); // Use null to store the file
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !postData) {
      setError("Please fill in all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("postData", postData);
    formData.append("file", file);

    axios
      .post("http://localhost:5000/product/add-products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="create-post-container">
        <form className="post-form" onSubmit={handleSubmit}>
          <h2 className="create-title">Create Post</h2>
          <p>Title</p>
          <input
            type="text"
            className="post-field"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Add Text</p>
          <textarea
            className="post-field"
            placeholder="Write here..."
            onChange={(e) => setPostData(e.target.value)}
            rows="10"
          ></textarea>
          <p>Image</p>
          <input
            type="file"
            className="post-field"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <p className="error">{error}</p>
          <button type="submit" className="button btn">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;