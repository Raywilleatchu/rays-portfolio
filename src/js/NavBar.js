import React from "react";
import "../css/Nav.css";
import GokuFace from "../img/GokuFace.png"

export default function NavBar() {
    return (
      <div className="Nav">
        <div style={{position: "relative", left: "1.5pc", top: "10px", display: "flex", padding: "10px 0", margin: "0 auto"}}>
          <img src={GokuFace} height="80%" width="60%" alt="Avatar" style={{borderRadius: "50%", border: "solid", borderWidth: "6px", borderColor: "#111"}}/>
        </div>
        <div style={{margin: "0 auto", position: "relative", top: "100px"}}>
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#">Portfolio</a>  
        </div>
      </div>
    );
  }