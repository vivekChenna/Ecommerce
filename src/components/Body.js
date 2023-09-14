import HeroImg from "../assests/HeroImg.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
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
        <div className="mt-2">
          <Link to="/products">
            <button className="px-2 py-2 bg-blue-600 text-[18px] text-white font-medium">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className=" h-96">
        <img src={HeroImg} alt="hero-section-img" className="" />
      </div>
    </div>
  );
};

export default Body;
