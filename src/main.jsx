// Punto de entrada principal de la aplicación React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './styles/variables.css';       //  colores y fuente
import './styles/layout.css';          //  estructura general
import './styles/IntegrantesBase.css'; //  base común entre integrantes
import './styles/util.css';            // utilidades globales (cards, grids, etc.)


// Renderizar la aplicación con React Router para SPA
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


