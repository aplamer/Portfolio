import React, { Component } from 'react';
import PROJECTS from "../data/projects";
const Project = (props) => {
    return (
        <div>
            <h1 className = "displayName">{props.projects.title}</h1>
            <img id = "projectImage" className = "displayImage lazy-img" src={props.projects.lazyImage} data-src = {props.projects.image} alt = 'profile'/>
            <p id = "projectDescription" className = "displayDescription">{props.projects.description}
            <br></br>
            <a href = {props.projects.link}>{props.projects.link}</a>
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

    componentDidMount(){
        const image = document.getElementById('projectImage');
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
            targetedButton = "projectButtonLeft";
            slideOut = "slideableLOut";
            clearClass = "slideableRIn";
            slideIn= "slideableLIn";
        }
        else{
            targetedButton = "projectButtonRight";
            slideOut = "slideableROut";
            clearClass = "slideableLIn";
            slideIn = "slideableRIn";
        }
    
        document.getElementById(targetedButton).setAttribute("disabled", "disabled");
        const portrait = document.getElementById('projectPortrait');
        portrait.classList.add(slideOut);

        setTimeout(() => {
            
            document.getElementById('projectDescription').style.whiteSpace = "nowrap";
            portrait.classList.remove(slideOut);
            portrait.classList.remove(clearClass);
            if(direction === "left"){
                ID === 0 ? this.setState({projectID: 1}) : this.setState({projectID: this.state.projectID-1});
            }
            else{
                ID === 1 ? this.setState({projectID: 0}) : this.setState({projectID: this.state.projectID+1});
            }

            portrait.classList.add(slideIn);

            },400);


        setTimeout(() => {
            let image = document.getElementById('projectImage');
            image.classList.add("lazy-img");
            image.src = image.dataset.src;
            image.addEventListener('load', function(){
                image.classList.remove("lazy-img");
            })
        }, 500);

        setTimeout(() => {
            document.getElementById(targetedButton).removeAttribute("disabled");
            },700);

        setTimeout(() => {
            document.getElementById('projectDescription').style.whiteSpace = "normal";
        },900);
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
                    <button id = "projectButtonLeft" className= "displayButtonLeft btn btn-secondary btn-lg" onClick = {this.scrollLeft}>&#8249;</button>
                    <button id = "projectButtonRight" className= "displayButtonRight btn btn-secondary btn-lg" onClick = {this.scrollRight}>&#8250;</button>
                    <div id = "projectPortrait">
                            <Project projects={PROJECTS[this.state.projectID]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectBanner;