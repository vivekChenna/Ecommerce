import React from "react";
import SingleProductListView from "./SingleProductListView";

const ListViewProducts = ({ productData }) => {
  return (
    <div className=" flex flex-col gap-4 mt-2">
      {productData.map((product) => {
        return <SingleProductListView productData={product} />;
      })}
    </div>
  );
};

export default ListViewProducts;
