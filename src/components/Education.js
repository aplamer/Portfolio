import React from "react";
import collegeImage from "../assets/collegeImage.png";
import collegeImage2 from "../assets/collegeImage2.png";
import OFFLINECLASSES from "../data/classes";
import ONLINECLASSES from "../data/onlineclasses";
import SKILLS from "../data/skills";
const OfflineClass = (props) =>{

    return (
        <div>
            <h5>{props.offlineclass.title}</h5>
        </div>
    )
}

const OnlineClass = (props) =>{

    return (
        <div className = "educationOther">
            <h5>{props.onlineclass.title}</h5>
            <a href = {props.onlineclass.link}><img alt = '' src = {props.onlineclass.image} style = {{height: "160px"}}/></a>
        </div>
    )
}

const Skill = (props) =>{

    return (
        <div className = "educationOther">
            <h5>{props.skill.title}</h5>
            <img alt = '' src = {props.skill.image} style = {{height: "120px"}}/>
        </div>
    )
}

const Education = () => (
    <div>
        <div className = "home">
            <h2>College Education</h2>

            <div id = "collegeImageContainer">
            <img className = "collegeImage" alt = '' src = {collegeImage}/>
            <img className = "collegeImage" alt = '' src = {collegeImage2}/>
            </div>

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
            <h2 className = "leftTitle" style = {{marginTop: "80px"}}>Online Courses(Udemy):</h2>
            {
                        ONLINECLASSES.map(ONLINECLASS => (
                                <OnlineClass key={ONLINECLASS.id} onlineclass={ONLINECLASS} />
                            
                        ))
                    }
        </div>

        <div className = "home" style ={{textAlign: "center"}}>
            <h2 className = "leftTitle" style = {{marginTop: "130px"}}>Skills:</h2>
            {
                        SKILLS.map(SKILL => (
                                <Skill key={SKILL.id} skill={SKILL} />
                            
                        ))
                    }
        </div>

    </div>
)

export default Education;