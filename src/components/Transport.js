import React from "react";
import { useSelector } from "react-redux";

const Transport = () => {
  const darkMode = useSelector((store) => store.app.DarkMode);
  return (
    <div
      className={
        darkMode
          ? "flex flex-wrap items-center justify-center gap-4 bg-slate-900"
          : " flex flex-wrap items-center justify-center gap-4"
      }
    >
      <div
        className={
          darkMode
            ? " flex items-center justify-center w-80 h-28 bg-white rounded-xl"
            : " bg-slate-800 w-80 h-28 rounded-xl flex items-center justify-center"
        }
      >
        <p className={darkMode ? "text-black" : "text-white"}>
          Super Fast and Free Delivery
        </p>
      </div>
      <div
        className={
          darkMode
            ? " flex flex-col items-center justify-center w-80 h-28 bg-white rounded-xl"
            : " bg-slate-800 w-80 h-28 rounded-xl flex flex-col items-center justify-center"
        }
      >
        <div>
          <p className={darkMode ? "text-black" : "text-white"}>
            Non Contact Shipping
          </p>
        </div>
        <div>
          <p className={darkMode ? "text-black" : "text-white"}>
            Money Back Guaranteed
          </p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? " flex items-center justify-center w-80 h-28 bg-white rounded-xl"
            : " bg-slate-800 w-80 h-28  flex items-center justify-center rounded-xl"
        }
      >
        <p className={darkMode ? "text-black" : "text-white"}>
          Super Secure Payment System
        </p>
      </div>
    </div>
  );
};

export default Transport;
