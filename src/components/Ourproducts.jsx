import "../App.css";
import Background from "../assets/bg1.png";
import Beanbag from "../assets/beanbag.png";
const Ourproducts = () => {
  return (
    <div className="Ourproducts-container">
      <div className="ourproducts">
        <div>
          <p className="products-p">
            Discover the Perfect Beans for Your Perfect Cup
          </p>
          <button>Explore our Products</button>
        </div>

        <img src={Beanbag} alt="Bean Bag" className="beanbag" />
      </div>
    </div>
  );
};

export default Ourproducts;
