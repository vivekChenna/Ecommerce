import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../helpers/FormatPrice";

const FeaturedItems = ({ featuredData }) => {
  return (
    <div className="bg-white border  border-black rounded-lg">
      <Link to={`/products/${featuredData.id}`}>
        <div className=" w-60 px-2 py-3 relative">
          <p className="absolute top-4 font-bold font-sans right-3 bg-white text-black">
            {featuredData.category}
          </p>
          <img className=" w-full" src={featuredData?.image} alt="item-image" />
          <div className="flex justify-between">
            <p>{featuredData?.name}</p>
            <p className=" text-orange-700">
              {FormatPrice(featuredData?.price)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedItems;
