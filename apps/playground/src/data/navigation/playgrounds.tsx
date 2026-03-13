import * as Labs from '@aciole/acyon';
import { PaginationPreview, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type PaginationPlaygroundProps = { currentPage: string; totalPages: string; showControls: boolean };
type TabsPlaygroundProps = Pick<Labs.TabsProps, 'variant' | 'size'> & { defaultValue: 'overview' | 'specs' | 'usage' };
type BreadcrumbPlaygroundProps = { separator: '/' | '>' | '-'; currentLabel: string };
type TopBarPlaygroundProps = { navPosition: 'center' | 'right'; themeToggle: boolean; sticky: boolean; contentInside: boolean };

export const navigationPlaygrounds: PlaygroundConfigMap = {

  breadcrumb: {
    imports: ['Breadcrumb'],
    initialProps: { separator: '/', currentLabel: 'Breadcrumb' },
    controls: [
      { type: 'select', name: 'separator', label: 'Separator', options: [{ label: '/', value: '/' }, { label: '>', value: '>' }, { label: '-', value: '-' }] },
      { type: 'text', name: 'currentLabel', label: 'Current label', placeholder: 'Breadcrumb' },
    ],
    render: (props: BreadcrumbPlaygroundProps) => <Labs.Breadcrumb separator={props.separator} items={[{ label: 'Inicio', href: '#/' }, { label: 'Componentes' }, { label: props.currentLabel }]} />,
    generateCode: (props) => wrapSnippet(['Breadcrumb'], [
      'return (',
      '  <Breadcrumb',
      '    items={[',
      "      { label: 'Inicio', href: '#/' },",
      "      { label: 'Componentes' },",
      `      { label: '${props.currentLabel}' },`,
      '    ]}',
      `    separator="${props.separator}"`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<BreadcrumbPlaygroundProps>,

  pagination: {
    imports: ['Pagination'],
    initialProps: { currentPage: '2', totalPages: '8', showControls: true },
    controls: [
      { type: 'text', name: 'currentPage', label: 'Current page', placeholder: '2' },
      { type: 'text', name: 'totalPages', label: 'Total pages', placeholder: '8' },
      { type: 'boolean', name: 'showControls', label: 'Show controls' },
    ],
    render: (props: PaginationPlaygroundProps) => <PaginationPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Pagination } from '@aciole/acyon';\n\nexport function Example() {\n  const [page, setPage] = useState(${Number(props.currentPage)});\n\n  return (\n    <Pagination\n      currentPage={page}\n      totalPages={${Number(props.totalPages)}}\n      showControls={${Boolean(props.showControls)}}\n      onPageChange={setPage}\n    />\n  );\n}`,
  } satisfies PlaygroundConfig<PaginationPlaygroundProps>,

  tabs: {
    imports: ['Tabs'],
    initialProps: { variant: 'default', size: 'medium', defaultValue: 'overview' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Pills', value: 'pills' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'defaultValue', label: 'Default tab', options: [{ label: 'Overview', value: 'overview' }, { label: 'Specs', value: 'specs' }, { label: 'Usage', value: 'usage' }] },
    ],
    render: (props: TabsPlaygroundProps) => <Labs.Tabs variant={props.variant} size={props.size} defaultValue={props.defaultValue} tabs={[{ value: 'overview', label: 'Overview', content: 'Visao geral' }, { value: 'specs', label: 'Specs', content: 'Especificacoes' }, { value: 'usage', label: 'Usage', content: 'Guia rapido' }]} />,
    generateCode: (props) => wrapSnippet(['Tabs'], [
      'return (',
      '  <Tabs',
      '    tabs={[',
      "      { value: 'overview', label: 'Overview', content: 'Visao geral' },",
      "      { value: 'specs', label: 'Specs', content: 'Especificacoes' },",
      "      { value: 'usage', label: 'Usage', content: 'Guia rapido' },",
      '    ]}',
      `    defaultValue="${props.defaultValue}"`,
      `    variant="${props.variant}"`,
      `    size="${props.size}"`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<TabsPlaygroundProps>,

  'top-bar': {
    imports: ['TopBar', 'Heading5'],
    initialProps: { navPosition: 'center', themeToggle: true, sticky: false, contentInside: false },
    controls: [
      { type: 'select', name: 'navPosition', label: 'Nav position', options: [{ label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'themeToggle', label: 'Theme toggle' },
      { type: 'boolean', name: 'sticky', label: 'Sticky' },
      { type: 'boolean', name: 'contentInside', label: 'Content inside' },
    ],
    render: (props: TopBarPlaygroundProps) => <Labs.TopBar logo={<Labs.Heading5>Labs</Labs.Heading5>} navPosition={props.navPosition} themeToggle={props.themeToggle} sticky={props.sticky} contentInside={props.contentInside} navItems={[{ label: 'Playground', href: '#/' }, { label: 'Button', href: '#/button' }]} />,
    generateCode: (props) => wrapSnippet(['TopBar', 'Heading5'], [
      'return (',
      '  <TopBar',
      '    logo={<Heading5>Labs</Heading5>}',
      '    navItems={[',
      "      { label: 'Playground', href: '#/' },",
      "      { label: 'Button', href: '#/button' },",
      '    ]}',
      `    navPosition="${props.navPosition}"`,
      `${props.themeToggle ? '    themeToggle' : ''}`,
      `${props.sticky ? '    sticky' : ''}`,
      `${props.contentInside ? '    contentInside' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<TopBarPlaygroundProps>,
};
