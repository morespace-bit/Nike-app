import React from "react";

function Button(props) {
  return (
    <button
      className="flex flex-row justify-center items-center gap-2 bg-coral-red border-coral-red w-50 py-3 rounded-full
    "
    >
      <span className="text-xl font-bold">Shop now</span>
      <img src={props.img} alt="arrow" className="w-5 h-5" />
    </button>
  );
}

export default Button;
