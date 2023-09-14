import React from "react";
import Logo from "../assests/gada-electronics-1.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around px-3 py-2 bg-blue-400 items-center">
      <Link to="/">
        <img
          src={Logo}
          alt="gada-electronics-img"
          width="50"
          className=" rounded-full"
        />
      </Link>

      <div>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
