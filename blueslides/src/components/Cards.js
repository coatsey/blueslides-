import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Hunting photos"
              label="Hunting"
              path="/hunting"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
