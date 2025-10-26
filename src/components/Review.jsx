import Dp1 from "../assets/Ellipse 5.png";
import Dp2 from "../assets/Ellipse 6.png";
import Dp3 from "../assets/Ellipse 7.png";
import quote from "../assets/quote.png";
import "../App.css";

const Review = () => {
  return (
    <div div className="newsletter-section">
      <p className="news-hd">What Our Customers Are Saying</p>
      <div className="cards">
        <div className="customer-review">
          <img src={quote} alt="Quote" className="quote-img" />
          <p className="p1">
            Top-notch coffee and friendly service! CoffeeBrew never disappoints
          </p>
          <img src={Dp1} alt="" />
          <p className="p2">King Ogunmekpon</p>
        </div>
        <div className="customer-review">
          <img src={quote} alt="Quote" className="quote-img" />
          <p className="p1">
            Absolutely love the rich flavor and aroma of the coffee beans from
            CoffeeBrew! Each cup feels like a little moment of indulgence in my
            day.
          </p>
          <img src={Dp2} alt="" />
          <p className="p2">Osuporu Peters</p>
        </div>
        <div className="customer-review">
          <img src={quote} alt="Quote" className="quote-img" />
          <p className="p1">
            Finding CoffeeBrew was like stumbling upon a hidden gem in the
            bustling city. Their commitment to quality shines through in every
            cup.
          </p>
          <img src={Dp3} alt="" />
          <p className="p2">Evidence Elemiewele</p>
        </div>
      </div>
      <button className="get">Get a Qoute</button>
    </div>
  );
};
export default Review;
