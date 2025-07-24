import React from "react";
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <navbar className="navbar">
        <div className="title">
          <div className="logo">
            <h3>
              Food <br /> <span>delivery</span>
            </h3>
          </div>
          <form className="search-form input">
            <input type="search" placeholder="search" />
          </form>
        </div>
        <div className="nav-list">
          <h3>Restaurants</h3>
          <h3>Deals</h3>
          <h3>My orders</h3>
          <div className="basket-container">
            <img src="/src/assets/basket.png" alt="Basket" />
            <span className="count">4</span>
          </div>
          <img src="/src/assets/nav.jpeg" />
        </div>
      </navbar>
    </header>
  );
}

export default Header;
