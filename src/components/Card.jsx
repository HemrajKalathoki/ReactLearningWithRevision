import React from "react";
import Button from "./Button";

function Card({ title, details, imageurl }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-300 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src={imageurl}
          alt="coffee image"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm">{details}</p>
          <Button title={"Buy Now"} cstyle={"bg-blue-500"}/>
        </div>
      </div>
    </>
  );
}

export default Card;
