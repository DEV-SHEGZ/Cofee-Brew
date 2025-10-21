import "../App.css";
import Cappuccino from "../assets/cappuccino.png";
import Dalgona from "../assets/Dalgona coffee.png";
import ColdCoffee from "../assets/Cold coffee.png";
import Filtercoffee from "../assets/filter coffee.png";

const Varieties = () => {
  return (
    <div div className="varieties-section">
      <p className="section-title">
        Explore Our Delicious <span className="span-title">Coffee</span>{" "}
        Creations
      </p>
      <div div className="products-container">
        <div className="product-card">
          <img className="product-img" src={Cappuccino} alt="" />
          <p className="card-title">Cappuccino</p>
          <p className="card-p">An espresso prepared with steamed milk</p>

          <div className="card-price">
            <p>$1.50</p>
            <button className="product-btn">Order now</button>
          </div>
        </div>
        <div className="product-card">
          <img className="product-img" src={Dalgona} alt="" />
          <p className="card-title">Dalgona Coffe</p>
          <p className="card-p">An espresso prepared with steamed milk</p>

          <div className="card-price">
            <p>$1.50</p>
            <button className="product-btn">Order now</button>
          </div>
        </div>
        <div className="product-card">
          <img className="product-img" src={ColdCoffee} alt="" />
          <p className="card-title">Cold Coffee</p>
          <p className="card-p">An espresso prepared with steamed milk</p>

          <div className="card-price">
            <p>$1.50</p>
            <button className="product-btn">Order now</button>
          </div>
        </div>
        <div className="product-card">
          <img className="product-img" src={Filtercoffee} alt="" />
          <p className="card-title">Filter Coffee</p>
          <p className="card-p">An espresso prepared with steamed milk</p>

          <div className="card-price">
            <p>$1.50</p>
            <button className="product-btn">Order now</button>
          </div>
        </div>
      </div>
      <div className="view-btn-div">
        <button className="View-menu-btn">View Menu {"  >>"}</button>
      </div>
    </div>
  );
};

export default Varieties;
