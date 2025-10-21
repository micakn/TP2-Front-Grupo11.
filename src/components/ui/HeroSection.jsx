// HeroSection.jsx - Componente de sección hero con colores personalizables
import "./ui.css";

export default function HeroSection({ title, subtitle, accentColor = "#00d4ff" }) {
  return (
    <section
      className="hero-section"
      style={{
        "--hero-accent": accentColor,
      }}
    >
      <div className="hero-content">
        <h1 style={{ color: accentColor }}>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
