import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nms from "../assets/img/nms.png";
import '../css/Home.scss';
import { AnimatedLetters } from "./AnimatedLetters";

export const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['R', 'a', 'y', 'm', 'o', 'n', 'd', ' ', 'M', 'a', 'n', 's', 'o', 'u', 'r']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <h2>
                        <span className={letterClass}>H</span> 
                        <span className={'${letterClass} _12'}>i,</span> 
                        <br/> 
                        <span className={'${letterClass} _13'}>I</span>
                        <span className={'${letterClass} _14'}>'m</span>
                        &nbsp;
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    </h2>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                </h1>
                <h2>
                    Fullstack Developer / Database Engineer
                </h2>
                <Link to='/about' className='flast-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}  