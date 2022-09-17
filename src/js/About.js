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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Amet est placerat in egestas erat imperdiet sed. Integer eget aliquet nibh praesent tristique magna sit amet. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Netus et malesuada fames ac turpis. Neque sodales ut etiam sit amet nisl purus in mollis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Mattis enim ut tellus elementum sagittis vitae. Nunc congue nisi vitae suscipit tellus mauris a diam. Purus in massa tempor nec feugiat nisl. 
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Quisque non tellus orci ac. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ac turpis egestas integer eget aliquet nibh praesent. Quis vel eros donec ac odio tempor orci. Venenatis tellus in metus vulputate. Proin libero nunc consequat interdum varius sit. A iaculis at erat pellentesque adipiscing.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus. Nunc scelerisque viverra mauris in aliquam sem fringilla. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Sed turpis tincidunt id aliquet risus. Fermentum leo vel orci porta non. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Ullamcorper eget nulla facilisi etiam. Molestie at elementum eu facilisis sed. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tempus urna et pharetra pharetra massa massa ultricies mi. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Purus gravida quis blandit turpis cursus in hac habitasse platea. Amet justo donec enim diam vulputate ut pharetra sit amet. Egestas diam in arcu cursus euismod quis viverra nibh. Non pulvinar neque laoreet suspendisse interdum. Vel pretium lectus quam id leo in vitae.
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