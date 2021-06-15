import React, { Component } from 'react'
import GunCards from './GunCards'

class Cards2 extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <GunCards />
                    </div>
                    <div className="col-md-4">
                        <GunCards />
                    </div>
                    <div className="col-md-4">
                        <GunCards />
                    </div>

                </div>
            </div>
        );
    }
}

export default Cards2;
