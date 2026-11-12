"use client";

import { useEffect, useState } from "react";

export function TypewriterPrompt({ command, output, delay = 0, success = false }) {
  const [visible, setVisible] = useState("");
  const [started, setStarted] = useState(false);
  const full = `${command}\n${output}`;

  useEffect(() => {
    const start = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(start);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setVisible(full.slice(0, index));
      if (index >= full.length) clearInterval(timer);
    }, 18);

    return () => clearInterval(timer);
  }, [full, started]);

  const [visibleCommand = "", visibleOutput = ""] = visible.split("\n");

  return (
    <div className="mono typewriter-prompt">
      <p>
        <span className="text-success">$</span>{" "}
        <span className="text-accent">{visibleCommand}</span>
      </p>
      <p className={success ? "text-success" : "text-primary"}>
        {visibleOutput}
        {started && <span className="terminal-cursor" />}
      </p>
    </div>
  );
}
