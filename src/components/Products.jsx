import "../App.css";
import Cappuccino from "../assets/cappuccino.png";

const OurProducts = () => {
  return (
    <>
      <p className="section-title">
        Explore Our Delicious <span className="span-title">Coffee</span>{" "}
        Creations
      </p>
      <div className="product-card">
        <img className="product-img" src={Cappuccino} alt="" />
        <p className="card-title">Cappuccino</p>
        <p className="card-p">An espresso prepared with steamed milk</p>

        <div className="card-price">
          <p>$1.50</p>
          <button>Order now</button>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
