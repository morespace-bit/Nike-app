import React from "react";
import { products } from "../Constants";

function PopularProducts(props) {
  const items = products.map((item) => {
    return (
      <div>
        <img src={item.imgURL} alt="" />
        <p className="mt-1 text-xl font-family-palanquin">{item.name}</p>
        <p className="mt-2 text-2xl text-coral-red font-bold">{item.price}</p>
      </div>
    );
  });
  return (
    <>
      <div>
        <h2 className="text-5xl font-bold">
          Our
          <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="w-150 mt-5 text-xl text-slate-400">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-10 mt-10">
        {items}
      </div>
    </>
  );
}

export default PopularProducts;
