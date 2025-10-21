//Micaela.jsx - Portal individual de Micaela

import { useState, useEffect } from "react";
import SeccionIntegrante from "../../components/SeccionIntegrante";
import { getDeezerArtists } from "../../utils/getDeezerArtists";
import data from "../../data/peliculas.json";
import "../../styles/IntegrantesBase.css";  // 💡 estructura común base
import "./Micaela.css";                    // 💜 colores y tema personalizado

export default function Micaela() {
  const [avatar, setAvatar] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(true);

  const habilidades = [
    "Impresión 3D",
    "Diseño Creativo",
    "Programación",
    "Hacer café ☕",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🎬 Películas favoritas desde JSON global
        const peliculasFavoritas = data.peliculas.filter((p) =>
          ["Twister", "Volver al Futuro", "Mulan"].includes(p.titulo)
        );

        // 🎧 Artistas Deezer (usando la función utilitaria)
        const musicaFavorita = await getDeezerArtists([
          "BTS",
          "Miranda!",
          "5 Seconds of Summer",
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
    <div className="integrante-page micaela-theme fade-in">
      <section className="tarjeta-integrante">
        <div
          className="avatar-container"
          onMouseEnter={() => setAvatar(2)}
          onMouseLeave={() => setAvatar(1)}
        >
          <img
            src={`/img/avatar-mica${avatar}.webp`}
            alt="Avatar de Micaela"
            className="avatar-img"
            onError={(e) => (e.currentTarget.src = "/img/avatar-mica1.webp")}
          />
        </div>

        <div className="contenido-integrante">
          <h1>Micaela</h1>
          <p className="rol">Frontend Developer & Design Enthusiast</p>

          <div className="info-basica">
            <p><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
            <p><strong>Edad:</strong> 31 años</p>
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

