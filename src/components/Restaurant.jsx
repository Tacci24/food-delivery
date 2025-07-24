import React from "react";
import "../styles/Restaurant.css";

function Restaurant() {
  const restaurants = [
    {
      name: "Royal Sushi House",
      image: "/src/assets/royal.jpg",
      time: "🕐 30 - 40 min • $32 min sum",
      category: "🥓 Sushi",
      basket: "/src/assets/basket.png",
      id: 1,
    },
    {
      name: "Buggers & Pizza",
      image: "/src/assets/pizza.jpg",
      time: "🕐 40 - 60 min • $24 min sum",
      category: ["🍔 Bugger", "🍕 Pizza"],
      basket: "/src/assets/basket.png",
      id: 2,
    },
    {
      name: "Ninja Sushi",
      image: "/src/assets/ninja.jpeg",
      time: "🕐 20 - 40 min • $40 min sum",
      category: "🥓 Sushi",
      basket: "/src/assets/basket.png",
      id: 3,
    },
    {
      name: "Sushi master",
      image: "/src/assets/master.jpg",
      time: "🕐 60 - 70 min • $49 min sum",
      category: "🥓 Sushi",
      basket: "/src/assets/basket.png",
      id: 4,
    },
    {
      name: "Japanese Sushi",
      image: "/src/assets/japanese.jpg",
      time: "🕐 30 - 50 min • $104 min sum",
      category: "🥓 Sushi",
      basket: "/src/assets/basket.png",
      id: 5,
    },
    {
      name: "Kobe",
      image: "/src/assets/kobe.jpg",
      time: "🕐 20 - 30 min • $57 min sum",
      category: "🥓 Sushi",
      basket: "/src/assets/basket.png",
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
