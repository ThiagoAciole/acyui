import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.resolve(__dirname, '../src/icons');
const outputFile = path.resolve(iconsDir, 'generated.tsx');

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const svgFiles = (await fs.readdir(iconsDir))
  .filter((file) => file.endsWith('.svg'))
  .sort((a, b) => a.localeCompare(b));

const iconNameType = svgFiles.map((file) => `  | '${file.replace(/\.svg$/, '')}'`).join('\n');

function getAttr(source, name) {
  const match = source.match(new RegExp(`${name}="([^"]*)"`, 'i'));
  return match ? match[1] : undefined;
}

const registryEntries = await Promise.all(svgFiles.map(async (file) => {
  const baseName = file.replace(/\.svg$/, '');
  const source = await fs.readFile(path.resolve(iconsDir, file), 'utf8');
  const body = source
    .replace(/^[\s\S]*?<svg[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')
    .trim();

  return `  '${baseName}': {
    viewBox: ${JSON.stringify(getAttr(source, 'viewBox') ?? '0 0 24 24')},
    fill: ${JSON.stringify(getAttr(source, 'fill') ?? 'none')},
    stroke: ${JSON.stringify(getAttr(source, 'stroke') ?? 'currentColor')},
    strokeWidth: ${JSON.stringify(getAttr(source, 'stroke-width') ?? '2')},
    strokeLinecap: ${JSON.stringify(getAttr(source, 'stroke-linecap') ?? 'round')},
    strokeLinejoin: ${JSON.stringify(getAttr(source, 'stroke-linejoin') ?? 'round')},
    body: ${JSON.stringify(body)},
  },`;
})).then((entries) => entries.join('\n'));

const namedExports = svgFiles
  .map((file) => {
    const baseName = file.replace(/\.svg$/, '');
    const exportName = `${toPascalCase(baseName)}Icon`;
    return `export const ${exportName} = createNamedIcon('${baseName}' as IconName);`;
  })
  .join('\n');

const source = `import React from 'react';
import { IconBase } from './IconBase';
import type { IconProps } from './IconBase';

export type IconName =
${iconNameType};

const icons = {
${registryEntries}
} satisfies Record<IconName, {
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  body: string;
}>;

export interface NamedIconProps extends IconProps {
  name: IconName;
}

export function Icon({ name, ...props }: NamedIconProps) {
  const icon = icons[name];
  return (
    <IconBase
      viewBox={icon.viewBox}
      fill={icon.fill}
      stroke={icon.stroke}
      strokeWidth={Number(icon.strokeWidth)}
      strokeLinecap={icon.strokeLinecap as React.SVGProps<SVGSVGElement>['strokeLinecap']}
      strokeLinejoin={icon.strokeLinejoin as React.SVGProps<SVGSVGElement>['strokeLinejoin']}
      dangerouslySetInnerHTML={{ __html: icon.body }}
      {...props}
    />
  );
}

function createNamedIcon(name: IconName) {
  return function NamedIcon(props: IconProps) {
    return <Icon name={name} {...props} />;
  };
}

${namedExports}

export { icons as iconRegistry };
`;

await fs.writeFile(outputFile, source, 'utf8');
