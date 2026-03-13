export function PlaygroundCode({ code, compact = false }: { code: string; compact?: boolean }) {
  return (
    <div className={`live-code-panel ${compact ? 'live-code-panel--compact' : ''}`}>
      <pre className="live-code-panel__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
