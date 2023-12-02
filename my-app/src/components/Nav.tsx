import React, { useState } from "react";
import "../styles/navbar.css";
import imageName from "../asset/logo-ul.png";
import logo from "../asset/logo-ow.png";
import { In } from "react-flags-select";
//import css module
 
const Nav = () => {
  return (
    <div className="d-flex main-nav-container">
      <div>
        <img src={imageName} alt="logoname" />
        <img src={logo} alt="logoname" />
      </div>
      <div>
        <ul className="nav-ul py-2">
          <li className="nav-list text-primary">Plan & Book</li>
          <li className="nav-list text-primary">Travel Information</li>
          <li className="nav-list text-primary">Experience</li>
          <li className="nav-list text-primary"> Flysmile</li>
        </ul>
      </div>

      <div>
        <ul className="nav-ul py-2">
          <li className="nav-list">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="nav-list ">
            <a href="#" className="px-2" style={{ fontSize: "small" }}>
              A
            </a>
            <a href="#" className="" style={{ fontSize: "xl" }}>
              A
            </a>
          </li>
          <li className="nav-list">
          <In/>
          </li>
          <li className="nav-list">
            <ul style={{display:"inline-block"}}>
              <li style={{display:'flex', flexDirection:"column",  justifyContent:"center" , alignItems:"center"}}>
                <i style={{ color: "blue",display:"" }} className="fa-solid fa-user"></i>
                <a href="/" style={{textDecoration:"none", fontSize:"small"}}>Login</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
