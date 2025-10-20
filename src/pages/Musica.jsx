/* codigo para pruebas locales
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
*/
/*
-------------------------------------------
🌐 Versión para DEPLOY en Vercel (sin proxy)
-------------------------------------------  */

import { useEffect, useState } from "react";
import "./Musica.css";

export default function Musica() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function obtenerMusica() {
      try {
        // Llamada al backend (api/deezer.js)
        const res = await fetch("/api/deezer");
        const data = await res.json();

        // Ruta correcta del JSON de Deezer
        setTracks(data.tracks?.data || []);
      } catch (err) {
        console.error("Error al obtener datos de Deezer:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    obtenerMusica();
  }, []);

  if (loading) return <p className="loading">🎧 Cargando canciones...</p>;
  if (error) return <p className="error">❌ Error al cargar música.</p>;

  return (
    <div className="musica-page">
      <section className="hero-musica">
        <h1>🎶 Descubrí el Top Global de Deezer</h1>
        <p className="api-indicator">
          Datos obtenidos desde la API pública de Deezer
        </p>
      </section>

      <div className="musica-grid">
        {tracks.map((track) => (
          <div key={track.id} className="musica-card">
            <img
              src={track.album.cover_medium}
              alt={track.title}
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="musica-info">
              <h3>{track.title}</h3>
              <p>{track.artist.name}</p>
              <a
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ver-deezer"
              >
                Ver en Deezer 🎧
              </a>
              <audio controls src={track.preview}></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


