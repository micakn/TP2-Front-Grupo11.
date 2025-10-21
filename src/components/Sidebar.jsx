// Sidebar.jsx - versión final con menú hamburguesa y overlay
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const linksPrincipales = [
    { to: "/", label: "🏠 Inicio" },
    { to: "/bitacora", label: "📋 Bitácora" },
    { to: "/integrantes", label: "👥 Integrantes" },
    { to: "/diagramas", label: "📊 Diagramas" },
    { to: "/peliculas", label: "🎬 Películas" },
    { to: "/musica", label: "🎶 Música" },
  ];

  const linksPortales = [
    { to: "/micaela", label: "🎮 Micaela" },
    { to: "/paula", label: "🌌 Paula" },
    { to: "/maria", label: "✨ María" },
  ];

  return (
    <>
      {/* 🔹 Botón hamburguesa visible solo en móvil */}
      <button
        className={`hamburger-btn ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label="Alternar menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 🔹 Sidebar principal */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`} aria-label="Menú principal">
        <div className="sidebar-header">
          <img src="/img/logo-inicio.webp" alt="Logo del Grupo 11" className="logo" />
          <h2>Grupo 11</h2>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-section">Navegación</li>
          {linksPrincipales.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                onClick={toggleSidebar}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="menu-section">Portales Individuales</li>
          {linksPortales.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                onClick={toggleSidebar}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">TP2 React · 2025</div>
      </nav>

      {/* 🔹 Overlay para cerrar al hacer click afuera */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

