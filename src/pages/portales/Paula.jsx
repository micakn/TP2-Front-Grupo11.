// ================================
// Paula.jsx - Portal individual de Paula
// Tema: Tech futurista azul
// ================================

import { useState, useEffect } from "react";
import SeccionIntegrante from "../../components/SeccionIntegrante";
import { getDeezerArtists } from "../../utils/getDeezerArtists";
import data from "../../data/peliculas.json"; // 💡 JSON global
import "../../styles/IntegrantesBase.css";
import "./Paula.css";

export default function Paula() {
  const [peliculas, setPeliculas] = useState([]);
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(true);

  const habilidades = ["HTML", "CSS", "PHP", "JavaScript"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🎬 Películas favoritas desde JSON global
        const peliculasFavoritas = data.peliculas.filter((p) =>
          ["Fragmentado", "Harry Potter", "Interstellar", "Inquebrantable"].includes(p.titulo)
        );

        // 🎧 Artistas favoritos (Deezer)
        const musicaFavorita = await getDeezerArtists([
          "Soda Stereo",
          "No Te Va Gustar",
          "Carlos Rivera",
          "Airbag",
        ]);

        setPeliculas(peliculasFavoritas);
        setMusica(musicaFavorita);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="integrante-page paula-theme fade-in">
      <section className="tarjeta-integrante">
        <div className="avatar-container">
          <img
            src="/img/card-Paula.webp"
            alt="Avatar de Paula"
            className="avatar-img"
          />
        </div>

        <div className="contenido-integrante">
          <h1>Paula</h1>
          <p className="rol">Full Stack Developer</p>

          <div className="info-basica">
            <p><strong>Ubicación:</strong> Berazategui, Buenos Aires</p>
            <p><strong>Edad:</strong> 32 años</p>
          </div>

          {loading ? (
            <div className="loading-section">⏳ Cargando información...</div>
          ) : (
            <SeccionIntegrante
              habilidades={habilidades}
              peliculas={peliculas}
              musica={musica}
            />
          )}
        </div>
      </section>
    </div>
  );
}
