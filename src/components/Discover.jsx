import React from "react";
import "../App.css";
import AboutUs from "../assets/aboutus.png";

const Discover = () => {
  return (
    <div className="discover-background">
      <div className="discover">
        <div>
          <img src={AboutUs} className="aboutus-img" />
        </div>

        <div className="second-div">
          <p className="discver-hd">Discover Our Story</p>
          <p className="discver-p"> Experience the Passion Behind CoffeeBrew</p>

          <p className="p-dv">
            At CoffeeBrew, we're more than just a place to grab a cup of coffee
            – we're a community of coffee lovers dedicated to crafting
            exceptional experiences with every sip.{" "}
          </p>

          <p className="p-dv">
            {" "}
            Our journey began when our founder, Agbaraojo Vela, discovered a
            love for coffee during their travels through Asia. Since then, we've
            been on a mission to deliver the highest quality coffee and
            hospitality, one cup at a time.
          </p>
          <button className="Read-more">Order now {"  >>"} </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
