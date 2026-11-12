import { Footer } from "@/components/footer/Footer";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata = {
	title: "Veeramani | Full Stack Developer",
	description: "Premium terminal-inspired developer portfolio built with Next.js.",
	keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio", "Software Engineer"],
	metadataBase: new URL("https://yourname.dev"),
	openGraph: {
		title: "Veeramani | Full Stack Developer",
		description: "Modern terminal-inspired developer portfolio.",
		type: "website"
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="stylesheet" href="/assets/css/global.css" />
				<link rel="stylesheet" href="/assets/css/header.css" />
				<link rel="stylesheet" href="/assets/css/footer.css" />
				<link rel="stylesheet" href="/assets/css/home.css" />
				<link rel="stylesheet" href="/assets/css/about.css" />
				<link rel="stylesheet" href="/assets/css/skills.css" />
				<link rel="stylesheet" href="/assets/css/projects.css" />
				<link rel="stylesheet" href="/assets/css/experience.css" />
				<link rel="stylesheet" href="/assets/css/contact.css" />
			</head>
			<body>
				<Providers>
					<div className="site-shell terminal-grid">
						<Navbar />
						<main className="site-main">
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
