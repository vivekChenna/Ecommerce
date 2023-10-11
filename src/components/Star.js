import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ reviews, stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className=" text-yellow-600" />
        ) : stars >= number ? (
          <FaStarHalfAlt className=" text-yellow-600" />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className=" flex items-center">
      {ratingStar}
      <p>( {reviews} customers reviews)</p>
    </div>
  );
};

export default Star;
