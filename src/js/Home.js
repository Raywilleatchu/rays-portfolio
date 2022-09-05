import { Link } from "react-router-dom";
import nms from "../assets/img/nms.png";
import '../css/Home.scss';

export const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <h2>Hi, I'm Raymond Mansour</h2>
                    Software Engineer
                </h1>
                <h2>
                    Fullstack Developer / Database Engineer
                </h2>
                <Link to='/about' className='flast-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}  