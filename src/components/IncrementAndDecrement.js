import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const IncrementAndDecrement = ({ amount, IncreaseAmount, decreaseAmount }) => {
  return (
    <div className=" flex gap-5 items-center mt-2 ">
      <button onClick={() => decreaseAmount()}>{<FaMinus />}</button>
      <p className=" text-xl">{amount}</p>
      <button onClick={() => IncreaseAmount()}>{<FaPlus />}</button>
    </div>
  );
};

export default IncrementAndDecrement;
