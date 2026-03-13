import * as Labs from '@aciole/acyon';
import * as React from 'react';
import { buildOpeningTag, resolveImports, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type TextPlaygroundProps = Pick<Labs.TextOwnProps, 'size' | 'color' | 'weight'> & { children: string };
type HeadingPlaygroundProps = { level: 'Heading' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6'; weight?: Labs.HeadingWeight; children: string };
type LinkPlaygroundProps = Pick<Labs.LinkOwnProps, 'color' | 'underline'> & { href: string; children: string };
type CodePlaygroundProps = { children: string; size: 'small' | 'medium' | 'large'; weight: 'normal' | 'medium' | 'semibold' | 'bold'; block: boolean };

export const typographyPlaygrounds: PlaygroundConfigMap = {

  code: {
    imports: ['Code'],
    initialProps: { children: 'npm install acyon', size: 'small', weight: 'medium', block: false },
    controls: [
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'npm install acyon' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'boolean', name: 'block', label: 'Block' },
    ],
    render: (props: CodePlaygroundProps) => <Labs.Code size={props.size} weight={props.weight} block={Boolean(props.block)}>{props.children}</Labs.Code>,
    generateCode: (props) => wrapSnippet(['Code'], [
      'return (',
      `  ${buildOpeningTag('Code', { size: props.size, weight: props.weight, block: props.block })}>${props.children}</Code>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<CodePlaygroundProps>,

  heading: {
    imports: (props) => [String(props.level ?? 'Heading')],
    initialProps: { level: 'Heading', weight: 'bold', children: 'Titulo de exemplo' },
    controls: [
      { type: 'select', name: 'level', label: 'Component', options: [{ label: 'Heading', value: 'Heading' }, { label: 'Heading2', value: 'Heading2' }, { label: 'Heading3', value: 'Heading3' }, { label: 'Heading4', value: 'Heading4' }, { label: 'Heading5', value: 'Heading5' }, { label: 'Heading6', value: 'Heading6' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Titulo de exemplo' },
    ],
    render: (props: HeadingPlaygroundProps) => {
      const Component = ((Labs as unknown) as Record<string, React.ElementType>)[String(props.level)] ?? Labs.Heading;
      return <Component weight={props.weight}>{String(props.children ?? '')}</Component>;
    },
    generateCode: (props) => wrapSnippet(resolveImports((currentProps) => [String(currentProps.level ?? 'Heading')], props), [
      'return (',
      `  <${props.level} weight="${props.weight}">${props.children}</${props.level}>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<HeadingPlaygroundProps>,

  link: {
    imports: ['Link'],
    initialProps: { href: '#/button', color: 'primary', underline: false, children: 'Abrir Button' },
    controls: [
      { type: 'text', name: 'href', label: 'Href', placeholder: '#/button' },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'boolean', name: 'underline', label: 'Underline' },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Abrir Button' },
    ],
    render: (props: LinkPlaygroundProps) => <Labs.Link href={String(props.href ?? '#')} color={props.color} underline={Boolean(props.underline)}>{String(props.children ?? '')}</Labs.Link>,
    generateCode: (props) => wrapSnippet(['Link'], [
      'return (',
      `  ${buildOpeningTag('Link', { href: props.href, color: props.color, underline: props.underline })}>${props.children}</Link>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<LinkPlaygroundProps>,

  text: {
    imports: ['Text'],
    initialProps: { size: 'medium', color: 'default', weight: 'normal', children: 'Texto de exemplo para o playground.' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Default', value: 'default' }, { label: 'Neutral', value: 'neutral' }, { label: 'Inverse', value: 'inverse' }, { label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Texto de exemplo' },
    ],
    render: (props: TextPlaygroundProps) => <Labs.Text size={props.size} color={props.color} weight={props.weight}>{String(props.children ?? '')}</Labs.Text>,
    generateCode: (props) => wrapSnippet(['Text'], [
      'return (',
      `  ${buildOpeningTag('Text', { size: props.size, color: props.color, weight: props.weight })}>`,
      `    ${props.children}`,
      '  </Text>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TextPlaygroundProps>,
};
