import React, { Component } from 'react';
import ART from "../data/art";
const Art = props => {
    const {title, image, description} = props.art;

    return (
        <div>
            <h1 className = "displayName">{title}</h1>
            <img className = "displayImage" src={image} alt = 'profile'/>
            <p className = "displayDescription">{description}</p>
        </div>
    )
    
}


class ArtBanner extends Component{

    constructor(){
        super();
        this.state = {artID: 0};
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    slideTo(direction, ID){
        var targetedButton;
        var slideOut;
        var clearClass;
        var slideIn;
        if(direction === "left"){
            targetedButton = "displayButtonLeft";
            slideOut = "slideableLOut";
            clearClass = "slideableRIn";
            slideIn= "slideableLIn";
        }
        else{
            targetedButton = "displayButtonRight";
            slideOut = "slideableROut";
            clearClass = "slideableLIn";
            slideIn = "slideableRIn";
        }
    
        document.getElementsByClassName(targetedButton)[1].disabled = true;
            document.getElementById("portrait").classList.add(slideOut);
            setTimeout(() => {
                document.getElementById("portrait").classList.remove(slideOut);
                document.getElementById("portrait").classList.remove(clearClass);
                if(direction === "left"){
                    ID === 0 ? this.setState({artID: 4}) : this.setState({artID: this.state.artID-1});
                }
                else{
                    ID === 4 ? this.setState({artID: 0}) : this.setState({artID: this.state.artID+1});
                }
                document.getElementById("portrait").classList.add(slideIn);
                },400);
    
        setTimeout(() => {
            document.getElementsByClassName(targetedButton)[1].disabled = false;
            },700);
    }

    scrollLeft(){
        this.slideTo("left", this.state.artID);
    }

    scrollRight(){
        this.slideTo("right", this.state.artID);
    }

    render(){
        return(
            <div>
                <div className = "displayContainers">
                    <button className= "displayButtonLeft btn btn-secondary btn-lg" onClick = {this.scrollLeft}>&#8249;</button>
                    <button className= "displayButtonRight btn btn-secondary btn-lg" onClick = {this.scrollRight}>&#8250;</button>
                    <div id = "portrait">
                            <Art art={ART[this.state.artID]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtBanner;