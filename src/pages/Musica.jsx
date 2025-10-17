// Musica.jsx
import { useState, useEffect } from 'react';
import './Peliculas.css';

export default function Musica() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeezer = async () => {
      try {
        // 🔹 Versión LOCAL: usando proxy temporal (recordá activarlo en https://cors-anywhere.herokuapp.com/corsdemo)
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://api.deezer.com/chart/0/tracks'; // 🔹 Top global
        const response = await fetch(proxy + url);
        const data = await response.json();

        if (data.data) {
          setCanciones(data.data);
        } else {
          setError('No se encontraron canciones');
        }
      } catch (err) {
        setError('Error al cargar datos de Deezer');
        console.error('❌ Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeezer();
  }, []);

  if (loading) return (
    <div className="loading">
      <p>Cargando canciones de Deezer...</p>
    </div>
  );

  if (error) return (
    <div className="error">
      <p>{error}</p>
    </div>
  );

  return (
    <div className="peliculas-page">
      <section className="hero-peliculas">
        <h1>Top Global - Deezer</h1>
        <p>Las canciones más escuchadas del momento 🎵</p>
      </section>

      <section className="musica-api">
        <h2>Ranking mundial</h2>
        <div className="musica-grid">
          {canciones.map(song => (
            <div key={song.id} className="musica-card">
              <img 
                src={song.album.cover_medium || '/img/placeholder-artist.webp'}
                alt={song.title}
              />
              <div className="musica-info">
                <h3>{song.title}</h3>
                <p>Artista: {song.artist.name}</p>
                <p>Álbum: {song.album.title}</p>
                <a href={song.link} target="_blank" rel="noopener noreferrer" className="ver-spotify">
                  Escuchar en Deezer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



/* 
-------------------------------------------
🌐 Versión para DEPLOY en Vercel (sin proxy)
-------------------------------------------

import { useState, useEffect } from 'react';
import './Peliculas.css';

export default function Musica() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeezer = async () => {
      try {
        // ✅ Versión PRODUCCIÓN: llama al proxy /api/deezer de Vercel
        const response = await fetch('/api/deezer');
        const data = await response.json();
        if (data.data) {
          setCanciones(data.data);
        } else {
          setError('No se encontraron canciones');
        }
      } catch (err) {
        setError('Error al cargar datos de Deezer');
        console.error('Error al cargar datos de Deezer:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDeezer();
  }, []);

  if (loading) return (
    <div className="loading">
      <p>Cargando canciones de Deezer...</p>
    </div>
  );

  if (error) return (
    <div className="error">
      <p>{error}</p>
    </div>
  );

  return (
    <div className="peliculas-page">
      <section className="hero-peliculas">
        <h1>Top Global - Deezer</h1>
        <p>Las canciones más escuchadas del momento 🎵</p>
      </section>

      <section className="musica-api">
        <h2>Ranking mundial</h2>
        <p className="api-indicator">Canciones más escuchadas del ranking global</p>
        <div className="musica-grid">
          {canciones.map(song => (
            <div key={song.id} className="musica-card">
              <img 
                src={song.album.cover_medium || '/img/placeholder-artist.webp'}
                alt={song.title}
              />
              <div className="musica-info">
                <h3>{song.title}</h3>
                <p>Artista: {song.artist.name}</p>
                <p>Álbum: {song.album.title}</p>
                <a href={song.link} target="_blank" rel="noopener noreferrer" className="ver-spotify">
                  Escuchar en Deezer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
*/
