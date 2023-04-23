import React from "react";
import "./Silder.scss";

import bg from "../../assets/Background.png";

const Slider = () => {
  return (
    <div className="slider">
 
      <img src={bg} alt="slider" />
      <div className="titre">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Slider;
