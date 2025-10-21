// TimelineItem.jsx
// Elemento individual de la bitácora (con fecha, título y descripción)

export default function TimelineItem({ fecha, titulo, descripcion }) {
  return (
    <div className="timeline-item fade-in">
      <div className="timeline-dot"></div>
      <div className="timeline-content card">
        <h3>{titulo}</h3>
        <span className="timeline-date">{fecha}</span>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

