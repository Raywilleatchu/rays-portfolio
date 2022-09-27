import { useState, useEffect } from "react";
import "../css/About.scss"
import { AnimatedLetters } from "./AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faDocker, faGithub, faHtml5, faLinux, faMicrosoft, faReact, faWindows } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't']}
                        idx={15}
                    />
                </h1>
                <p style={{fontSize: "24px"}}>
                    I'm a self taught Software Engineer who specializes in Frontend, Backend & Database work. 
                    I have achieved a certificate of completion from Grand Circus boot camp in Detroit, MI.  
                    My current topic of focus is Data Privacy at Rocket Central. I joined my team, Peanut Butter Motorcycle Club in October of 2021.
                </p>
                <p style={{fontSize: "24px"}}>
                    Since then my main focus was to learn the whole stack and provide value to the team. I now service our Enterprise Applications. One of them being Oya, our orchestration service that balances right requests and sends them to the correct workflow.
                    The other is Themis, a service that shows visibility on current Litigation & Retention issues and also has the ability to stop the flow of data if needed. Other services I have worked on include but are not limited to the Business Term API, Eris, Postmalone, & SAM.
                </p>
                <p style={{fontSize: "24px"}}>
                    For further reference, you can go <a href="https://git.rockfin.com/rmansour2">here</a>
                </p>
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face5">
                        <FontAwesomeIcon icon={faLinux} color="Green"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faMicrosoft} color="#5ED4F4"/>
                    </div>
                    <div className="face1">
                        <FontAwesomeIcon icon={faDocker} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="Grey"/>
                    </div>
                </div>

            </div>

        </div>
    );
}  