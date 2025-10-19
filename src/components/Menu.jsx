import "../App.css";
import coffeecup from "../assets/cup.png";
import cake from "../assets/cake.png";
import lato from "../assets/lato.png";
import beans from "../assets/beans.png";
const CoffeeItems = function () {
  return (
    <div className="first-container">
      <div className="container">
        <div className="item-card">
          <img className="coffee-img-cup" src={coffeecup} alt="" />
          <p className="coffee-txt"> Hot coffee</p>
        </div>
        <div className="item-card">
          <img className="coffee-img-lato" src={lato} alt="" />
          <p className="coffee-txt"> Hot coffee</p>
        </div>
        <div className="item-card">
          <img className="coffee-img-beans" src={beans} alt="" />
          <p className="coffee-txt"> Hot coffee</p>
        </div>
        <div className="item-card">
          <img className="coffee-img-cake" src={cake} alt="" />
          <p className="coffee-txt"> Hot coffee</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItems;
