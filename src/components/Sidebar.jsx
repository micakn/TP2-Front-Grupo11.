// Sidebar.jsx - versión final con menú hamburguesa y overlay accesible
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const linksPrincipales = [
  { to: "/", label: "🏠 Inicio" },
  { to: "/bitacora", label: "📋 Bitácora" },
  { to: "/integrantes", label: "👥 Integrantes" },
  { to: "/diagramas", label: "📊 Diagramas" },
  { to: "/peliculas", label: "🎬 Películas" },
  { to: "/musica", label: "🎶 Música (Deezer)" },
  { to: "/musica-player", label: "🎵 Reproductor (iTunes)" }, // 👈 NUEVA
];

  const linksPortales = [
    { to: "/micaela", label: "🎮 Micaela" },
    { to: "/paula", label: "🌌 Paula" },
    { to: "/maria", label: "✨ María" },
  ];

  // 🔹 Cierra el menú solo si el ancho de pantalla es móvil
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) toggleSidebar();
  };

  return (
    <>
      {/* 🍔 Botón hamburguesa visible solo en móvil */}
      <button
        className={`hamburger-btn ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label="Alternar menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 🧭 Sidebar principal */}
      <nav
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        aria-label="Menú principal de navegación"
      >
        <div className="sidebar-header">
          <img
            src="/img/logo-inicio.webp"
            alt="Logo del Grupo 11"
            className="logo"
          />
          <h2>Grupo 11</h2>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-section">Navegación</li>
          {linksPrincipales.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }
                onClick={handleLinkClick}
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
                className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🌙 Overlay accesible (cierra al click o Enter) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
          onClick={toggleSidebar}
          onKeyDown={(e) => e.key === "Enter" && toggleSidebar()}
        ></div>
      )}
    </>
  );
}
