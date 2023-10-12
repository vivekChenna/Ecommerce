import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../helpers/FormatPrice";

const SingleProductListView = ({ productData }) => {
  const desc = `${productData?.description.substr(0, 170)}...`;

  return (
    <div className=" flex justify-around border border-yellow-700 p-2">
      <div className="  w-60 ">
        <img className=" w-full" src={productData?.image} alt="item-image" />
      </div>

      <div className=" max-w-lg">
        <p className=" font-bold">{productData?.name}</p>
        <p>{FormatPrice(productData?.price)}</p>
        <p>{desc}</p>
        <Link
          className=" border bg-green-500 p-1 text-white"
          to={`/products/${productData.id}`}
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default SingleProductListView;
