import React, { Component } from 'react';
import ART from "../data/art";
const Art = props => {
    const {title, lazyImage, image, description} = props.art;

    return (
        <div>
            <h1 className = "displayName">{title}</h1>
            <img id = "artImage" className = "displayImage lazy-img" src = {lazyImage} data-src = {image} alt = 'Image not found.'/>
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

    componentDidMount(){
        const image = document.getElementById('artImage');
        image.src = image.dataset.src;
        image.addEventListener('load', function(){
            image.classList.remove("lazy-img");
        })
    }
    slideTo(direction, ID){
        var targetedButton;
        var slideOut;
        var clearClass;
        var slideIn;
        if(direction === "left"){
            targetedButton = "artButtonLeft";
            slideOut = "slideableLOut";
            clearClass = "slideableRIn";
            slideIn= "slideableLIn";
        }
        else{
            targetedButton = "artButtonRight";
            slideOut = "slideableROut";
            clearClass = "slideableLIn";
            slideIn = "slideableRIn";
        }
    
        document.getElementById(targetedButton).setAttribute("disabled", "disabled");
        const portrait = document.getElementById('portrait');
        
        portrait.classList.add(slideOut);
        setTimeout(() => {
            
            
            portrait.classList.remove(slideOut);
            portrait.classList.remove(clearClass);

            if(direction === "left"){
                ID === 0 ? this.setState({artID: 4}) : this.setState({artID: this.state.artID-1});
            }
            else{
                ID === 4 ? this.setState({artID: 0}) : this.setState({artID: this.state.artID+1});
            }
            
            portrait.classList.add(slideIn);
            
            },400);

        
        setTimeout(() => {
            let image = document.getElementById('artImage');
            image.classList.add("lazy-img");
            image.src = image.dataset.src;
            image.addEventListener('load', function(){
                image.classList.remove("lazy-img");
            })
        }, 500);

        setTimeout(() => {
        
            
            document.getElementById(targetedButton).removeAttribute("disabled");
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
                    <button id = "artButtonLeft" className= "displayButtonLeft btn btn-secondary btn-lg" onClick = {this.scrollLeft}>&#8249;</button>
                    <button id = "artButtonRight" className= "displayButtonRight btn btn-secondary btn-lg" onClick = {this.scrollRight}>&#8250;</button>
                    <div id = "portrait">
                            <Art art={ART[this.state.artID]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtBanner;