export function TerminalWindow({ title = "terminal", children, className = "" }) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-window-bar">
        <div className="terminal-window-dots">
          <span className="terminal-window-dot terminal-dot-red" />
          <span className="terminal-window-dot terminal-dot-yellow" />
          <span className="terminal-window-dot terminal-dot-green" />
        </div>
        <p className="mono terminal-window-title">{title}</p>
        <span className="terminal-window-spacer" />
      </div>
      <div className="terminal-window-content">
        <div className="terminal-window-glow" />
        {children}
      </div>
    </div>
  );
}
