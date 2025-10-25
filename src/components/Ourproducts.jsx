import "../App.css";
import Background from "../assets/bg1.png";
import Beanbag from "../assets/beanbag.png";
const Ourproducts = () => {
  return (
    <div className="Ourproducts-container">
      <div className="ourproducts-bg">
        <img src={Background} alt="Background" className="ourproducts-bgimg" />
      </div>
      <div className="ourproducts">
        <div className="ourprdcts-1">
          <p className="products-p">
            Discover the Perfect Beans for Your Perfect Cup
          </p>
          <button className="Explore-btn">Explore our Products {"  >>"}</button>
        </div>

        <img src={Beanbag} alt="Bean Bag" className="beanbag" />
      </div>
    </div>
  );
};

export default Ourproducts;
