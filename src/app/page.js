import { MotionItem, MotionSection } from "@/components/animations/MotionSection";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { TypewriterPrompt } from "@/components/terminal/TypewriterPrompt";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { featuredSkills, profile } from "@/data/profile";
import Link from "next/link";
import { FiArrowRight, FiCode, FiDatabase, FiLayers } from "react-icons/fi";

export default function HomePage() {
	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

	return (
		<div className="page-stack page-stack--home">
			{/* Hero Section */}
			<MotionSection className="home-hero">
				<MotionItem>
					<SectionHeader eyebrow="$ whoami" title="Full Stack Developer" description="" />
					<TerminalWindow title="~/portfolio/whoami">
						<div className="home-intro-stack">
							<TypewriterPrompt command="whoami" output={profile.name} delay={100} />
							<TypewriterPrompt command="cat role.txt" output={profile.role} delay={520} />
							<TypewriterPrompt command="echo $LOCATION" output={profile.location} delay={1020} />
							<TypewriterPrompt command="currently_building" output="Modern Web Applications" delay={1460} success />
							<div className="home-hero-actions">
								<Link href="/projects" className="terminal-button soft-action">
									view projects
									<FiArrowRight size={16} />
								</Link>
							</div>
						</div>
					</TerminalWindow>
				</MotionItem>
				<MotionItem>
					<div className="terminal-surface home-terminal-visual">
						<div className="terminal-grid home-terminal-visual-grid" />
						<div className="home-terminal-visual-content">
							{[
								{ icon: FiCode, label: "frontend.runtime", value: "react + next.js" },
								{ icon: FiDatabase, label: "api.engine", value: "node + mysql" },
								{ icon: FiLayers, label: "ui.system", value: "terminal dashboard" }
							].map(({ icon: Icon, label, value }) => (
								<div key={label} className="terminal-visual-panel home-visual-card">
									<div className="home-visual-card-heading">
										<Icon size={18} />
										<span className="mono home-visual-card-label">{label}</span>
									</div>
									<p className="mono home-visual-card-value">{value}</p>
								</div>
							))}
						</div>
					</div>
				</MotionItem>
			</MotionSection>

			{/* Core stack preview */}
			<MotionSection>
				<SectionHeader eyebrow="// skills.config" title="Core stack preview" description="A focused snapshot of the tools I use to ship modern, scalable web applications." />
				<MotionItem className="home-skill-list">
					{featuredSkills.map((skill) => <SkillBadge key={skill} skill={skill} />)}
				</MotionItem>
			</MotionSection>

			{/* Projects */}
			<MotionSection>
				<SectionHeader eyebrow="// projects --all" title="Selected builds" description="Production-minded blockchain and web projects with concise product context." />
				<div className="project-grid">
					{featuredProjects.map((project) => (
						<MotionItem key={project.title}>
							<ProjectCard project={project} />
						</MotionItem>
					))}
				</div>
			</MotionSection>

			{/* Contact */}
			<MotionSection>
				<MotionItem>
					<TerminalWindow title="~/next-step/cta">
						<div className="home-contact-layout">
							<div>
								<p className="mono small-copy text-success">$ contact --social</p>
								<h2 className="home-contact-prompt text-primary">Let's build a clean, fast web experience.</h2>
							</div>
							<Link href="/contact" className="terminal-button outlined-action">
								contact now
								<FiArrowRight size={16} />
							</Link>
						</div>
					</TerminalWindow>
				</MotionItem>
			</MotionSection>
		</div>
	);
}
