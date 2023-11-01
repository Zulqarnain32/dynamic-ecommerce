import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalProducts,setTotalProducts] = useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/products")
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

    const filteredProducts = products.filter((product) => {
      return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    });

  useEffect(() => {
    setTotalProducts(filteredProducts.length);
  }, [filteredProducts]);
  return (
    <>
      <div className="search-div">
        <input
          type="text"
          className="search-field"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p className="total-qty">{`${totalProducts == 0 ? `No Product found`:`Total Products are ${totalProducts}`}`}</p>
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product._id} className="individual-product">
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              className="product-img"
            />
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-des">{product.productDes}</p>
            <button className="detail">Detail</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
