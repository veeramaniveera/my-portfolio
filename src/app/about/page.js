import { MotionItem, MotionSection } from "@/components/animations/MotionSection";
import { GlowCard } from "@/components/cards/GlowCard";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export const metadata = {
	title: "About | Veeramani"
};

export default function AboutPage() {
	const journey = [
		["2023 Jan", "Freelance Developer"],
		["2023 Jun", "PHP Trainee @ Cron24 Technologies"],
		["2024 Feb", "Full Stack Dev @ Pixel Web Solutions (current)"]
	];

	return (
		<div className="page-stack page-stack--about">
			<SectionHeader eyebrow="// about.json" title="About Me" description="Full Stack Developer with experience in web and blockchain applications, specializing in modern frontend development, backend systems, and Web3 platforms including DeFi, NFT, and decentralized exchange solutions."
			/>

			<MotionSection className="about-intro-grid">
				<MotionItem>
					<TerminalWindow title="~/about/about.json">
						<pre className="mono about-json">
							{
								`{
    "name": "${profile.name}",
	"role": "Full Stack Developer",
	"experience": "3+ years",
	"location": "Madurai, Tamil Nadu, India",
	"current_company": "Pixel Web Solutions",
	"languages": ["JavaScript", "PHP"],
	"education": "B.A English Literature"
}`
							}
						</pre>
					</TerminalWindow>
				</MotionItem>
				<MotionItem>
					<GlowCard>
						<p className="mono about-prompt text-success">$ cat professional-story.md</p>
						<p className="about-story">
							Started career as a PHP Developer Trainee at Cron24 Technologies, transitioned through freelance projects, and currently working as a Full Stack Developer at Pixel Web Solutions building blockchain-based platforms including DeFi, NFT, and DEX systems.
						</p>
					</GlowCard>
				</MotionItem>
			</MotionSection>

			<MotionSection>
				<GlowCard>
					<p className="mono about-journey-prompt text-success">$ history --tech-journey</p>
					<div className="about-journey-grid">
						{journey.map(([date, label], index) => (
							<MotionItem key={date}>
								<div className="about-journey-item">
									<p className="mono about-journey-date text-success">{date}</p>
									<p className="about-journey-label">{label}</p>
									<span className="mono about-journey-index text-muted">0{index + 1}</span>
								</div>
							</MotionItem>
						))}
					</div>
				</GlowCard>
			</MotionSection>

			<MotionSection>
				<MotionItem>
					<GlowCard>
						<p className="mono about-interest-prompt text-success">$ interests --list</p>
						<div className="about-interest-list">
							{["Blockchain", "DeFi", "Web3", "Open Source", "System Design", "UI Engineering"].map((interest) => (
								<span key={interest} className="mono skill-badge about-interest">
									{interest}
								</span>
							))}
						</div>
					</GlowCard>
				</MotionItem>
			</MotionSection>
		</div>
	);
}
