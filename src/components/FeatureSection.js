import React from "react";
import FeaturedItems from "./FeaturedItems";
import { useSelector } from "react-redux";

const FeatureSection = ({ featuredData }) => {
  const darkMode = useSelector((store) => store.app.DarkMode);
  return (
    <div
      className={
        darkMode
          ? " bg-slate-900 flex flex-col justify-center items-center mb-5"
          : "bg-blue-100 flex flex-col justify-center items-center mb-5"
      }
    >
      <p
        className={
          darkMode
            ? "text-white text-4xl mb-3 font-bold"
            : "text-4xl mb-3 font-bold"
        }
      >
        Check Now!
      </p>
      <p className={darkMode ? "text-white text-4xl mb-6" : "text-4xl mb-6"}>
        Our Feature Services
      </p>
      <div className="flex items-center justify-center gap-12 mb-12">
        {featuredData.map((element) => {
          return <FeaturedItems key={element.id} featuredData={element} />;
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
