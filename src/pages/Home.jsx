// src/pages/Home.jsx - Página de inicio mejorada

import HeroSection from "../components/ui/HeroSection";
import CardGrid from "../components/ui/CardGrid";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const integrantes = [
    { name: "Micaela", image: "/img/card-Micaela.webp", link: "/micaela" },
    { name: "Paula", image: "/img/card-Paula.webp", link: "/paula" },
    { name: "María", image: "/img/card-Maria.webp", link: "/maria" },
  ];

  const tecnologias = [
    {
      nombre: "React",
      icono: "⚛️",
      descripcion: "Librería para interfaces de usuario"
    },
    {
      nombre: "Vite",
      icono: "⚡",
      descripcion: "Build tool rápido y moderno"
    },
    {
      nombre: "React Router",
      icono: "🛣️",
      descripcion: "Navegación SPA sin recargas"
    },
    {
      nombre: "Deezer API",
      icono: "🎵",
      descripcion: "Integración de música en tiempo real"
    }
  ];

  const estadisticas = [
    { numero: "3", label: "Integrantes Activas", icono: "👥" },
    { numero: "20+", label: "Películas en JSON", icono: "🎬" },
    { numero: "10+", label: "Componentes", icono: "🧩" },
    { numero: "100%", label: "Responsive", icono: "📱" }
  ];

  return (
    <div className="home">
      <HeroSection
        title={
          <>
            <span>Tech</span>Verse React
          </>
        }
        subtitle="Un multiverso digital donde cada integrante tiene su estilo."
      />

      {/* Nueva sección de estadísticas */}
      <section className="estadisticas">
        <div className="stats-grid">
          {estadisticas.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-icon">{stat.icono}</span>
              <h3 className="stat-numero">{stat.numero}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="intro">
        <div className="intro-box">
          <h3>Nuestra Propuesta</h3>
          <p>
            Cada portal individual refleja el estilo y las habilidades de sus integrantes,
            mostrando cómo React permite crear identidades visuales coherentes dentro de un mismo ecosistema.
          </p>
        </div>
      </section>

      {/* Nueva sección de tecnologías mejorada */}
      <section className="technologies-section">
        <h2>🛠️ Stack Tecnológico</h2>
        <div className="tech-grid">
          {tecnologias.map((tech, i) => (
            <div key={i} className="tech-card">
              <div className="tech-icon">{tech.icono}</div>
              <h4>{tech.nombre}</h4>
              <p>{tech.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portales">
        <h2>Portales de Integrantes</h2>
        <CardGrid items={integrantes} />
      </section>

      {/* Nueva sección de características */}
      <section className="caracteristicas">
        <h2>✨ Características del Proyecto</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🎨</span>
            <h3>Diseño Personalizado</h3>
            <p>Cada integrante mantiene su estilo único con temas personalizados usando CSS variables.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <h3>Totalmente Responsive</h3>
            <p>Diseño adaptable a todos los dispositivos con breakpoints optimizados.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <h3>SPA Performance</h3>
            <p>Navegación instantánea sin recargas gracias a React Router.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔄</span>
            <h3>APIs Dinámicas</h3>
            <p>Consumo de datos desde JSON local y API pública de Deezer.</p>
          </div>
        </div>
      </section>

      <section className="proyecto">
        <h2>Sobre el Proyecto</h2>
        <div className="project-panel">
          <p>
            <strong>TechVerse</strong> es la evolución del TP1, transformado en una Single Page Application moderna. 
            Este proyecto demuestra el dominio de React, la componentización efectiva, y la integración 
            de datos dinámicos tanto locales como desde APIs externas.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Cada integrante aportó de manera diferenciada a nivel de planificación, 
            diseño y estructura, reflejando la diversidad creativa del grupo mientras se mantenía 
            una experiencia unificada para el usuario.
          </p>
          <div className="cta-buttons">
            <Link to="/bitacora" className="btn-primary">
              📋 Ver Bitácora
            </Link>
            <Link to="/diagramas" className="btn-secondary">
              📊 Ver Diagramas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}