import React from "react";
import "../css/NavBar.scss";
import GokuFace from "../assets/img/GokuFace.png";
import NMS from "../assets/img/nms.gif";
import "../js/MainDisplay.js";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const NavBar = () =>
 {
    return (
      <div className="Nav">
         <a> 
          <Link className="logo" to='/'>
            <img className="subLogo" src={GokuFace} alt="logo"/>
          </Link> 
        </a>
        <nav>
            <NavLink exact="true" activeclassname="active" className="homeLink" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="aboutLink" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolioLink" to="/portfolio">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel='noreferrer' href='www.github.com'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    );
  }