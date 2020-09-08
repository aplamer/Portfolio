import React, {Component} from "react";
import Banner from "./Banner";
import ProjectBanner from "./ProjectBanner";
import ArtBanner from "./ArtBanner";
import Contacts from "./Contacts";
class App extends Component{
    render(){
        return(
            <div>
                <Banner />
                <div className = "home">
                    <h2>Who am I?</h2>
                    <p className = "homeText">
                        Hi there, my name is Alan Peter Lam. I'm a computer scientist born and raised in New York City.
                        <br></br>
                        Though I have many interests such art, writing, and videogame design, my goals right now lie solely on making a career in web developement.
                        <br></br>
                        I'm motivated, passionate and am open to learning new things in order to further my career.
                        <br></br>
                        If you want to know more about me or my work check out some of my projects down below!
                        <br></br>
                        And if you want to contact me for an oppurtunity I am more than happy to answer back! Just shoot me an email at <a href= "mailto:aplamer11307@gmail.com">aplamer11307@gmail.com!</a>
                    </p>
                </div>

                <div className= "home">
                    <h2>Highlighted Projects</h2>
                    <p className = "homeText">
                        Here are some of the projects I've been working on in order to gain more knowledge on some of the tools used in the web development industry.
                        <br></br>
                        They include projects that use a multitude of technologies such as HTML, CSS, Javascript, Jquery, React, Angular, Bootstrap, Webpack, and more!
                        <br></br>
                    </p>
                </div>

                <ProjectBanner/>

                <div className = "home">
                    <h2>Other Projects</h2>
                    <p className = "homeText">
                        Just because I'm an aspiring web developer doesn't mean I only have skills within that field. I also have a hobby in art and design!
                        <br></br>
                        Here are some pieces I've made using software like Adobe Illustrator, CLIP STUDIO PAINT, and more!
                    </p>
                </div>
                
                <ArtBanner/>
                <div className = "home">
                    <h2 className = "homeText" style = {{textDecoration : "underline"}}>Contacts</h2>
                    <Contacts />
                </div>
            </div>
        )
    }
}

export default App;
