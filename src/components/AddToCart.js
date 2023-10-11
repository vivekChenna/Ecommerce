import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import IncrementAndDecrement from "./IncrementAndDecrement";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCartItem } from "../redux/appSlice";

const AddToCart = ({ product }) => {
  const { colors, stock } = product;
  const [colorTick, setColorTick] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const IncreaseAmount = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const decreaseAmount = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const AddItemsToCart = () => {
    dispatch(AddToCartItem({ ...product, amount }));
  };

  return (
    // 1st color component
    <div className=" flex flex-col">
      <div className=" mt-2 flex gap-2">
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              className=" rounded-full w-10 h-10"
              style={{ backgroundColor: curColor }}
              onClick={() => {
                setColorTick(curColor);
              }}
            >
              {colorTick === curColor ? (
                <TiTick color="white" fontSize="1.5rem" />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* 2nd component */}
      <div>
        <IncrementAndDecrement
          amount={amount}
          IncreaseAmount={IncreaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </div>

      {/* Add To Cart btn */}

      <Link
        to="/cart"
        className=" border bg-yellow-500 p-2 w-fit rounded-2xl"
        onClick={() => {
          AddItemsToCart();
        }}
      >
        Add To Cart
      </Link>
    </div>
  );
};

export default AddToCart;
