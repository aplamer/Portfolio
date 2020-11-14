import React, { Component } from 'react';
import PROJECTS from "../data/projects";
const Project = props => {
    const {title, image, description, link} = props.projects;

    return (
        <div>
            <h1 className = "displayName">{title}</h1>
            <img className = "displayImage" src={image} alt = 'profile'/>
            <p className = "displayDescription">{description}
            <br></br>
            <a href = {link}>{link}</a>
            </p>
        </div>
    )
    
}

class ProjectBanner extends Component{
    constructor(){
        super();
        this.state = {projectID: 0};
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
            document.getElementById("projectPortrait").classList.add(slideOut);
            setTimeout(() => {
                document.getElementById("projectPortrait").classList.remove(slideOut);
                document.getElementById("projectPortrait").classList.remove(clearClass);
                if(direction === "left"){
                    ID === 0 ? this.setState({projectID: 1}) : this.setState({projectID: this.state.projectID-1});
                }
                else{
                    ID === 1 ? this.setState({projectID: 0}) : this.setState({projectID: this.state.projectID+1});
                }
                document.getElementById("projectPortrait").classList.add(slideIn);
                },400);
    
        setTimeout(() => {
            document.getElementsByClassName(targetedButton)[1].disabled = false;
            },700);
    }

    scrollLeft(){
        this.slideTo("left", this.state.projectID)
    }

    scrollRight(){
        this.slideTo("right", this.state.projectID)
    }

    render(){
        return(
            <div>
                <div className = "displayContainers">
                    <button className= "displayButtonLeft btn btn-secondary btn-lg" onClick = {this.scrollLeft}>&#8249;</button>
                    <button className= "displayButtonRight btn btn-secondary btn-lg" onClick = {this.scrollRight}>&#8250;</button>
                    <div id = "projectPortrait">
                            <Project projects={PROJECTS[this.state.projectID]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectBanner;