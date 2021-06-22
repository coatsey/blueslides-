import React from "react";
import "./Jumbo.css";
import img from "../images/part0.jpg";

export const FishJumbo = () => {
  return (
    <div className="card-mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img" src={img} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Fishing</h5>
            <p className="card-text">
              Fishing is one of my favorite things to do. Growing up I was able
              to fish a lot with my dad (pictured here) and my brothers. To this day we still
              get together every year to go fishing. We fly fish and I even tie
              my oeen flies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishJumbo;
