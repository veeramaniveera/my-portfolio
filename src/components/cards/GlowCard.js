import { cn } from "@/lib/utils";

export function GlowCard({ children, className = "" }) {
  return (
    <div className={cn("terminal-surface glow-card", className)}>
      {children}
    </div>
  );
}
