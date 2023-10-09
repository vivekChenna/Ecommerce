import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();

  let id = location.pathname;
  console.log(id.substr(10));

  async function getProductData() {
    const response = await fetch(
      `https://api.pujakaitem.com/api/products?id=${id.substr(10)}`
    );
    const jsonData = await response.json();
    console.log("printing single product data");
    console.log(jsonData);
  }

  useEffect(() => {
    getProductData();
  });

  return <div>this is the single product</div>;
};

export default SingleProduct;
