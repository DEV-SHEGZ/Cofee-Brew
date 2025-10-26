import LeftImage from "../assets/image 22.png";
import RightImage from "../assets/image 23.png";
import Email from "../assets/Vector.png";
import "../App.css";

const NewsLetter = () => {
  return (
    <>
      <div className="Newsletter-form">
        <p className="p1">Join in and get 25% Off!!</p>
        <p className="p2">
          Subscribe to our newsletter and get 25% off discount code
        </p>
        <div>
          <img src={Email} alt="Email Icon" />
          <input
            className="new-input"
            placeholder="email address"
            type="text"
          />
          <button className="new-btn">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
