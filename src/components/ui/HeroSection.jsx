import React from "react";
import "./ui.css";

export default function HeroSection({ title, subtitle, gradient }) {
  return (
    <section
      className="hero-section"
      style={{
        background:
          gradient ||
          "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1))",
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
