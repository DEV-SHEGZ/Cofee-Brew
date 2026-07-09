import React from "react";
import navlogo from "../assets/navlogo.png";
import glass from "../assets/glass.png";
import "../App.css";
const Navbar = () => {
  return (
    <>
      {/*Mobile-Nav*/}
      <nav className="navbar-mobile">
        <div className="navbar-logo-mobile">
          <img className="navbar-img" src={navlogo} alt="Coffee Brew Logo" />
          <p>CoffeeBrew</p>
        </div>
        <div className="burger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {/*Desktop view*/}
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="navbar-logo" src={navlogo} alt="Coffee Brew Logo" />
          <p>CoffeeBrew</p>
        </div>
        <ul className="nav-ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Coffee Menu</a>
          </li>
          <li>
            <a href="#services">About us</a>
          </li>
          <li>
            <a href="#contact">Shop</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img src={glass} alt="Coffee Glass" className="navbar-glass" />
      </nav>
    </>
  );
};

export default Navbar;
