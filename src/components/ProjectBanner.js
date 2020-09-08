import React, { Component } from 'react';
import PROJECTS from "../data/projects";
const Project = props => {
    const {title, image, description, technologies} = props.projects;

    return (
        <div>
            <h1 className = "displayName">{title}</h1>
            <img className = "displayImage" src={image} alt = 'profile'/>
            <p className = "displayDescription">{description}</p>
            <div className = "displayTech">{technologies}</div>
        </div>
    )
    
}

class ProjectBanner extends Component{
    constructor(){
        super();
        this.state = {ID: 0};
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    scrollLeft(){
        if (this.state.ID == 0){
            document.getElementsByClassName("displayButtonLeft")[1].disabled = true;
            document.getElementById("portraitPortrait").classList.add("slideablelout")
            setTimeout(() => {
                document.getElementById("portraitPortrait").classList.remove("slideablelout")
                document.getElementById("portraitPortrait").classList.remove("slideabler")
                this.setState({ID: 4})
                document.getElementById("portraitPortrait").classList.add("slideablel")
                },400);
        }
        else{
            document.getElementsByClassName("displayButtonLeft")[1].disabled = true;
            document.getElementById("portraitPortrait").classList.add("slideablelout")
            setTimeout(() => {
                document.getElementById("portraitPortrait").classList.remove("slideablelout")
                document.getElementById("portraitPortrait").classList.remove("slideabler")
                this.setState({ID: this.state.ID-1})
                document.getElementById("portraitPortrait").classList.add("slideablel")
                },400);
        }
        setTimeout(() => {
            document.getElementsByClassName("displayButtonLeft")[1].disabled = false;
            },700);
    }

    scrollRight(){
        if (this.state.ID == 4){
            document.getElementsByClassName("displayButtonRight")[1].disabled = true;
            document.getElementById("portraitPortrait").classList.add("slideablerout")
            setTimeout(() => {
                document.getElementById("portraitPortrait").classList.remove("slideablerout")
                document.getElementById("portraitPortrait").classList.remove("slideablel")
                this.setState({ID: 0})
                document.getElementById("portraitPortrait").classList.add("slideabler")
                },400);
        }
        else{
            document.getElementsByClassName("displayButtonRight")[1].disabled = true;
            document.getElementById("portraitPortrait").classList.add("slideablerout")
            setTimeout(() => {
                document.getElementById("portraitPortrait").classList.remove("slideablerout")
                document.getElementById("portraitPortrait").classList.remove("slideablel")
                this.setState({ID: this.state.ID+1})
                document.getElementById("portraitPortrait").classList.add("slideabler")
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
                    <div id = "projectPortrait">
                            <Project projects={PROJECTS[this.state.ID]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectBanner;