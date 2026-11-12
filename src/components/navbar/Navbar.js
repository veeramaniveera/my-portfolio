"use client";

import { navLinks, profile } from "@/data/profile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ResumeButton } from "./ResumeButton";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const nav = (
		<>
			{navLinks.map((link) => {
				const active = pathname === link.href;
				return (
					<Link
						key={link.href}
						href={link.href}
						onClick={() => setOpen(false)}
						className={`mono site-nav-link${active ? " is-active" : ""}`}
					>
						{link.label}
					</Link>
				);
			})}
			<ResumeButton />
			<ThemeToggle />
		</>
	);

	return (
		<header className="navbar-shell">
			<nav className="site-nav">
				<Link href="/" className="mono site-brand">
					<span className="text-success">~/</span>
					{profile.name.toLowerCase().replaceAll(" ", "-")}
				</Link>
				<div className="site-nav-links">{nav}</div>
				<div className="site-mobile-controls">
					<ThemeToggle />
					<button
						aria-label="Toggle navigation"
						onClick={() => setOpen((value) => !value)}
						className="site-menu-button"
					>
						{open ? <FiX size={18} /> : <FiMenu size={18} />}
					</button>
				</div>
			</nav>
			{open && (
				<div className="site-mobile-menu">
					<div className="site-mobile-links">{nav}</div>
				</div>
			)}
		</header>
	);
}
