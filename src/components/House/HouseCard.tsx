import React from "react";
import { Accommodation } from "../../Data/Data";
import "./House.scss";
import { Link } from "react-router-dom";

interface HousePropos {
  cards: Accommodation[];
}

const HouseCard = ({ cards }: HousePropos) => {
  console.log(cards);

  return (
    <>
      {cards.map((card) => (
        <div className="block" key={card.id}>
          <div className="card" >
            <Link to={`logement/${card.id}`}>
              <img src={card.cover} alt="prictures" />
              <p className="titre_card"> {card.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default HouseCard;
