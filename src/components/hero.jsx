import React from "react";
import "../App.css";
import CoffeeLarge from "../assets/Cup 1.png";
import Whatsapp from "../assets/whatsapp.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/facebook.png";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p className="hero-header">Discover the Perfect Brew at CoffeBrew</p>
        <p className="hero-p">
          From Espresso to Cold Brew, We've Got Your Caffeine Fix Covered
        </p>
        <button>Order now {">>"} </button>
      </div>
      <img src={CoffeeLarge} className="coffee-cup" />
      <div>
        <hr />
        <img src={Whatsapp} />
        <img src={Instagram} />
        <img src={Facebook} />
        <img src={Twitter} />
      </div>
    </div>
  );
};

export default Hero;
