import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/elk.jpeg"
              text="Hunting, guiding photos and videos"
              label="Hunting"
              path="/hunting"
            />
            <CardItem
              src="images/grandpa fish.jpg"
              text="Fishing"
              label="Fishing"
              path="/fishing"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/ammo.jpg"
              text="Ammo"
              label="Ammo"
              path="/ammo"
            />
             <CardItem
              src="images/3006.jpg"
              text="Guns"
              label="Guns"
              path="/guns"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
