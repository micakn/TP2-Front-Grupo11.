// Peliculas.jsx - Con HeroSection
import HeroSection from "../components/ui/HeroSection";
import PeliculaCard from "../components/cards/PeliculaCard";
import data from "../data/peliculas.json";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function Peliculas() {
  // Normaliza los datos del JSON
  const peliculas = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, // Usa 'año' si no existe 'year'
  }));

  return (
    <div className="media-page fade-in">
      <HeroSection
  title="🎬 Catálogo de Películas"
  subtitle="Datos obtenidos desde un archivo local JSON"
  accentColor="#00d4ff"
/>

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




