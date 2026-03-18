function renderPrimitive(value: unknown) {
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}

export function buildOpeningTag(name: string, props: Record<string, unknown>) {
  const entries = Object.entries(props).filter(([, value]) => (
    value !== ''
    && value !== false
    && value !== undefined
    && value !== null
  ));

  if (entries.length === 0) {
    return `<${name}`;
  }

  return [
    `<${name}`,
    ...entries.map(([key, value]) => (
      typeof value === 'boolean'
        ? `  ${key}`
        : `  ${key}={${renderPrimitive(value)}}`.replace('={"', '="').replace('"}', '"')
    )),
  ].join('\n');
}

export function createSnippet(imports: string[], body: string[]) {
  return [`import { ${imports.join(', ')} } from 'acioleui';`, '', ...body].join('\n');
}
