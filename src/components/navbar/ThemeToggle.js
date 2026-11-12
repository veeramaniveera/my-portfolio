"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="theme-toggle-placeholder" />;
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="theme-toggle"
    >
      {dark ? <FiMoon size={17} /> : <FiSun size={17} />}
    </button>
  );
}
