import React from "react";
import "../css/Nav.css";
import GokuFace from "../img/GokuFace.png"
import "../js/MainDisplay.js";
import { Link } from 'react-router-dom';

export const NavBar = () =>
 {
    return (
      <div className="Nav">
        <img src={GokuFace} style={{borderRadius: "50%", borderColor: "orange", border: "5px solid"}}/>
        <nav>
         <a> <Link to='/'>Home</Link> </a>
         <a> <Link to='/about'>About</Link> </a>
         <a> <Link to='/portfolio'>Portfolio</Link> </a>
         <a> <Link to='/resume'>Resume</Link> </a>
        </nav>
      </div>
    );
  }