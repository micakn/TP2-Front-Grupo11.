// src/pages/Integrantes.jsx - Página que muestra los integrantes del equipo
import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import "./Integrantes.css";

export default function Integrantes() {
  const integrantes = [
    {
      nombre: "Paula",
      edad: 32,
      ubicacion: "Berazategui, Buenos Aires",
      rol: "Full Stack Developer",
      avatar: "/img/card-Paula.webp",
      descripcion:
        "Apasionada por la tecnología y el desarrollo web. Especializada en HTML, CSS, PHP y JavaScript.",
      especialidades: ["HTML", "CSS", "PHP", "JavaScript"],
      ruta: "/paula",
      color: "rgb(58, 213, 252)",
    },
    {
      nombre: "Micaela",
      edad: 31,
      ubicacion: "Buenos Aires, Argentina",
      rol: "Frontend Developer & Design Enthusiast",
      avatar: "/img/card-Micaela.webp",
      descripcion:
        "Creativa y detallista, combina diseño y programación. Aficionada a la impresión 3D y el café.",
      especialidades: [
        "Impresión 3D",
        "Diseño Creativo",
        "Programación",
        "Café ☕",
      ],
      ruta: "/micaela",
      color: "#F8B55F",
    },
    {
      nombre: "María",
      edad: 44,
      ubicacion: "Córdoba, Argentina",
      rol: "Creative Designer & Project Manager",
      avatar: "/img/card-Maria.webp",
      descripcion:
        "Organizada y comunicativa, combina su experiencia en gestión de proyectos con una visión artística que da identidad y equilibrio al equipo.",
      especialidades: [
        "Organización",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Comunicación",
      ],
      ruta: "/maria",
      color: "#F8B55F",
    },
  ];

  return (
    <div className="integrantes">
      <HeroSection
        title="Nuestro Equipo"
        subtitle="Conocé a las integrantes del Grupo 11"
        gradient="linear-gradient(135deg, rgba(255,217,61,0.1), rgba(0,212,255,0.1))"
      />

      <section className="equipo-actual">
        <h2>Integrantes Activos</h2>
        <div className="integrantes-grid">
          {integrantes.map((i, index) => (
            <Link
              key={index}
              to={i.ruta}
              className="integrante-card"
              style={{ "--color-principal": i.color }}
            >
              <div className="integrante-avatar">
                <img src={i.avatar} alt={`${i.nombre} Avatar`} />
                <div className="avatar-overlay">
                  <span>Ver Portal</span>
                </div>
              </div>

              <div className="integrante-info">
                <h3>{i.nombre}</h3>
                <p className="rol">{i.rol}</p>
                <p className="ubicacion">📍 {i.ubicacion}</p>
                <p className="descripcion">{i.descripcion}</p>

                <div className="especialidades">
                  <h4>Especialidades:</h4>
                  <div className="especialidades-tags">
                    {i.especialidades.map((esp, j) => (
                      <span key={j} className="especialidad-tag">
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="nota-cambios">
        <div className="nota-box">
          <h3>📝 Nota sobre el Equipo</h3>
          <p>
            Para este TP2, el equipo está conformado por <strong>Paula</strong>, <strong>Micaela</strong> y <strong>María</strong>.
    Cada integrante mantiene su propio portal individual con un estilo y personalidad únicos,
    reflejando la diversidad creativa del grupo y su compromiso con el desarrollo colaborativo.
          </p>
          <p>
            Las secciones individuales incluyen información sobre habilidades, películas y música favoritas,
    con un enfoque en el diseño personalizado y la integración dinámica de datos para fortalecer la práctica en React.
          </p>
        </div>
      </section>
    </div>
  )
}


