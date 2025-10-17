// Componente reutilizable para mostrar habilidades, películas y música
import { useState } from 'react'
import './SeccionIntegrante.css'

export default function SeccionIntegrante({ habilidades, peliculas, musica }) {
  const [seccionActiva, setSeccionActiva] = useState(null)

  return (
    <div className="secciones-integrante">
      {/* Botones de navegación entre secciones */}
      <div className="botones">
        <button 
          className={`btn ${seccionActiva === 'habilidades' ? 'active' : ''}`}
          onClick={() => setSeccionActiva(seccionActiva === 'habilidades' ? null : 'habilidades')}
        >
          Habilidades
        </button>
        <button 
          className={`btn ${seccionActiva === 'peliculas' ? 'active' : ''}`}
          onClick={() => setSeccionActiva(seccionActiva === 'peliculas' ? null : 'peliculas')}
        >
          Películas
        </button>
        <button 
          className={`btn ${seccionActiva === 'musica' ? 'active' : ''}`}
          onClick={() => setSeccionActiva(seccionActiva === 'musica' ? null : 'musica')}
        >
          Música
        </button>
      </div>

      {/* Sección de Habilidades */}
      {seccionActiva === 'habilidades' && (
        <div className="seccion fadeIn">
          <h2>💡 Habilidades</h2>
          <ul className="habilidades-lista">
            {habilidades.map((habilidad, index) => (
              <li key={index}>{habilidad}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sección de Películas */}
      {seccionActiva === 'peliculas' && (
        <div className="seccion fadeIn">
          <h2>🎬 Películas Favoritas</h2>
          <div className="peliculas-grid">
            {peliculas.map(peli => (
              <div key={peli.id} className="pelicula-card">
                <img 
                  src={peli.poster} 
                  alt={peli.titulo}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="pelicula-info">
                  <h3>{peli.titulo}</h3>
                  <p>{peli.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sección de Música */}
      {seccionActiva === 'musica' && (
        <div className="seccion fadeIn">
          <h2>🎵 Música Favorita</h2>
          <div className="musica-grid">
            {musica.map(track => (
              <div key={track.id} className="musica-card">
                <img 
                  src={track.imagen} 
                  alt={track.artista}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="musica-info">
                  <h3>{track.artista}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
