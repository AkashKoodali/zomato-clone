import React from "react";

// components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-2" id={props.target}>
        <h2
          className="bg-white top-0 w-full px-2 py-3 z-10 sticky text-xl font-semibold text-gray-800"
        >
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((each, index) => (
            <FoodItem key={index} _id={each} {...each} />
          ))}
        </div>
      </div>
      <div className="mt-4">
            <hr />
          </div>
    </>
  );
};

export default FoodList;