import React from "react";
import FeaturedItems from "./FeaturedItems";

const ProductsListing = ({ productData }) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-5 mt-4">
      {productData.map((data) => {
        return <FeaturedItems key={data.id} featuredData={data} />;
      })}
    </div>
  );
};

export default ProductsListing;
