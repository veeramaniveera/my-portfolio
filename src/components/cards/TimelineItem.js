const badgeStyles = {
  "Full-time": "experience-type--full-time",
  Internship: "experience-type--internship",
  Freelance: "experience-type--freelance"
};

export function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <span className="timeline-marker" />
      <div className="terminal-surface timeline-card">
        <div className="timeline-heading">
          <span className="mono timeline-year">[{item.year}]</span>
          <h2 className="timeline-title">{item.role} · {item.company} · {item.duration}</h2>
          <span className={`mono timeline-type ${badgeStyles[item.type]}`}>{item.type}</span>
        </div>
        <p className="mono timeline-period">{item.period}</p>
        <p className="timeline-description">{item.description}</p>
        <div className="timeline-stack">
          {item.stack.map((tech) => (
            <span key={tech} className="mono skill-badge skill-badge--compact project-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
