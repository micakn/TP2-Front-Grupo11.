import { useState, useEffect } from 'react'
import SeccionIntegrante from '../components/SeccionIntegrante'
import './Micaela.css'

export default function Micaela() {
  const [avatar, setAvatar] = useState(1)
  const [peliculas, setPeliculas] = useState([])
  const [musica, setMusica] = useState([])
  const [loading, setLoading] = useState(true)

  // Datos correctos de Micaela del TP1
  const habilidades = [
    'Impresión 3D',
    'Diseño Creativo', 
    'Programación',
    'Hacer café'
  ]

  useEffect(() => {
    // Simulamos fetch de API con datos del TP1 de Micaela
    const fetchDatos = async () => {
      try {
        // Datos reales de películas de Micaela del TP1
        const pelisData = [
          { id: 1, titulo: 'Twister', year: 1996, url: 'https://www.imdb.com/title/tt0117998', poster: '/img/peli-twister.jpg' },
          { id: 2, titulo: 'Volver al Futuro', year: 1985, url: 'https://www.imdb.com/title/tt0088763', poster: '/img/peli-volver-futuro.jpg' },
          { id: 3, titulo: 'Mulan', year: 1998, url: 'https://www.imdb.com/title/tt0120762', poster: '/img/peli-mulan.jpg' }
        ]
        
        // Datos reales de música de Micaela del TP1  
        const musicaData = [
          { id: 1, artista: 'BTS', url: 'https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX', imagen: '/img/artist-bts.jpg' },
          { id: 2, artista: 'Miranda!', url: 'https://open.spotify.com/intl-es/artist/2eEmsgWmUFMbtU7agJpnjY', imagen: '/img/artist-miranda.jpg' },
          { id: 3, artista: '5 Seconds of Summer', url: 'https://open.spotify.com/intl-es/artist/5Rl15oVamLq7FbSb0NNBNy', imagen: '/img/artist-5sos.jpg' }
        ]

        // Simular delay de API
        setTimeout(() => {
          setPeliculas(pelisData)
          setMusica(musicaData)
          setLoading(false)
        }, 1000)

      } catch (error) {
        console.error('Error cargando datos:', error)
        setLoading(false)
      }
    }

    fetchDatos()
  }, [])

  return (
    <div className="micaela-page">
      <section className="tarjeta-mica">
        <div 
          className="avatar-container"
          onMouseEnter={() => setAvatar(2)}
          onMouseLeave={() => setAvatar(1)}
        >
          <img 
            src={`/img/avatar-mica${avatar}.webp`} 
            alt="Avatar Micaela" 
            className="avatar-img"
          />
        </div>
        
        <div className="contenido">
          <h1>Micaela</h1>
          <div className="info-basica">
            <p><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
            <p><strong>Edad:</strong> 31 años</p>
            <p><strong>Rol:</strong> Frontend Developer & Design Enthusiast</p>
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

