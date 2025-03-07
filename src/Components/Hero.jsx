import React from "react";
import Button from "./Button";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import { arrowRigt } from "../assets/icons";
function Hero(props) {
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col  gap-10 max-container pl-15"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-start pt-28">
          <h2 className="text-xl font-family-montserrat text-coral-red">
            Our summer collections
          </h2>
          <p className="mt-10 font-family-palanquin text-8xl font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
              The New Arrival
            </span>
            <br />
            <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
          </p>
          <p className="font-family-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover new shoes, quality comfort, and innovation for your active
            life.
          </p>
          <Button />
        </div>
      </section>
    </>
  );
}

export default Hero;
