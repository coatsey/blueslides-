import React from "react";
import "./Jumbo.css";
import img from "../images/narl1.jpg";

export const Jumbo = () => {
  return (
    <div className="card-mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img" src={img} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">The Legend</h5>
            <p className="card-text">
              The Legend himself has been a hunter all of his life. Growing up
              he would go hunting with his family. Now that he has turned into a
              legend he guilds. He had guilded in Utah, Idaho, Wyoming and
              Colorado. He mostly guides for J&J outfitters. He also hunts for
              fun and with is brother dad and oldest son. (He wont hunt with his
              youngest son but will play golf with him ever blue moon)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
