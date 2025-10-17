// Portal individual de Paula con rutas corregidas  
import { useState, useEffect } from 'react'
import SeccionIntegrante from '../components/SeccionIntegrante'
import './Paula.css'

export default function Paula() {
  const [peliculas, setPeliculas] = useState([])
  const [musica, setMusica] = useState([])
  const [loading, setLoading] = useState(true)

  const habilidades = ['HTML', 'CSS', 'PHP', 'JavaScript']

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        // Datos de películas de Paula con rutas reales de tu carpeta
        const pelisData = [
          { 
            id: 1, 
            titulo: 'Fragmentado', 
            year: 2016, 
            url: 'https://www.imdb.com/title/tt4972582', 
            poster: '/img/peli-fragmentado.webp' 
          },
          { 
            id: 2, 
            titulo: 'Harry Potter', 
            year: 2001, 
            url: 'https://www.imdb.com/title/tt0241527', 
            poster: '/img/peli-harrypotter.webp' 
          },
          { 
            id: 3, 
            titulo: 'Interstellar', 
            year: 2014, 
            url: 'https://www.imdb.com/title/tt0816692', 
            poster: '/img/peli-interestelar.webp' 
          },
          { 
            id: 4, 
            titulo: 'Inquebrantable', 
            year: 2014, 
            url: 'https://www.imdb.com/title/tt2758890', 
            poster: '/img/peli-inquebrantable_1.webp' 
          }
        ]
        
        // Datos de música con placeholders
        const musicaData = [
          { 
            id: 1, 
            artista: 'Soda Stereo', 
            url: 'https://open.spotify.com/artist/7An4yvF7hDYDolN4m5VjbA', 
            imagen: '/img/placeholder-artist.webp'
          },
          { 
            id: 2, 
            artista: 'No te va a gustar', 
            url: 'https://open.spotify.com/artist/4yiGA30x8D5roa8CjxCWcV', 
            imagen: '/img/placeholder-artist.webp'
          },
          { 
            id: 3, 
            artista: 'Carlos Rivera', 
            url: 'https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV', 
            imagen: '/img/placeholder-artist.webp'
          },
          { 
            id: 4, 
            artista: 'Airbag', 
            url: 'https://open.spotify.com/artist/4kI8Ie27vjvonwaB2ePh8T', 
            imagen: '/img/placeholder-artist.webp'
          }
        ]
        
        setTimeout(() => {
          setPeliculas(pelisData)
          setMusica(musicaData)
          setLoading(false)
        }, 1200)
        
      } catch (error) {
        console.error('Error cargando datos:', error)
        setLoading(false)
      }
    }

    fetchDatos()
  }, [])

  return (
    <div className="paula-page">
      <section className="tarjeta-paula">
        <div className="avatar-container">
          <img 
            src="/img/card-Paula.webp" 
            alt="Avatar Paula" 
            className="avatar-img"
          />
        </div>
        
        <div className="contenido-paula">
          <h1>Paula</h1>
          <div className="info-basica">
            <p><strong>Ubicación:</strong> Berazategui, Buenos Aires</p>
            <p><strong>Edad:</strong> 32 años</p>
            <p><strong>Rol:</strong> Full Stack Developer</p>
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





