// src/pages/Home.jsx - Página de inicio del sitio TechVerse React

import HeroSection from "../components/ui/HeroSection";
import CardGrid from "../components/ui/CardGrid";
import "./Home.css";

export default function Home() {
  const integrantes = [
    { name: "Micaela", image: "/img/card-Micaela.webp", link: "/micaela" },
    { name: "Paula", image: "/img/card-Paula.webp", link: "/paula" },
    { name: "María", image: "/img/card-Maria.webp", link: "/maria" },
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

      <section className="intro">
        <div className="intro-box">
          <h3>Nuestra Propuesta</h3>
          <p>
            Cada portal individual refleja el estilo y las habilidades de sus integrantes,
            mostrando cómo React permite crear identidades visuales coherentes dentro de un mismo ecosistema.
          </p>
        </div>
      </section>

      <section className="portales">
        <h2>Portales de Integrantes</h2>
        <CardGrid items={integrantes} />
      </section>

      <section className="proyecto">
        <h2>Sobre el Proyecto</h2>
        <div className="project-panel">
          <p>
            Cada integrante aportó de manera diferenciada a nivel de planificación, 
            diseño y estructura, reflejando la diversidad creativa del grupo mientras se mantenía 
            una experiencia unificada para el usuario.
          </p>
        </div>
      </section>
    </div>
  );
}
