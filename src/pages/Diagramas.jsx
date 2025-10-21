// ===== DIAGRAMAS =====
// Diagramas.jsx - Con HeroSection
import HeroSection from "../components/ui/HeroSection";
import './Diagramas.css';

export default function Diagramas() {
  return (
    <div className="diagramas">
      <HeroSection
  title="📊 Diagramas del Proyecto"
  subtitle="Visualización de la arquitectura y organización del TP2 React SPA"
  accentColor="#4ade80"
/>

      <section className="diagramas-visuales">
        <h2>📊 Diagramas Visuales</h2>

        <div className="diagrama-card">
          <h3>🌳 Árbol de Renderizado (Jerarquía de Componentes)</h3>
          <img 
            src="/img/arbol-componentes.png" 
            alt="Árbol de componentes React" 
            className="diagrama-img"
          />
          <p>
            Representa la jerarquía de componentes desde <code>App.jsx</code> 
            hacia los subcomponentes, incluyendo <code>Sidebar</code>, 
            <code>Pages</code> y <code>Cards</code>. Refleja el flujo de renderizado
            dentro de la SPA.
          </p>
        </div>

        <div className="diagrama-card">
          <h3>📁 Estructura de Carpetas</h3>
          <img 
            src="/img/estructura-carpetas.png" 
            alt="Estructura de carpetas del proyecto" 
            className="diagrama-img"
          />
          <p>
            Muestra la organización modular del proyecto dentro de <code>/src</code>, 
            separando <code>components</code>, <code>pages</code>, <code>data</code>, 
            <code>styles</code> y <code>utils</code> según las buenas prácticas de React.
          </p>
        </div>
      </section>
    </div>
  );
}
