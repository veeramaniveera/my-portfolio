"use client";

import { useState } from "react";
import {
	MotionItem,
	MotionSection
} from "@/components/animations/MotionSection";

import { ProjectCard } from "@/components/cards/ProjectCard";

const filters = ["All", "Blockchain", "Internship", "Freelance"];

export function ProjectsDashboard({ projects }) {
	const [active, setActive] = useState("All");

	const filteredProjects =
		active === "All"
			? projects
			: projects.filter(
				(project) =>
					project.type.trim().toLowerCase() ===
					active.trim().toLowerCase()
			);

	return (
		<div className="projects-dashboard">
			{/* Filter Buttons */}
			<div className="project-filter-list">
				{filters.map((filter) => {
					const selected = active === filter;

					return (
						<button
							key={filter}
							type="button"
							onClick={() => setActive(filter)}
							className={`mono project-filter${selected ? " is-selected" : ""}`}
						>
							{filter}
						</button>
					);
				})}
			</div>

			{/* Projects Grid */}
			<MotionSection key={active}>
				<div className="project-grid">
					{filteredProjects.map((project) => (
						<MotionItem
							key={`${active}-${project.id}`}
						>
							<ProjectCard project={project} />
						</MotionItem>
					))}
				</div>
			</MotionSection>
		</div>
	);
}