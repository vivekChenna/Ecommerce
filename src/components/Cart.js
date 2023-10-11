import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.app.cartItems);
  console.log(cartItems);
  return <div>Cart</div>;
};

export default Cart;
