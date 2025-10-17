// Sidebar.jsx - versión mejorada y accesible
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
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
        <li>
          <NavLink to="/" className="menu-link">
            🏠 Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/bitacora" className="menu-link">
            📋 Bitácora
          </NavLink>
        </li>
        <li>
          <NavLink to="/integrantes" className="menu-link">
            👥 Integrantes
          </NavLink>
        </li>
        <li>
          <NavLink to="/diagramas" className="menu-link">
            📊 Diagramas
          </NavLink>
        </li>
        <li>
          <NavLink to="/peliculas" className="menu-link">
            🎬 Películas
          </NavLink>
        </li>
        <li>
          <NavLink to="/musica" className="menu-link">
            🎶 Música
          </NavLink>
        </li>

        <li className="menu-section">Portales Individuales</li>
        <li>
          <NavLink to="/micaela" className="menu-link">
            🎮 Micaela
          </NavLink>
        </li>
        <li>
          <NavLink to="/paula" className="menu-link">
            🌌 Paula
          </NavLink>
        </li>
        <li>
          <NavLink to="/maria" className="menu-link">
            ✨ María
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">TP2 React · 2025</div>
    </nav>
  );
}





