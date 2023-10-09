import React, { useState } from "react";
import Logo from "../assests/gada-electronics-1.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/appSlice";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  const darkMode = useSelector((store) => store.app.DarkMode);

  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();
  return (
    <div
      className={
        darkMode
          ? "flex justify-around px-3 pt-3 pb-3 bg-slate-900 items-center"
          : "flex justify-around px-3 pt-3 pb-3 bg-blue-400 items-center "
      }
    >
      <Link to="/">
        <img
          src={Logo}
          alt="gada-electronics-img"
          width="50"
          className=" rounded-full"
        />
      </Link>

      <div className="flex">
        <ul className="flex gap-12">
          <li>
            <Link className="text-white font-serif text-2xl font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-serif text-2xl font-bold"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-serif text-2xl font-bold"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-serif text-2xl font-bold"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li className=" py-1">
            <Link
              className="text-white font-serif text-2xl font-bold"
              to="#"
              onClick={() => {
                dispatch(toggleMode());
              }}
            >
              {showBtn ? (
                <BsSun
                  fontSize="1.65rem"
                  color="white"
                  onClick={() => setShowBtn(!showBtn)}
                />
              ) : (
                <BsMoon
                  fontSize="1.55rem"
                  color="white"
                  onClick={() => setShowBtn(!showBtn)}
                />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
