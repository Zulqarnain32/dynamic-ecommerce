import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  // const [title, setTitle] = useState("");
  const [productName, setProductName] = useState("");
  // const [postData, setPostData] = useState("");
  const [productDes, setProductDes] = useState("");
  const [file, setImage] = useState(null); // Use null to store the file
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productDes) {
      setError("Please fill in all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDes", productDes);
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
        <div className="cr-post-container">
        <form className="post-form" onSubmit={handleSubmit}>
          <h2 className="create-title">Add Product</h2>
          <p>Name</p>
          <input
            type="text"
            className="post-field"
            placeholder="Title"
            onChange={(e) => setProductName(e.target.value)}
          />
          <p> Description</p>
          <textarea
            className="post-field"
            placeholder="Write here..."
            onChange={(e) => setProductDes(e.target.value)}
            rows="7"
          ></textarea>
          <p>Image</p>
          <input
            type="file"
            className="post-field"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <p className="error">{error}</p>
          <button type="submit" className="button btn">
            Add
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;