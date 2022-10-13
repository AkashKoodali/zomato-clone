import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";

//component
import DeliveryCarousel from "./DeliveryCarousel";


const Delivery = () => {

  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "124ksjf435245jv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
    },
    {
      _id: "sdffdsadadsfadfadsfadsf",
      isPro: true,
      isOff: false,
      name: "Master Koii's",
      restaurantReviewValue: "4.6",
      cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
      averageCost: "600",
    },
    {
      _id: "124ksjf435245jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
    },
  ]);

  return (
    <>
    <DeliveryCarousel/>
    <h1 className="mt-4 mb-2 md:text-3xl md:font-semibold">
      Delivery Restaurants in NCR (Delhi)
    </h1>
    <div className="grid gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant._id}/>
        }
      )}
    </div>
    </>
  )
 
};

export default Delivery;
