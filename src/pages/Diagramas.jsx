// src/pages/Diagramas.jsx - Página que muestra diagramas y arquitectura de la aplicación
import './Diagramas.css'

export default function Diagramas() {
  return (
    <div className="diagramas">
      {/* Hero principal */}
      <section className="hero-diagramas">
        <h1>Diagramas y Arquitectura</h1>
        <p>Arquitectura y flujo de la aplicación React SPA</p>
      </section>

      {/* Arquitectura de la aplicación */}
      <section className="arquitectura-section">
        <h2>Arquitectura React SPA</h2>
        <div className="diagram-container">
          <div className="arquitectura-diagram">
            {/* Capa de presentación */}
            <div className="layer">
              <h3>Capa de Presentación</h3>
              <p>Componentes React que renderizan la interfaz</p>
              <div className="components-grid">
                <span>Pages</span>
                <span>Components</span>
                <span>Sidebar</span>
                <span>Router</span>
              </div>
            </div>
            
            <div className="arrow">↓</div>
            
            {/* Capa de lógica */}
            <div className="layer">
              <h3>Capa de Lógica</h3>
              <p>Estados, hooks y manejo de datos</p>
              <div className="components-grid">
                <span>useState</span>
                <span>useEffect</span>
                <span>Props</span>
                <span>State Management</span>
              </div>
            </div>
            
            <div className="arrow">↓</div>
            
            {/* Capa de datos */}
            <div className="layer">
              <h3>Capa de Datos</h3>
              <p>Fuentes de información y APIs</p>
              <div className="data-sources">
                <span>JSON Local</span>
                <span>APIs Simuladas</span>
                <span>Static Assets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estructura de componentes */}
      <section className="componentes-section">
        <h2>Estructura de Componentes</h2>
        <div className="componentes-tree">
          <div className="component-node root">
            <div className="component-name">App.jsx</div>
            <div className="children">
              <div className="component-node">
                <div className="component-name">Sidebar</div>
              </div>
              <div className="component-node">
                <div className="component-name">Router</div>
                <div className="children">
                  <div className="component-node">Home</div>
                  <div className="component-node">Bitacora</div>
                  <div className="component-node">Integrantes</div>
                  <div className="component-node">Micaela</div>
                  <div className="component-node">Paula</div>
                  <div className="component-node">María</div>
                  <div className="component-node">Diagramas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flujo de navegación */}
      <section className="flujo-section">
        <h2>Flujo de Navegación</h2>
        <div className="flujo-diagram">
          {/* Página principal */}
          <div className="page-node home">
            <h4>Home</h4>
            <p>Página principal con introducción al proyecto</p>
          </div>
          
          {/* Navegación */}
          <div className="navigation-arrows">
            <span className="nav-arrow">Sidebar Navigation</span>
            <span className="nav-arrow">React Router</span>
            <span className="nav-arrow">SPA Experience</span>
          </div>
          
          {/* Páginas secundarias */}
          <div className="pages-grid">
            <div className="page-node">
              <h4>Bitácora</h4>
              <p>Timeline del proyecto</p>
            </div>
            <div className="page-node">
              <h4>Integrantes</h4>
              <p>Equipo activo</p>
            </div>
            <div className="page-node">
              <h4>Portales</h4>
              <p>Páginas individuales</p>
              <div className="portal-links">
                <span>Micaela</span>
                <span>Paula</span>
                <span>María</span>
              </div>
            </div>
            <div className="page-node">
              <h4>Diagramas</h4>
              <p>Arquitectura técnica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack tecnológico */}
      <section className="tecnologias-section">
        <h2>Stack Tecnológico</h2>
        <div className="tech-stack">
          {/* Frontend */}
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <div>
                  <strong>React 18</strong>
                  <p>Librería para interfaces de usuario</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🚀</span>
                <div>
                  <strong>Vite</strong>
                  <p>Build tool rápido y moderno</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🛣️</span>
                <div>
                  <strong>React Router</strong>
                  <p>Navegación SPA sin recargas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estilos */}
          <div className="tech-category">
            <h3>Estilos</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-icon">🎨</span>
                <div>
                  <strong>CSS3 Puro</strong>
                  <p>Sin frameworks, máximo control</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📱</span>
                <div>
                  <strong>Responsive Design</strong>
                  <p>Mobile-first approach</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">✨</span>
                <div>
                  <strong>CSS Variables</strong>
                  <p>Temas personalizados por página</p>
                </div>
              </div>
            </div>
          </div>

          {/* Datos */}
          <div className="tech-category">
            <h3>Datos</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-icon">📄</span>
                <div>
                  <strong>Datos JSON (22+ items)</strong>
                  <p>Películas y música local</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🌐</span>
                <div>
                  <strong>APIs Simuladas</strong>
                  <p>Fetch asíncrono con delays reales</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">⚡</span>
                <div>
                  <strong>React Hooks</strong>
                  <p>useState, useEffect para manejo de estado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación TP1 vs TP2 */}
      <section className="mejoras-section">
        <h2>Migración TP1 → TP2</h2>
        <div className="mejoras-comparison">
          <div className="before-after">
            {/* Antes (TP1) */}
            <div className="before">
              <h3>TP1 - Sitio Estático</h3>
              <ul>
                <li>HTML puro con múltiples archivos</li>
                <li>CSS separado por página</li>
                <li>JavaScript básico para interacciones</li>
                <li>Navegación con recarga de página</li>
                <li>Datos estáticos hardcodeados</li>
                <li>Sin componentes reutilizables</li>
                <li>Menor escalabilidad</li>
              </ul>
            </div>
            
            {/* Después (TP2) */}
            <div className="after">
              <h3>TP2 - React SPA</h3>
              <ul>
                <li>Componentes React reutilizables</li>
                <li>CSS modular por componente</li>
                <li>Hooks para estado y efectos</li>
                <li>Navegación SPA sin recargas</li>
                <li>APIs simuladas con loading states</li>
                <li>Arquitectura escalable</li>
                <li>Mejor experiencia de usuario</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
