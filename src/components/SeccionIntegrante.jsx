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
          onClick={() =>
            setSeccionActiva(
              seccionActiva === 'habilidades' ? null : 'habilidades'
            )
          }
        >
          Habilidades
        </button>
        <button
          className={`btn ${seccionActiva === 'peliculas' ? 'active' : ''}`}
          onClick={() =>
            setSeccionActiva(
              seccionActiva === 'peliculas' ? null : 'peliculas'
            )
          }
        >
          Películas
        </button>
        <button
          className={`btn ${seccionActiva === 'musica' ? 'active' : ''}`}
          onClick={() =>
            setSeccionActiva(seccionActiva === 'musica' ? null : 'musica')
          }
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
            {peliculas.map((peli) => (
              <div key={peli.id || peli.titulo} className="pelicula-card">
                <img
                  loading="lazy"
                  src={peli.poster || '/img/placeholder-movie.webp'}
                  alt={peli.titulo}
                  onError={(e) =>
                    (e.currentTarget.src = '/img/placeholder-movie.webp')
                  }
                />
                <div className="pelicula-info">
                  <h3>{peli.titulo}</h3>
                  {/* Admite 'año' o 'year' */}
                  <p>
                    <strong>Año:</strong> {peli.year ?? peli.año ?? 'Desconocido'}
                  </p>
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
            {musica.map((track) => (
              <div key={track.id || track.artista} className="musica-card">
                <img
                  loading="lazy"
                  src={track.imagen || '/img/placeholder-artist.webp'}
                  alt={track.artista}
                  onError={(e) =>
                    (e.currentTarget.src = '/img/placeholder-artist.webp')
                  }
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

