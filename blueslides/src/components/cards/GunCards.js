import React from 'react';
import './GunCard.css';


import Img3 from "../../images/target.png";

const GunCards = props =>{
    return(
       <div className="card text-center">
           <div className="overflow">
                <img scr={Img3} alt="target" className="card-img-top"/>
           </div>
       <div className= "card-body text-dark">
            <h4 className="card-title">Card Tilte</h4>
            <p className="card-text text-secondary">Hihow are you and why do you want tot go the the park and look at the birds?
            </p>
       </div>
       </div>
    );
}

export default GunCards;