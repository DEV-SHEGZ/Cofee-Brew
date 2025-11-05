import coffeecup from "../assets/navlogo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import "../App.css";

const Footer = () => {
  return (
    <>
      <div className="footer-cnt">
        <div className="footer-1">
          <img src={coffeecup} alt="Coffee Cup Logo" />
          <p>CoffeeBrew</p>
        </div>

        <ul>
          <li>Information</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Find a location</li>
          <li>More search</li>
        </ul>

        <ul>
          <li>Useful links</li>
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
          <li>Supports</li>
          <li>Services</li>
        </ul>

        <ul>
          <li>Our services</li>
          <li>Shop</li>
          <li>Order ahead</li>
          <li>Menu</li>
        </ul>

        <ul>
          <li>Contact us</li>
          <li>+1 (806) 421-0427</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
