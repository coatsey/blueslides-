import React from 'react';
import './GunCard.css';


const GunCards = props =>{
    return(
       <div className="card text-center">
           <div className="overflow">
                <img scr={props.imgsrc} alt="target" className="card-img-top"/>
           </div>
       <div className= "card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">Hihow are you and why do you want tot go the the park and look at the birds?
            </p>
       </div>
       </div>
    );
}

export default GunCards;