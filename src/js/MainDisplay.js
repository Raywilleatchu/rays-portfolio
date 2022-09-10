import "../css/MainDisplay.css";
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.js';
import { About } from './About.js';
import { Portfolio } from './Portfolio.js';
import { Resume } from './Resume.js';
import { NavBar } from './NavBar.js';
import { Link } from 'react-router-dom';
import GokuFace from "../img/GokuFace.png"

export const MainDisplay = () =>
{
    return (
        <div className="container">
            <div className="nav-bar">
                <img src={GokuFace} style={{borderRadius: "50%", margin: '20px' }}></img>
                <a> <Link to='/'>Home</Link> </a>
                <a> <Link to='/about'>About</Link> </a>
                <a> <Link to='/portfolio'>Portfolio</Link> </a>
                <a> <Link to='/resume'>Resume</Link> </a>
            </div>
            <div style={{ backgroundColor: 'orange', flexGrow: 1 }}>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='portfolio' element={<Portfolio />}/>
                    <Route path='resume' element={<Resume />}/>
                </Routes>
            </div>
        </div>
    );
}