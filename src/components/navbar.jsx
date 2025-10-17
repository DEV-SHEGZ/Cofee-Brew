import React from "react";
import navlogo from "../assets/navlogo.png";
import glass from "../assets/glass.png";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navlogo} alt="Coffee Brew Logo" />
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
  );
};

export default Navbar;
