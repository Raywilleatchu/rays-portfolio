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
                <p>
                    I'm a self taught Software Engineer who specializes in Frontend, Backend & Database work. 
                    I have achieved a certificate of completion from Grand Circus boot camp in Detroit, MI.  
                    My current topic of focus is Data Privacy at Rocket Central.
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