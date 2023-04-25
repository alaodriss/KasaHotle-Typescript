import React from "react";
import { MOCK_PROJECTS } from "../../Data/MockData";
import "./House.scss";
import HouseCard from "./HouseCard";

const House = () => {
  // console.log(MOCK_PROJECTS)
  return (
    <div className="bg_card">
      <HouseCard cards={MOCK_PROJECTS} />
    </div>
  );
};

export default House;
