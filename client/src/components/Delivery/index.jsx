import React, { useState } from "react";

//component
import DeliveryCarousel from "./DeliveryCarousel";
//import RestaurantCard from "../RestaurantCard"

const Delivery = () => {

  //const [restaurantList, setRestaurantList] = useState([]);

  return (
    <>
    <DeliveryCarousel/>
    <h1 className="mt-4 mb-2 md:text-3xl md:font-semibold">
      Delivery Restaurants in NCR (Delhi)
    </h1>
    <div className="flex justify-between flex-wrap mt-5">
      {/* {restaurantList.map((retaurant) => {
          // <RestaurantCard {...restaurant} key={restaurant._id}/>
        }
      )} */}
    </div>
    </>
  )
 
};

export default Delivery;
