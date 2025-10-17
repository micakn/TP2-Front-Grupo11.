// Componente raíz con configuración de rutas
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Bitacora from './pages/Bitacora'
import Integrantes from './pages/Integrantes'
import Micaela from './pages/Micaela'
import Paula from './pages/Paula'
import Maria from './pages/Maria'
import Diagramas from './pages/Diagramas'
import Musica from './pages/Musica'
import Peliculas from './pages/Peliculas' // ✅ AGREGADO
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Sidebar fijo con navegación */}
      <Sidebar />
      
      {/* Contenido principal que cambia según la ruta */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/micaela" element={<Micaela />} />
          <Route path="/paula" element={<Paula />} />
          <Route path="/maria" element={<Maria />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/peliculas" element={<Peliculas />} /> {/* ✅ NUEVA RUTA */}
        </Routes>
      </main>
    </div>
  )
}



