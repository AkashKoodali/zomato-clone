import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
//import Razorpay from 'razorpay';

//layout
import CheckoutLayout from "../layouts/Checkout.layout";

//component
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

//redux
import { useSelector } from 'react-redux'

const Checkout = () => {

  const cart = useSelector((globalState) => globalState.cart.cart);

  //const user = useSelector((globalState) => globalState.user.user);

  const address = [
    {
      name: "Home",
      address: "Palama Street, 123 Main",
    },
    {
      name: "Work",
      address: "123 Main Street, CP",
    },
  ];

  const payNow = () => {
    let options = {
      key: "rzp_test_bhzAswyIgdOwP0",
      amount:
        cart.reduce((total, current) => total + current.totalPrice, 0) * 100,
      currency: "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      handler: (data) => {
        alert("Payment Successfull");
        console.log(data);
      },
      prefill: {
        name: "Akash",
        email: "text@gmail.com",
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    //<>{cart.length && (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">CheckOut</h1>
      <div className="w-full md:w-3/5 rounded-lg drop-shadow-2xl bg-white flex flex-col items-center py-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Domono's Pizza</h4>
            <small>GT World Mall, Magadi Road, NCR Noida</small>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            { cart.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full md:w3/5 items-center">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button
          onClick={payNow}
          className="flex items-center gap-2 justify-center my-4 md:my-8 px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg"
        >
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
   // )}
    //</>
  );
};

export default CheckoutLayout(Checkout);
