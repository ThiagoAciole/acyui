import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type AccordionPlaygroundProps = {
  type: 'single' | 'multiple';
  defaultValue: 'item-1' | 'item-2';
  firstTitle: string;
  secondTitle: string;
};

const accordionDefinition: ComponentDefinition<AccordionPlaygroundProps> = defineComponent<AccordionPlaygroundProps>({
  id: 'accordion',
  name: 'Accordion',
  category: 'data-display',
  icon: 'list-collapse',
  description: 'Secoes expansivas para organizacao progressiva de conteudo.',
  playground: {
    initialProps: {
      type: 'single',
      defaultValue: 'item-1',
      firstTitle: 'Primeiro item',
      secondTitle: 'Segundo item',
    },
    controls: [
      { type: 'select', name: 'type', label: 'Type', options: [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }] },
      { type: 'select', name: 'defaultValue', label: 'Default open', options: [{ label: 'Item 1', value: 'item-1' }, { label: 'Item 2', value: 'item-2' }] },
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Primeiro item' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Segundo item' },
    ],
    render: (props) => (
      <Labs.Accordion type={props.type} defaultValue={props.defaultValue}>
        <Labs.Accordion.Item id="item-1" title={props.firstTitle}>Conteudo do primeiro item.</Labs.Accordion.Item>
        <Labs.Accordion.Item id="item-2" title={props.secondTitle}>Conteudo do segundo item.</Labs.Accordion.Item>
      </Labs.Accordion>
    ),
    code: (props) => wrapSnippet(['Accordion'], [
      'return (',
      `  <Accordion type="${props.type}" defaultValue="${props.defaultValue}">`,
      `    <Accordion.Item id="item-1" title="${props.firstTitle}">Conteudo do primeiro item.</Accordion.Item>`,
      `    <Accordion.Item id="item-2" title="${props.secondTitle}">Conteudo do segundo item.</Accordion.Item>`,
      '  </Accordion>',
      ');',
    ]),
  },
});

export default accordionDefinition;
