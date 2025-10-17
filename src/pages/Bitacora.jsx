import './Bitacora.css'

export default function Bitacora() {
  const eventos = [
    {
      fecha: "01/09/25",
      titulo: "Inicio del Proyecto",
      descripcion: "Primera reunión del equipo. Definición de roles y objetivos del TP1.",
      tipo: "inicio"
    },
    {
      fecha: "05/09/25",
      titulo: "Diseño y Estructura",
      descripcion: "Creación de wireframes y definición de la estructura del sitio web.",
      tipo: "diseño"
    },
    {
      fecha: "12/09/25",
      titulo: "Desarrollo HTML/CSS",
      descripcion: "Implementación de páginas principales y estilos personalizados por integrante.",
      tipo: "desarrollo"
    },
    {
      fecha: "18/09/25",
      titulo: "Funcionalidad JavaScript",
      descripcion: "Agregado de interactividad, carruseles de imágenes y efectos dinámicos.",
      tipo: "desarrollo"
    },
    {
      fecha: "20/09/25",
      titulo: "Entrega TP1",
      descripcion: "Finalización y entrega del primer trabajo práctico.",
      tipo: "entrega"
    },
    {
      fecha: "22/09/25",
      titulo: "Inicio TP2",
      descripcion: "Lanzamiento del segundo trabajo práctico: migración a React.",
      tipo: "inicio"
    },
    {
      fecha: "25/09/25",
      titulo: "Configuración React",
      descripción: "Setup del proyecto React con Vite, instalación de dependencias y estructura inicial.",
      tipo: "desarrollo"
    },
    {
      fecha: "02/10/25",
      titulo: "Componentes Básicos",
      descripcion: "Creación de componentes reutilizables y configuración del routing.",
      tipo: "desarrollo"
    },
    {
      fecha: "08/10/25",
      titulo: "Migración de Contenido",
      descripcion: "Traslado del contenido del TP1 a los nuevos componentes React.",
      tipo: "desarrollo"
    },
    {
      fecha: "12/10/25",
      titulo: "API y JSON",
      descripcion: "Implementación de la sección de películas (JSON) y consumo de API pública.",
      tipo: "desarrollo"
    },
    {
      fecha: "15/10/25",
      titulo: "Estilos y Responsive",
      descripcion: "Refinamiento de estilos CSS y adaptación responsive para móviles.",
      tipo: "diseño"
    },
    {
      fecha: "18/10/25",
      titulo: "Testing y Documentación",
      descripcion: "Pruebas finales, documentación del README y preparación para entrega.",
      tipo: "testing"
    },
    {
      fecha: "20/10/25",
      titulo: "Entrega TP2",
      descripcion: "Entrega final del trabajo práctico en React SPA.",
      tipo: "entrega"
    }
  ]

  const getTipoIcon = (tipo) => {
    const icons = {
      inicio: "🚀",
      diseño: "🎨", 
      desarrollo: "💻",
      entrega: "📋",
      testing: "🔍"
    }
    return icons[tipo] || "📌"
  }

  const getTipoColor = (tipo) => {
    const colors = {
      inicio: "var(--primary-color)",
      diseño: "var(--secondary-color)",
      desarrollo: "var(--accent-color)",
      entrega: "#4ade80",
      testing: "#a78bfa"
    }
    return colors[tipo] || "var(--primary-color)"
  }

  return (
    <div className="bitacora">
      <section className="hero-bitacora">
        <div className="hero-content">
          <h1>Bitácora de Desarrollo</h1>
          <p>Registro del proceso de creación del TechVerse</p>
        </div>
      </section>

      <section className="timeline-section">
        <h2>Línea de Tiempo del Proyecto</h2>
        <div className="timeline-container">
          {eventos.map((evento, index) => (
            <div key={index} className="timeline-item" data-date={evento.fecha}>
              <div className="timeline-content" style={{'--tipo-color': getTipoColor(evento.tipo)}}>
                <div className="timeline-header">
                  <span className="timeline-icon">{getTipoIcon(evento.tipo)}</span>
                  <h3>{evento.titulo}</h3>
                  <span className="timeline-date">{evento.fecha}</span>
                </div>
                <p>{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="decisiones-section">
        <h2>Decisiones del Proyecto</h2>
        <div className="cards-grid">
          <div className="decision-card">
            <h3>🎯 Tecnologías Elegidas</h3>
            <p>Decidimos usar React con Vite para mejor rendimiento y experiencia de desarrollo moderna.</p>
          </div>
          <div className="decision-card">
            <h3>🎨 Diseño Individual</h3>
            <p>Cada integrante mantiene su estilo único en sus páginas personales, creando diversidad visual.</p>
          </div>
          <div className="decision-card">
            <h3>📱 Responsive Design</h3>
            <p>Implementamos diseño adaptable con mobile-first approach para mejor accesibilidad.</p>
          </div>
          <div className="decision-card">
            <h3>🔄 SPA Navigation</h3>
            <p>Single Page Application con React Router para navegación fluida sin recargas de página.</p>
          </div>
        </div>
      </section>

      <section className="cambios-section">
        <h2>Cambios y Mejoras</h2>
        <div className="cambios-list">
          <div className="cambio-item">
            <h4>🔧 Migración a React</h4>
            <p>Transformación de sitio estático HTML/CSS/JS a SPA React con componentes reutilizables.</p>
          </div>
          <div className="cambio-item">
            <h4>📊 Datos Dinámicos</h4>
            <p>Implementación de sección de películas con datos JSON y consumo de API externa.</p>
          </div>
          <div className="cambio-item">
            <h4>🚀 Performance</h4>
            <p>Optimización de carga con lazy loading y componentes eficientes.</p>
          </div>
          <div className="cambio-item">
            <h4>🎯 UX Mejorada</h4>
            <p>Navegación más intuitiva con sidebar fijo y transiciones suaves.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

