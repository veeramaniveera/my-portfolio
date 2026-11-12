import { MotionLeftItem, MotionSection } from "@/components/animations/MotionSection";
import { TimelineItem } from "@/components/cards/TimelineItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { timeline } from "@/data/profile";

export const metadata = {
	title: "Experience | Veeramani"
};

export default function ExperiencePage() {
	return (
		<div className="page-stack page-stack--experience">
			<SectionHeader
				eyebrow="// experience"
				title="Professional Experience"
				description="A timeline of my professional journey, including roles, responsibilities, and hands-on development experience across different projects and technologies."
			/>
			<MotionSection className="experience-list">
				{timeline.map((item) => (
					<MotionLeftItem key={`${item.period}-${item.role}`}>
						<TimelineItem item={item} />
					</MotionLeftItem>
				))}
			</MotionSection>
		</div>
	);
}
