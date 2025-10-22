// src/pages/MusicaPlayer.jsx
import { useState, useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import { MusicaCardWithPlayer } from "../components/AudioPlayer";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function MusicaPlayer() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('coldplay');

  const fetchiTunes = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`
      );
      const data = await response.json();
      setCanciones(data.results || []);
    } catch (error) {
      console.error('Error al buscar en iTunes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchiTunes(searchTerm);
  }, []);

  if (loading) return <div className="loading">🎵 Cargando canciones...</div>;

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎵 Reproductor de Música"
        subtitle="Busca y reproduce previews de 30 segundos con iTunes API"
        accentColor="#EC4899"
      />

      <section className="media-listado card">
        {/* Buscador */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto 2rem',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchiTunes(searchTerm)}
            placeholder="Buscar artista o canción..."
            style={{
              flex: 1,
              padding: '12px 20px',
              borderRadius: '10px',
              border: '2px solid rgba(236, 72, 153, 0.3)',
              background: 'rgba(0,0,0,0.3)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button
            onClick={() => fetchiTunes(searchTerm)}
            className="btn-outline"
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              whiteSpace: 'nowrap'
            }}
          >
            🔍 Buscar
          </button>
        </div>

        <h2>Resultados de búsqueda</h2>
        <p className="api-indicator">
          {canciones.length} canciones • iTunes API
        </p>

        <div className="grid-media">
          {canciones.map((song) => (
            <MusicaCardWithPlayer key={song.trackId} song={song} />
          ))}
        </div>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: '#bbb', fontSize: '0.9rem' }}>
          🎧 Previews de 30 segundos • Powered by iTunes Search API
        </p>
      </section>
    </div>
  );
}