import coffeecup from "../assets/navlogo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Whatsapp from "../assets/whatsapp.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/facebook.png";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cnt">
        <div className="footer-1">
          <img src={coffeecup} alt="Coffee Cup Logo" />
          <p>CoffeeBrew</p>
        </div>

        <ul className="footer-ul">
          <li className="first-ul">Information</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Find a location</li>
          <li>More search</li>
        </ul>

        <ul className="footer-ul">
          <li className="first-ul">Useful links</li>
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
          <li>Supports</li>
          <li>Services</li>
        </ul>

        <ul className="footer-ul">
          <li className="first-ul">Our services</li>
          <li>Shop</li>
          <li>Order ahead</li>
          <li>Menu</li>
        </ul>

        <ul className="footer-ul">
          <li className="first-ul">Contact us</li>
          <li>+234 9037405907</li>
          <li>strexy1998@gmail.com</li>
          <li></li>
        </ul>
        <div className="footer-socials">
          <img src={Whatsapp} alt="Whatsapp" />
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>

      <hr />
      <p className="copyrights">
        2025 &copy; | All Rights Reserved | Developed by DevShegz
      </p>
    </div>
  );
};

export default Footer;
