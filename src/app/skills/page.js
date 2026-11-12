import { MotionItem, MotionSection } from "@/components/animations/MotionSection";
import { GlowCard } from "@/components/cards/GlowCard";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";
import { FiBox, FiCode, FiGlobe, FiTerminal } from "react-icons/fi";
import {
	SiCss3,
	SiEthereum,
	SiExpress,
	SiGit,
	SiHardhat,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiLaravel,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPostman,
	SiReact,
	SiSolidity,
	SiWeb3Dotjs
} from "react-icons/si";

export const metadata = {
	title: "Skills | Veeramani"
};

const iconMap = {
	FiBox,
	FiCode,
	FiGlobe,
	FiTerminal,
	SiCss3,
	SiEthereum,
	SiExpress,
	SiGit,
	SiHardhat,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiLaravel,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPostman,
	SiReact,
	SiSolidity,
	SiWeb3Dotjs
};

export default function SkillsPage() {
	return (
		<div className="page-stack page-stack--skills">
			<SectionHeader eyebrow="// skills.config" title="Technical Skills" description="Technologies, frameworks, and tools I use to build modern web, backend, and blockchain applications."
			/>
			<MotionSection className="skills-grid">
				{Object.entries(skills).map(([category, items], index) => (
					<MotionItem key={category}>
						<GlowCard className="skill-category-card">
							<div className="skill-category-heading">
								<h2 className="mono skill-category-title">[{category}]</h2>
								<span className="mono skill-category-index">0{index + 1}</span>
							</div>
							<div className="skill-category-list">
								{items.map((skill) => (
									<SkillBadge key={skill.name} skill={{ ...skill, Icon: iconMap[skill.icon] }} />
								))}
							</div>
						</GlowCard>
					</MotionItem>
				))}
			</MotionSection>
		</div>
	);
}
