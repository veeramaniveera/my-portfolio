export function SkillBadge({ skill }) {
  const label = typeof skill === "string" ? skill : skill.name;
  const Icon = typeof skill === "string" ? null : skill.Icon;

  return (
    <span className="mono skill-badge skill-badge-item">
      [
      {Icon && <Icon size={15} />}
      {label} ]
    </span>
  );
}
