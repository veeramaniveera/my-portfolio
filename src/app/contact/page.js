import { MotionItem, MotionSection } from "@/components/animations/MotionSection";
import { GlowCard } from "@/components/cards/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { FiGithub, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";

export const metadata = {
	title: "Contact | Veeramani"
};

export default function ContactPage() {
	const links = [
		{ label: "email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
		{ label: "github", value: "github.com/yourname", href: profile.github, icon: FiGithub },
		{ label: "linkedin", value: "linkedin.com/in/yourname", href: profile.linkedin, icon: FiLinkedin },
		{ label: "twitter / x", value: profile.twitterHandle, href: profile.twitter, icon: FiGlobe }
	];

	return (
		<div className="page-stack page-stack--contact">
			<SectionHeader
				eyebrow="// contact"
				title="Connect With Me"
				description="Feel free to reach out or connect through my social media platforms."
			/>

			<MotionSection>
				<p className="mono contact-prompt text-success">$ connect --social</p>
				<div className="contact-grid">
					{links.map(({ label, value, href, icon: Icon }) => (
						<MotionItem key={label}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-link"
							>
								<GlowCard className="contact-card">
									<span className="contact-icon">
										<Icon size={22} />
									</span>
									<span>
										<span className="mono contact-label">{label}</span>
										<span className="contact-value">{value}</span>
									</span>
								</GlowCard>
							</a>
						</MotionItem>
					))}
				</div>
			</MotionSection>
		</div>
	);
}
