import React from "react";
import { Accommodation } from "../../Data/Data";

import "./House.scss";

interface HousePropos {
  cards: Accommodation[];
}

const HouseCard = ({ cards }: HousePropos) => {
  // console.log(cards.map((crs) => crs.title));

  return (
    <div className="block">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.cover} alt="prictures" />
          <p className="titre_card"> {card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HouseCard;
