import { useSelector } from "react-redux";

import React from "react";

const AllProducts = () => {
  const AllProductsData = useSelector((store) => store.app.AllProducts);
  console.log("printing all products data");
  console.log(AllProductsData);
  return <div>hello</div>;
};

export default AllProducts;
