import React from "react";
import "../App.css";
import CoffeeLarge from "../assets/Cup 1.png";
import Whatsapp from "../assets/whatsapp.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/facebook.png";
import cofeeseed from "../assets/cocoa seed.png";

const Hero = () => {
  return (
    <div div className="hero-background">
      <div className="hero">
        <div>
          <p className="hero-header">Discover the Perfect Brew at CoffeBrew</p>
          <p className="hero-p">
            From Espresso to Cold Brew, We've Got Your Caffeine Fix Covered
          </p>
          <button className="order-btn">Order now {"  >>"} </button>
        </div>
        <img src={CoffeeLarge} className="coffee-cup" />
        <div>
          <hr />
          <div className="socials">
            <img src={Whatsapp} />
            <img src={Instagram} />
            <img src={Facebook} />
            <img src={Twitter} />
          </div>
        </div>
      </div>
      <img src={cofeeseed} className="cofeeseed1" />
      <img src={cofeeseed} className="cofeeseed2" />
      <img src={cofeeseed} className="cofeeseed3" />
      <img src={cofeeseed} className="cofeeseed4" />
      <img src={cofeeseed} className="cofeeseed5" />
      <img src={cofeeseed} className="cofeeseed6" />
    </div>
  );
};

export default Hero;
