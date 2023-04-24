import React from "react";
import "./Aprops.scss";
import bgA_ from "../../assets/apropos_b.png";
import PageFaq from "../../components/Faq/Faq";
const Aprops = () => {
  return (
    <div>
      <div className="slider_Aprops">
        <img src={bgA_} alt="slider" />
      </div>
      <PageFaq />
    </div>
  );
};

export default Aprops;
