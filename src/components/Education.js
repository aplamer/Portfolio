import React from "react";
import collegeImage from "../assets/collegeImage.png";
import OFFLINECLASSES from "../data/classes";
import ONLINECLASSES from "../data/onlineclasses";

const OfflineClass = props =>{
    const {title} = props.offlineclass;

    return (
        <div>
            <h5>{title}</h5>
        </div>
    )
}

const OnlineClass = props =>{
    const {title, image, link} = props.onlineclass;

    return (
        <div style = {{textAlign : "center", color: "white", display:"inline-block", paddingRight: "50px"}}>
            <h5>{title}</h5>
            <a href = {link}><img src = {image} className = "onlineClassImg"/></a>
        </div>
    )
}
const Education = () => (
    <div>
        <div className = "home">
            <h2>College Education</h2>
            <img id = "collegeImage" src = {collegeImage}/>
            <img id = "collegeImage" style = {{marginTop: "400px"}} src = {collegeImage}/>
            <div className="homeText collegeText">
                Institution: (SUNY) University at Buffalo
                <br></br>
                Degree: Bachelors in Computer Science
                <br></br>
                GPA: 3.255
                <br></br>
                <br></br>
                <div>
                    <h3 style = {{textDecoration : "underline"}}>Classes</h3>
                    {
                        OFFLINECLASSES.map(OFFLINECLASS => (
                                <OfflineClass key={OFFLINECLASS.id} offlineclass={OFFLINECLASS} />
                            
                        ))
                    }
                </div>
            </div>
        </div>

        <div className = "home" style ={{textAlign: "center"}}>
            <h2 style = {{float: "left", display: "inline-block", display: "absolute", marginTop: "80px"}}>OnlineCourses(Udemy)</h2>
            {
                        ONLINECLASSES.map(ONLINECLASS => (
                                <OnlineClass key={ONLINECLASS.id} onlineclass={ONLINECLASS} />
                            
                        ))
                    }
        </div>
    </div>
)

export default Education;