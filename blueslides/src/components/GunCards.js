import React from "react";
import "./GunCard.css";

const GunCards = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.body}</p>
        </div>
        <div className="card-price">
          <p>{props.price}</p>
        </div>
        <div className="card-email">
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default GunCards;
