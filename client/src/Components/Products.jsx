import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/products")
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="products-container">
        <div>
          {posts.map((product) => (
            <div key={product._id} className="individual-product"> 
               <h2 className="post-title">{product.title}</h2>
               <p className="post-para">{product.postData}</p>
               <img src={`http://localhost:5000/uploads/${product.image}`} alt="img" />             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;