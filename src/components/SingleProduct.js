import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FormatPrice } from "../helpers/FormatPrice";
import { useSelector } from "react-redux";
import Star from "./Star";
import AddToCart from "./AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const darkMode = useSelector((store) => store.app.DarkMode);

  const [productData, setProductData] = useState({});
  const [showImg, setShowImg] = useState([]);

  async function getProductData() {
    const response = await fetch(
      `https://api.pujakaitem.com/api/products?id=${id}`
    );
    const jsonData = await response.json();
    console.log("printing single product data");
    console.log(jsonData);
    console.log("printing object.values");
    setProductData(jsonData);
  }

  useEffect(() => {
    getProductData();
  }, []);

  if (Object.keys(productData).length === 0) {
    return <Spinner />;
  }

  function filterImages(imgData, id) {
    const result = imgData.filter((obj) => {
      return obj.id === id;
    });
    setShowImg(result);
  }

  return (
    <div
      className={
        darkMode
          ? " max-w-7xl  mx-auto border rounded-2xl py-2 px-3 bg-slate-900 border-white flex items-center justify-between mt-2"
          : " max-w-7xl  mx-auto border rounded-2xl p-3  border-black flex items-center justify-between mt-2"
      }
    >
      <div className=" flex flex-col">
        <div className=" flex items-center gap-4">
          <div className=" flex flex-col gap-1">
            <img
              src={productData?.image[0]?.url}
              width="200"
              height="200"
              alt=""
              onClick={() =>
                filterImages(productData.image, productData.image[0].id)
              }
              className="cursor-pointer"
            />
            <img
              src={productData?.image[1]?.url}
              width="200"
              height="200"
              alt=""
              onClick={() =>
                filterImages(productData.image, productData.image[1].id)
              }
              className=" cursor-pointer"
            />
            <img
              src={productData?.image[2]?.url}
              width="200"
              height="200"
              alt=""
              onClick={() =>
                filterImages(productData.image, productData.image[2].id)
              }
              className=" cursor-pointer"
            />
            <img
              src={productData?.image[3]?.url}
              onClick={() =>
                filterImages(productData.image, productData.image[3].id)
              }
              width="200"
              height="200"
              alt=""
              className=" cursor-pointer"
            />
          </div>
          <div>
            {showImg.length === 0 ? (
              <img
                src={productData?.image[0].url}
                width="300"
                height="300"
                alt=""
              />
            ) : (
              <img src={showImg[0]?.url} width="400" height="400" alt="" />
            )}
          </div>
        </div>
      </div>
      <div className=" flex flex-col max-w-xl">
        <div className={darkMode ? "text-white" : "text-black"}>
          MRP:
          <del>{FormatPrice(productData?.price + 25000)}</del>
        </div>
        <p
          className={
            darkMode ? "text-white text-4xl font-bold" : "text-4xl font-bold"
          }
        >
          {productData.name}
        </p>
        <p className={darkMode ? "text-white" : "text-black"}>
          {productData.description}
        </p>
        <p
          className={darkMode ? "text-white font-bold" : "font-bold"}
        >{`Deal of the Day :${FormatPrice(productData?.price)}`}</p>

        <Star reviews={productData.reviews} stars={productData?.stars} />
        <p>
          Available:
          {productData.stock > 0 ? (
            <span> In Stock</span>
          ) : (
            <span> Not In Stock</span>
          )}
        </p>
        <p>
          Brand:{" "}
          <span className=" font-bold font-sans">{productData?.company}</span>
        </p>
        <hr className=" border border-black" />
        {productData.stock > 0 && <AddToCart product={productData} />}
      </div>
    </div>
  );
};

export default SingleProduct;
