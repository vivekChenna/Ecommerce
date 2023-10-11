import HeroImg from "../assests/HeroImg.png";
import { Link } from "react-router-dom";
import Transport from "./Transport";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import FeatureSection from "./FeatureSection";
import { useDispatch } from "react-redux";
import { AllProductsData } from "../redux/appSlice";

const Body = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const dispatch = useDispatch();

  async function getProductsData() {
    try {
      const response = await fetch(`https://api.pujakaitem.com/api/products`);
      const jsonData = await response.json();
      console.log(jsonData);
      dispatch(AllProductsData(jsonData));

      const filterData = jsonData.filter((data) => {
        return data?.featured === true;
      });
      console.log(filterData);
      setFeaturedData(filterData);
    } catch (error) {
      console.log("something went wrong while fetching the data");
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <div className="flex items-center max-w-7xl mx-auto p-3">
        <div>
          <h1 className=" font-serif text-6xl text-blue-700 font-medium">
            Shop Today, Smile Tomorrow.
          </h1>
          <p className="text-xl font-mono text-gray-400">
            Gada Electronics, your premier destination for all things tech.
          </p>
          <p className="text-xl font-mono text-gray-400">
            Explore a wide range of cutting-edge gadgets, electronics, and
            accessories while enjoying a seamless shopping experience that
            combines innovation with convenience.{" "}
          </p>
          <p className="text-xl font-mono text-gray-400">
            Upgrade your lifestyle with Gada Electronics today.
          </p>
          <div className="mt-2 transition-all ease-in-out delay-200">
            <Link to="/shop">
              <button className="px-2 py-2 bg-blue-600 text-[18px] text-white font-medium active:scale-[0.89]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className=" h-96 overflow-hidden transition-all delay-1000 ease-in-out cursor-pointer">
          <img
            src={HeroImg}
            alt="hero-section-img"
            className="hover:scale-[1.1]"
          />
        </div>
      </div>
      {featuredData.length === 0 ? (
        <Spinner />
      ) : (
        <FeatureSection featuredData={featuredData} />
      )}
      <Transport />
    </>
  );
};

export default Body;
