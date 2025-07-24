import React from "react";
import royal from "../assets/royal.jpg";
import pizza from "../assets/pizza.jpg";
import ninja from "../assets/ninja.jpeg";
import master from "../assets/master.jpg";
import japanese from "../assets/japanese.jpg";
import kobe from "../assets/kobe.jpg";
import basket from "../assets/basket.png";
import "../styles/Restaurant.css";

function Restaurant() {
  const restaurants = [
    {
      name: "Royal Sushi House",
      image: royal,
      time: "🕐 30 - 40 min • $32 min sum",
      category: "🥓 Sushi",
      basket:  basket,
      id: 1,
    },
    {
      name: "Buggers & Pizza",
      image: pizza,
      time: "🕐 40 - 60 min • $24 min sum",
      category: ["🍔 Bugger", "🍕 Pizza"],
      basket:  basket,
      id: 2,
    },
    {
      name: "Ninja Sushi",
      image: ninja,
      time: "🕐 20 - 40 min • $40 min sum",
      category: "🥓 Sushi",
      basket:  basket,
      id: 3,
    },
    {
      name: "Sushi master",
      image: master,
      time: "🕐 60 - 70 min • $49 min sum",
      category: "🥓 Sushi",
      basket:  basket,
      id: 4,
    },
    {
      name: "Japanese Sushi",
      image: japanese,
      time: "🕐 30 - 50 min • $104 min sum",
      category: "🥓 Sushi",
      basket:  basket,
      id: 5,
    },
    {
      name: "Kobe",
      image: kobe,
      time: "🕐 20 - 30 min • $57 min sum",
      category: "🥓 Sushi",
      basket: basket,
      id: 6,
    },
  ];

  return (
    <section className="restaurant-grid">
      {restaurants.map((res) => (
        <div key={res.id} className="restaurant-card">
          <img src={res.image} alt={res.name} />
          <div className="info">
            <div className="text">
              <h3>{res.name}</h3>
              <p>{res.time}</p>
              <div className="category-pill">
                {(Array.isArray(res.category)
                  ? res.category
                  : [res.category]
                ).map((cat, idx) => (
                  <span key={idx} className="category">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="cart">
              <img src={res.basket} alt={res.name} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Restaurant;
