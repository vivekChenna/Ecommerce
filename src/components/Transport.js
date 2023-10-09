import React from "react";
import { useSelector } from "react-redux";
import { FaTruckFast, FaMoneyCheckDollar } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
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
            ? " flex flex-col items-center justify-center w-80 h-28 bg-white rounded-xl"
            : " bg-slate-800 w-80 h-28 rounded-xl flex flex-col items-center justify-center"
        }
      >
        <FaTruckFast fontSize="2.3rem" color={darkMode ? "black" : "gray"} />
        <p className={darkMode ? "text-black" : "text-white"}>
          Super Fast and Free Delivery
        </p>
      </div>
      <div
        className={
          darkMode
            ? " flex flex-col gap-2 items-center justify-center w-80 py-3 bg-white rounded-xl"
            : " bg-slate-800 w-80 py-3 rounded-xl flex flex-col items-center gap-2 justify-center"
        }
      >
        <div className=" flex flex-col items-center justify-center">
          <MdSecurity fontSize="2.3rem" color={darkMode ? "black" : "gray"} />
          <p className={darkMode ? "text-black" : "text-white"}>
            Non Contact Shipping
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <FaMoneyCheckDollar
            fontSize="2.2rem"
            color={darkMode ? "black" : "gray"}
          />
          <p className={darkMode ? "text-black" : "text-white"}>
            Money Back Guaranteed
          </p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? " flex flex-col items-center justify-center w-80 h-28 bg-white rounded-xl"
            : " bg-slate-800 w-80 h-28  flex items-center flex-col gap-1 justify-center rounded-xl"
        }
      >
        <SiSpringsecurity
          fontSize="2.2rem"
          color={darkMode ? "black" : "gray"}
        />
        <p className={darkMode ? "text-black" : "text-white"}>
          Super Secure Payment System
        </p>
      </div>
    </div>
  );
};

export default Transport;
