export function TerminalPrompt({ command, output, success = false }) {
  return (
    <div className="mono terminal-prompt">
      <p>
        <span className="text-success">$</span>{" "}
        <span className="text-accent">{command}</span>
      </p>
      {output && (
        <p className={success ? "text-success" : "text-primary"}>
          {output}
          <span className="terminal-cursor" />
        </p>
      )}
    </div>
  );
}
