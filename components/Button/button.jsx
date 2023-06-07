import React from "react";
import "./Button.css";

export default function Button({ buttonName, mt,ml }) {
  return (
    <div className={`relative mt-[${mt}%] ml-[${ml}%]`}>
              <div className="bg-secondary-transparent hover:bg-secondary-transparent-hover text-secondary border-secondary cursor-pointer border-2 rounded-xl font-bold py-3 px-20 skewedButton">
        <span className="unskew">{buttonName}</span>
      </div>
    </div>
  );
}
