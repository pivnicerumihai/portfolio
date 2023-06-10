import React from "react";
import "./sideButton.css";

export default function sideButton({ buttonName,onChangeScreen }) {

  const changeScreen = (screenName) => {
    onChangeScreen(screenName)
  }

  return (
    <div onClick={changeScreen} className="custom-cursor-hand bg-secondary-transparent hover:bg-secondary-transparent-hover text-secondary border-secondary cursor-pointer border-2 rounded-xl font-bold 2xl:w-72 xl:w-56 py-3  skewedButton">
      <span className="unskew ">{buttonName}</span>
    </div>
  );
}
