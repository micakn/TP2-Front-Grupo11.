// App.jsx - estructura principal con Sidebar controlada
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Integrantes from "./pages/Integrantes";
import Micaela from "./pages/portales/Micaela";
import Paula from "./pages/portales/Paula";
import Maria from "./pages/portales/Maria";
import Diagramas from "./pages/Diagramas";
import Musica from "./pages/Musica";
import Peliculas from "./pages/Peliculas";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="main-content" onClick={() => sidebarOpen && toggleSidebar()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/micaela" element={<Micaela />} />
          <Route path="/paula" element={<Paula />} />
          <Route path="/maria" element={<Maria />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      </main>
    </div>
  );
}
