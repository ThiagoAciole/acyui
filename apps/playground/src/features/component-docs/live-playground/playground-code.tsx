export function PlaygroundCode({ code }: { code: string }) {
  return (
    <div className="live-code-panel">
      <pre className="live-code-panel__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
