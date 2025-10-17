// Portal individual de María con rutas corregidas
import { useState, useEffect } from 'react'
import SeccionIntegrante from '../components/SeccionIntegrante'
import './Maria.css'

export default function Maria() {
  const [peliculas, setPeliculas] = useState([])
  const [musica, setMusica] = useState([])
  const [loading, setLoading] = useState(true)

  const habilidades = [
    'Organización',
    'Trabajo en equipo',
    'Resolución de problemas', 
    'Comunicación'
  ]

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        // Datos reales de películas con placeholders
        const pelisData = [
          { 
            id: 1, 
            titulo: 'El viaje de Chihiro', 
            year: 2001, 
            url: 'https://www.imdb.com/title/tt0245429', 
            poster: '/img/placeholder-movie.webp' 
          },
          { 
            id: 2, 
            titulo: 'Mi vecino Totoro', 
            year: 1988, 
            url: 'https://www.imdb.com/title/tt0096283', 
            poster: '/img/placeholder-movie.webp' 
          },
          { 
            id: 3, 
            titulo: 'El castillo ambulante', 
            year: 2004, 
            url: 'https://www.imdb.com/title/tt0347149', 
            poster: '/img/placeholder-movie.webp' 
          }
        ]
        
        // Datos reales de música con placeholders
        const musicaData = [
          { 
            id: 1, 
            artista: 'Hoobastank - The Reason', 
            url: 'https://open.spotify.com/track/0b6ClwdUNgz8IpKMnhiznE', 
            imagen: '/img/placeholder-artist.webp'
          },
          { 
            id: 2, 
            artista: 'Audioslave - Like a Stone', 
            url: 'https://open.spotify.com/track/7KwZNVEaqikRSBSpQc0ojQ', 
            imagen: '/img/placeholder-artist.webp'
          },
          { 
            id: 3, 
            artista: 'Keane - The Way I Feel', 
            url: 'https://open.spotify.com/track/5Q0Nhxo0l2bP3pNjpGJwV1', 
            imagen: '/img/placeholder-artist.webp'
          }
        ]
        
        setTimeout(() => {
          setPeliculas(pelisData)
          setMusica(musicaData)
          setLoading(false)
        }, 800)
        
      } catch (error) {
        console.error('Error cargando datos:', error)
        setLoading(false)
      }
    }

    fetchDatos()
  }, [])

  return (
    <div className="maria-page">
      <section className="tarjeta-maria">
        <div className="avatar-container">
          <img 
            src="/img/maria-pixel-1.png" 
            alt="Avatar María" 
            className="avatar-img"
          />
        </div>
        
        <div className="contenido-maria">
          <h2>María</h2>
          <div className="info-basica">
            <p><strong>Ubicación:</strong> Córdoba, Argentina</p>
            <p><strong>Edad:</strong> 44 años</p>
            <p><strong>Rol:</strong> Creative Designer & Project Manager</p>
          </div>
          
          {loading ? (
            <div className="loading-section">
              <p>⏳ Cargando información personal...</p>
            </div>
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
  )
}




