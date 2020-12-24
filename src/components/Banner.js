import React, {Component} from "react";
import profile from '../assets/profile.png';
import background from '../assets/nyc.png';
import "../index.css"

const Banner = () => {
        return(
            <div>
                <img src = {background} alt = "background" id = "background"/>
                <div id = "banner">
                    <img src = {profile} alt = "profile" id = "profile"/>
                    <h1 id = "name">ALAN P. LAM</h1>
                </div>
                
            </div>
        )
}

export default Banner;