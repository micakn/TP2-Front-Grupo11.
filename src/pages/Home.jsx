// Página principal con rutas de imágenes corregidas
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero principal con título animado */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span>Tech</span><span>Verse</span> React
          </h1>
          <p className="hero-subtitle">
            Un multiverso digital donde cada integrante tiene su estilo.
          </p>
          <p className="hero-subtitle">
            ¡Elegí uno y sumérgete en la experiencia de cada portal!
          </p>
        </div>
      </section>

      {/* Sección de tecnologías utilizadas */}
      <section className="technologies">
        <h2>Tecnologías Utilizadas</h2>
        <div className="tech-list">
          <img src="/img/logo-css.webp" alt="CSS" title="CSS3" />
          <img src="/img/logo-github.webp" alt="GitHub" title="GitHub" />
          <img src="/img/logo-html.webp" alt="HTML" title="HTML5" />
          <img src="/img/logo-javascript.webp" alt="JavaScript" title="JavaScript ES6+" />
          <img src="/img/logo-visual.webp" alt="Visual Studio Code" title="VS Code" />
        </div>
      </section>

      {/* Explicación del proyecto */}
      <section className="intro">
        <div className="intro-box">
          <h3>Nuestra Propuesta</h3>
          <p>
            Para nuestro sitio web, elegimos implementar una propuesta de portales 
            individuales para cada integrante, mostrando que cada uno tiene su estilo 
            propio y permitiendo que cada miembro desarrolle distintas prácticas de 
            manera independiente.
          </p>
          <p>
            La página principal se diseñó con un estilo moderno y tech, sirviendo 
            como punto de entrada coherente al proyecto.
          </p>
        </div>
      </section>

      {/* Cards de integrantes con enlaces */}
      <section className="portales">
        <h2>Portales de Integrantes</h2>
        <div className="cards-grid">
          <Link to="/micaela" className="card-member">
            <div className="card-image">
              <img src="/img/card-Micaela.webp" alt="Micaela" />
            </div>
            <span>Micaela</span>
          </Link>
          
          <Link to="/paula" className="card-member">
            <div className="card-image">
              <img src="/img/card-Paula.webp" alt="Paula" />
            </div>
            <span>Paula</span>
          </Link>
          
          <Link to="/maria" className="card-member">
            <div className="card-image">
              <img src="/img/card-Maria.webp" alt="María" />
            </div>
            <span>María</span>
          </Link>
        </div>
      </section>

      {/* Información adicional del proyecto */}
      <section className="proyecto">
        <h2>Sobre el Proyecto</h2>
        <div className="project-panel">
          <p>
            Cada integrante aportó de manera diferenciada a nivel de planificación, 
            diseño, programación y estructura de contenido, lo que permitió reflejar 
            la diversidad creativa del equipo mientras se mantenía una experiencia 
            unificada para el usuario.
          </p>
        </div>
      </section>
    </div>
  )
}



