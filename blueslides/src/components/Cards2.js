import React, { Component } from 'react'
import GunCards from './GunCards'
import './GunCard.css';


import img1 from '../images/target.png';
import Img2 from '../images/gun-cleaning.jpg';
import img3 from '../images/ammo2.jpg';

class Cards2 extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <GunCards imgsrc={img1} title="Gun Cleaning"/>
                    </div>
                    <div className="col-md-4">
                        <GunCards imgsrc={Img2} title="Gun sighting "/>
                    </div>
                    <div className="col-md-4">
                        <GunCards imgsrc={img3} title="Custom Ammo"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Cards2;
