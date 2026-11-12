import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mono site-footer-content">
        <p>built with next.js / deployed on vercel</p>
        <p>copyright {new Date().getFullYear()} / {profile.name}</p>
      </div>
    </footer>
  );
}
