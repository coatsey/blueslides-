import React, { Component } from 'react'
import GunCards from './GunCards'
import './GunCard.css';


import Target from '../images/targets.jpg';
import Clean from '../images/gun-cleaning.jpg';
import Ammo from '../images/ammo2.jpg';

class Cards2 extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <GunCards img={Clean} title="Gun Cleaning" body="After the gun has been built and properly sighted then I will clean it and make it like new again." price="For price and Availability please contact me " email="blueslidesoutdoors@gmail.com"/>
                    </div>
                    <div className="col-md-4">
                        <GunCards img={Target} title="Gun Sighting" body="Once its ready then I will take it out and sight it in to the distance of your choosing." price="For price and Availability please contact me " email="blueslidesoutdoors@gmail.com"/>
                    </div>
                    <div className="col-md-4">
                        <GunCards img={Ammo} title="Custom Ammo" body="I take custom ammo orders. I can make them to your liking for your gun." price="For price and Availability please contact me at" email="blueslidesoutdoors@gmail.com"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Cards2;
