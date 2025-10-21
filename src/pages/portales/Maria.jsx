import { useState, useEffect } from "react";
import SeccionIntegrante from "../../components/SeccionIntegrante";
import { getDeezerArtists } from "../../utils/getDeezerArtists";
import data from "../../data/peliculas.json";
import "../../styles/IntegrantesBase.css";
import "./Maria.css";

export default function Maria() {
  const [peliculas, setPeliculas] = useState([]);
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(true);

  const habilidades = [
    "Organización",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Comunicación",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoritas = ["el viaje de chihiro", "mi vecino totoro", "el castillo ambulante"];

        // 🎬 Películas favoritas (sin importar mayúsculas)
        const peliculasFavoritas = data.peliculas.filter((p) =>
          favoritas.includes(p.titulo.toLowerCase())
        );

        // 🎧 Música desde Deezer
        const musicaFavorita = await getDeezerArtists([
          "Hoobastank",
          "Audioslave",
          "Keane",
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
    <div className="integrante-page maria-theme fade-in">
      <section className="tarjeta-integrante">
        <div className="avatar-container">
          <img
            src="/img/maria-pixel-1.png"
            alt="Avatar de María"
            className="avatar-img"
          />
        </div>

        <div className="contenido-integrante">
          <h1>María</h1>
          <p className="rol">Creative Designer & Project Manager</p>

          <div className="info-basica">
            <p><strong>Ubicación:</strong> Córdoba, Argentina</p>
            <p><strong>Edad:</strong> 44 años</p>
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



