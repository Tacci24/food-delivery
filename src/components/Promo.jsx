import React from "react";
import DesertImg from "../assets/deserty.png";
import BuggerImg from "../assets/bugger.png";
import "../styles/Promo.css";

function Promo() {
  return (
    <main className="main">
      <div className="promo-card blue">
        <img src={DesertImg} alt="Deserty Image" />
        <div className="mini">
          <div className="text">
            <h2>All deserts</h2>
            <p>20% OFF</p>
          </div>
          <h3 className="bottom">Deserty</h3>
        </div>
      </div>
      <div className="promo-card orange">
        <img src={BuggerImg} alt="Foodies Image" />
        <div className="mini">
          <div className="text">
            <h2>Big Burgers</h2>
            <p>50% OFF</p>
          </div>
          <h3 className="bottom">Foodies</h3>
        </div>
      </div>
    </main>
  );
}

export default Promo;
