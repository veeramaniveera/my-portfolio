export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="mono section-eyebrow text-success">{eyebrow}</p>
      <h1 className="text-balance section-heading text-primary">
        {title}
      </h1>
      {description && <p className="section-description text-muted">{description}</p>}
    </div>
  );
}
