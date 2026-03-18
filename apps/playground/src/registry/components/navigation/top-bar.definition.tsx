import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type TopBarPlaygroundProps = {
  navPosition: 'center' | 'right';
  themeToggle: boolean;
  sticky: boolean;
  contentInside: boolean;
};

const topbarDefinition: ComponentDefinition<TopBarPlaygroundProps> = defineComponent<TopBarPlaygroundProps>({
  id: 'top-bar',
  name: 'TopBar',
  category: 'navigation',
  icon: 'layout-template',
  description: 'Cabecalho superior para navegacao e contexto global.',
  playground: {
    initialProps: {
      navPosition: 'center',
      themeToggle: true,
      sticky: false,
      contentInside: false,
    },
    controls: [
      { type: 'select', name: 'navPosition', label: 'Nav position', options: [{ label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'themeToggle', label: 'Theme toggle' },
      { type: 'boolean', name: 'sticky', label: 'Sticky' },
      { type: 'boolean', name: 'contentInside', label: 'Content inside' },
    ],
    render: (props) => <Labs.TopBar logo={<Labs.Heading5>AcioleUI</Labs.Heading5>} navPosition={props.navPosition} themeToggle={props.themeToggle} sticky={props.sticky} contentInside={props.contentInside} navItems={[{ label: 'Playground', href: '/' }, { label: 'Button', href: '/button' }]} />,
    code: (props) => wrapSnippet(['TopBar', 'Heading5'], [
      'return (',
      '  <TopBar',
      '    logo={<Heading5>AcioleUI</Heading5>}',
      '    navItems={[',
      "      { label: 'Playground', href: '/' },",
      "      { label: 'Button', href: '/button' },",
      '    ]}',
      `    navPosition="${props.navPosition}"`,
      `${props.themeToggle ? '    themeToggle' : ''}`,
      `${props.sticky ? '    sticky' : ''}`,
      `${props.contentInside ? '    contentInside' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  },
});

export default topbarDefinition;
