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

    scrollLeft(){
        if (this.state.artID == 0){
            document.getElementsByClassName("displayButtonLeft")[1].disabled = true;
            document.getElementById("portrait").classList.add("slideablelout")
            setTimeout(() => {
                document.getElementById("portrait").classList.remove("slideablelout")
                document.getElementById("portrait").classList.remove("slideabler")
                this.setState({artID: 4})
                document.getElementById("portrait").classList.add("slideablel")
                },400);
        }
        else{
            document.getElementsByClassName("displayButtonLeft")[1].disabled = true;
            document.getElementById("portrait").classList.add("slideablelout")
            setTimeout(() => {
                document.getElementById("portrait").classList.remove("slideablelout")
                document.getElementById("portrait").classList.remove("slideabler")
                this.setState({artID: this.state.artID-1})
                document.getElementById("portrait").classList.add("slideablel")
                },400);
        }
        setTimeout(() => {
            document.getElementsByClassName("displayButtonLeft")[1].disabled = false;
            },700);
    }

    scrollRight(){
        if (this.state.artID == 4){
            document.getElementsByClassName("displayButtonRight")[1].disabled = true;
            document.getElementById("portrait").classList.add("slideablerout")
            setTimeout(() => {
                document.getElementById("portrait").classList.remove("slideablerout")
                document.getElementById("portrait").classList.remove("slideablel")
                this.setState({artID: 0})
                document.getElementById("portrait").classList.add("slideabler")
                },400);
        }
        else{
            document.getElementsByClassName("displayButtonRight")[1].disabled = true;
            document.getElementById("portrait").classList.add("slideablerout")
            setTimeout(() => {
                document.getElementById("portrait").classList.remove("slideablerout")
                document.getElementById("portrait").classList.remove("slideablel")
                this.setState({artID: this.state.artID+1})
                document.getElementById("portrait").classList.add("slideabler")
                },400);
        }
        setTimeout(() => {
        document.getElementsByClassName("displayButtonRight")[1].disabled = false;
        },700);
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