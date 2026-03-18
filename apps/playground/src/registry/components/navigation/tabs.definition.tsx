import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type TabsPlaygroundProps = Pick<Labs.TabsProps, 'variant' | 'size'> & {
  defaultValue: 'overview' | 'specs' | 'usage';
};

const tabsDefinition: ComponentDefinition<TabsPlaygroundProps> = defineComponent<TabsPlaygroundProps>({
  id: 'tabs',
  name: 'Tabs',
  category: 'navigation',
  icon: 'folder',
  description: 'Alternancia entre paines relacionados.',
  playground: {
    initialProps: {
      variant: 'default',
      size: 'medium',
      defaultValue: 'overview',
    },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Pills', value: 'pills' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'defaultValue', label: 'Default tab', options: [{ label: 'Overview', value: 'overview' }, { label: 'Specs', value: 'specs' }, { label: 'Usage', value: 'usage' }] },
    ],
    render: (props) => <Labs.Tabs variant={props.variant} size={props.size} defaultValue={props.defaultValue} tabs={[{ value: 'overview', label: 'Overview', content: 'Visao geral' }, { value: 'specs', label: 'Specs', content: 'Especificacoes' }, { value: 'usage', label: 'Usage', content: 'Guia rapido' }]} />,
    code: (props) => wrapSnippet(['Tabs'], [
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
  },
});

export default tabsDefinition;
