//Peliculas.jsx
import "./Peliculas.css";
import data from "../data/peliculas.json";

export default function Peliculas() {
 
  const peliculas = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, // usa 'año' si 'year' no existe
  }));

  return (
    <div className="peliculas-page">
      <section className="hero-peliculas">
        <h1>🎬 Catálogo de Películas</h1>
        <p>Datos obtenidos desde un archivo local JSON</p>
      </section>

      <section className="peliculas-listado">
        <h2>Listado dinámico</h2>
        <p className="api-indicator">Mostrando {peliculas.length} películas</p>

        <div className="peliculas-grid">
          {peliculas.map((peli) => (
            <div key={peli.id} className="pelicula-card">
              <img
                loading="lazy"
                src={peli.poster || "/img/placeholder-movie.webp"}
                alt={peli.titulo}
                onError={(e) => (e.currentTarget.src = "/img/placeholder-movie.webp")}
              />
              <div className="pelicula-info">
                <h3>{peli.titulo}</h3>
                <p><strong>Año:</strong> {peli.year}</p>
                <p><strong>Género:</strong> {peli.genero}</p>
                <p><strong>Director:</strong> {peli.director}</p>
                <p><strong>Duración:</strong> {peli.duracion}</p>
                <p><strong>Rating IMDb:</strong> {peli.rating}</p>
                <a
                  href={peli.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ver-imdb"
                >
                  Ver en IMDb
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

