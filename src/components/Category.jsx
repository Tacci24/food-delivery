import React from "react";
import "../styles/Category.css";

function Category() {
  const categories = [
    { icon: "🍕", label: "Pizza", id: 1 },
    { icon: "🍔", label: "Burgers", id: 2 },
    { icon: "🍢", label: "BBQ", id: 3 },
    { icon: "🍣", label: "Sushi", id: 4 },
    { icon: "🥦", label: "Vegan", id: 5 },
    { icon: "🧁", label: "Desserts", id: 6 },
  ];

  return (
    <section className="category-section">
      {categories.map((cat) => (
        <div key={cat.id} className="category-box">
          <span className="icon">{cat.icon}</span>
          <span className="label">{cat.label}</span>
        </div>
      ))}
    </section>
  );
}

export default Category;
