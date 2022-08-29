import { Home } from './Home.js';
import "../css/MainDisplay.css";
import { Routes, Route } from 'react-router-dom';
import { About } from './About.js';
import { Portfolio } from './Portfolio.js';
import { Resume } from './Resume.js';
import { NavBar } from './NavBar.js';

export const MainDisplay = () =>
{
    return (
        <div style={{overflow: "auto"}}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='portfolio' element={<Portfolio />}/>
                <Route path='resume' element={<Resume />}/>
            </Routes>
        </div>
    );
}