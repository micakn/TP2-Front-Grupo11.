import { useState, useEffect, useRef, createContext, useContext } from 'react';

// ===================================
// 🎵 CONTEXTO GLOBAL DE AUDIO
// ===================================
const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.7;
    }

    const audio = audioRef.current;

    const handleEnded = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleError = (e) => {
      console.error('Error al reproducir:', e);
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.preview;
    
    if (isPlaying) {
      audio.play().catch(err => {
        console.error('Error al reproducir:', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying]);

  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const stopTrack = () => {
    setIsPlaying(false);
    setCurrentTrack(null);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <AudioContext.Provider value={{ 
      currentTrack, 
      isPlaying, 
      currentTime,
      duration,
      playTrack, 
      stopTrack,
      seekTo
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);

// ===================================
// 🎴 MÚSICA CARD CON REPRODUCTOR
// ===================================
export function MusicaCardWithPlayer({ song }) {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const isCurrentTrack = currentTrack?.id === song.trackId;
  const isThisPlaying = isCurrentTrack && isPlaying;

  return (
    <article 
      className="card-media fade-in" 
      style={{
        borderColor: isCurrentTrack ? '#00d4ff' : 'rgba(255,255,255,0.1)',
        boxShadow: isCurrentTrack ? '0 0 20px rgba(0,212,255,0.4)' : 'none',
        transition: 'all 0.3s ease',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '15px',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={song.artworkUrl100?.replace('100x100', '600x600') || song.artworkUrl100}
          alt={song.trackName}
          loading="lazy"
          style={{ 
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            filter: isThisPlaying ? 'brightness(0.6)' : 'brightness(1)',
            transition: 'filter 0.3s ease'
          }}
        />
        {isThisPlaying && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            color: 'white',
            textShadow: '0 0 20px rgba(0,0,0,0.8)',
            animation: 'pulse 1.5s infinite'
          }}>
            🎵
          </div>
        )}
      </div>

      <div className="media-info" style={{ padding: '1.2rem' }}>
        <h3 style={{ 
          fontSize: '1.1rem', 
          marginBottom: '0.5rem',
          color: '#fff',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {song.trackName}
        </h3>
        <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.3rem 0' }}>
          <strong>Artista:</strong> {song.artistName}
        </p>
        <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.3rem 0' }}>
          <strong>Álbum:</strong> {song.collectionName}
        </p>
        <p style={{ color: '#ccc', fontSize: '0.85rem', margin: '0.3rem 0' }}>
          <strong>Género:</strong> {song.primaryGenreName}
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginTop: '1rem', 
          flexDirection: 'column'
        }}>
          <button
            onClick={() => playTrack({ 
              id: song.trackId, 
              title: song.trackName, 
              artist: song.artistName,
              preview: song.previewUrl,
              cover: song.artworkUrl100?.replace('100x100', '600x600')
            })}
            style={{
              width: '100%',
              padding: '10px 16px',
              background: isThisPlaying 
                ? 'linear-gradient(135deg, #ff6b6b, #ee5a6f)' 
                : 'linear-gradient(135deg, #00d4ff, #006a71)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,212,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {isThisPlaying ? '⏸️ Pausar Preview' : '▶️ Reproducir Preview 30s'}
          </button>

          {/* 🔹 Enlace corregido */}
          <a
            href={song.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              padding: '10px 16px',
              background: 'linear-gradient(135deg, #EC4899, #DB2777)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.9rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              display: 'block',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(236,72,153,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            🍎 Ver en iTunes
          </a>
        </div>
      </div>
    </article>
  );
}

// ===================================
// 🎮 PLAYER GLOBAL FLOTANTE COMPLETO
// ===================================
export function GlobalMusicPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, playTrack, stopTrack, seekTo } = useAudio();

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.95), rgba(0, 106, 113, 0.95))',
        backdropFilter: 'blur(10px)',
        padding: '1.25rem',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.5)',
        zIndex: 9999,
        minWidth: '350px',
        maxWidth: '90vw',
        border: '2px solid rgba(0, 212, 255, 0.4)',
        animation: 'slideUp 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src={currentTrack.cover || '/img/placeholder-artist.webp'}
            alt={currentTrack.title}
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '3px solid rgba(255,255,255,0.4)',
              animation: isPlaying ? 'spin 6s linear infinite' : 'none'
            }}
          />

          <div style={{ flex: 1, minWidth: 0 }}>
            <h4 style={{ 
              margin: 0, 
              fontSize: '1rem', 
              color: 'white',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {currentTrack.title}
            </h4>
            <p style={{ 
              margin: '0.3rem 0', 
              fontSize: '0.85rem', 
              color: 'rgba(255,255,255,0.8)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {currentTrack.artist}
            </p>
            
            {/* Barra de progreso */}
            <div style={{ 
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                fontSize: '0.7rem', 
                color: 'rgba(255,255,255,0.7)',
                minWidth: '35px'
              }}>
                {formatTime(currentTime)}
              </span>
              <div 
                style={{
                  flex: 1,
                  height: '6px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percent = x / rect.width;
                  seekTo(percent * duration);
                }}
              >
                <div style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.8))',
                  transition: 'width 0.1s linear'
                }} />
              </div>
              <span style={{ 
                fontSize: '0.7rem', 
                color: 'rgba(255,255,255,0.7)',
                minWidth: '35px',
                textAlign: 'right'
              }}>
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => playTrack(currentTrack)}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: '2px solid white',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            <button
              onClick={stopTrack}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: '2px solid white',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ⏹️
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '0.75rem',
          padding: '0.5rem',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '8px',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center'
        }}>
          🎵 Preview de 30s • Powered by iTunes API
        </div>
      </div>
    </>
  );
}
