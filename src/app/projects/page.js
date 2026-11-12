import { ProjectsDashboard } from "@/components/projects/ProjectsDashboard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export const metadata = {
	title: "Projects | Veeramani"
};

export default function ProjectsPage() {
	return (
		<div className="page-stack page-stack--projects">
			<SectionHeader
				eyebrow="// selected work"
				title="Projects"
				description="A collection of blockchain platforms, full-stack applications, internship systems, and freelance projects built with modern web technologies and scalable architectures."
			/>
			<ProjectsDashboard projects={projects} />
		</div>
	);
}
