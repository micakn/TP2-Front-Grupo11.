// 🎬 Peliculas.jsx — listado desde JSON local con PeliculaCard unificada
import "../styles/util.css";               // grid-media, card-media, botones, etc.
import "../styles/MediaPages.css";         // nuevo archivo unificado
import PeliculaCard from "../components/cards/PeliculaCard";
import data from "../data/peliculas.json";

export default function Peliculas() {
  // Normaliza los datos del JSON
  const peliculas = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, // Usa 'año' si no existe 'year'
  }));

  return (
    <div
      className="media-page fade-in"
      style={{ "--accent-color": "#00d4ff" }} // 🎨 color de acento (azul celeste)
    >
      <section className="hero-media">
        <h1>🎬 Catálogo de Películas</h1>
        <p>Datos obtenidos desde un archivo local JSON</p>
      </section>

      <section className="media-listado card">
        <h2>Listado dinámico</h2>
        <p className="api-indicator">
          Mostrando {peliculas.length} películas
        </p>

        <div className="grid-media">
          {peliculas.map((peli) => (
            <PeliculaCard
              key={peli.id || peli.titulo}
              poster={peli.poster}
              titulo={peli.titulo}
              year={peli.year}
              genero={peli.genero}
              director={peli.director}
              duracion={peli.duracion}
              rating={peli.rating}
              url={peli.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}




