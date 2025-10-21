import React from "react";
import "./ui.css";

export default function CardGrid({ items, type = "member" }) {
  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <a key={i} href={item.link} className={`card-item ${type}`}>
          <div className="card-image">
            <img src={item.image} alt={item.name} />
          </div>
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
}
