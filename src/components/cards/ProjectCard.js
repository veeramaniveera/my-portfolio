import { FiExternalLink, FiGithub } from "react-icons/fi";
import { GlowCard } from "./GlowCard";

const typeStyles = {
	Blockchain: "project-type--blockchain",
	Internship: "project-type--internship",
	Freelance: "project-type--freelance"
};

export function ProjectCard({ project }) {
	return (
		<GlowCard className="project-card">
			<div className="project-card-heading">
				<div>
					<h2 className="mono project-title">► {project.title}</h2>
					<p className="project-company">{project.company}</p>
				</div>
				<span className={`mono project-type ${typeStyles[project.type]}`}>
					{project.type}
				</span>
			</div>
			<p className="project-description">{project.description}</p>
			<div className="project-stack">
				{project.stack.map((tech) => (
					<span key={tech} className="mono skill-badge skill-badge--compact project-tech">
						{tech}
					</span>
				))}
			</div>
			<div className="project-actions">
				{project.demo && (
					<a href={project.demo} target="_blank" rel="noopener noreferrer" className="mono project-action">
						<FiExternalLink size={15} />
						demo
					</a>
				)}
				{project.github && (
					<a href={project.github} target="_blank" rel="noopener noreferrer" className="mono project-action project-action--github">
						<FiGithub size={15} />
						github
					</a>
				)}
				{!project.demo && !project.github && (
					<></>
				)}
			</div>
		</GlowCard>
	);
}
