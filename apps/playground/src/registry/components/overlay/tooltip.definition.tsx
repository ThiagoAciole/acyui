import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type TooltipPlaygroundProps = {
  content: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
  buttonLabel: string;
};

const tooltipDefinition: ComponentDefinition<TooltipPlaygroundProps> = defineComponent<TooltipPlaygroundProps>({
  id: 'tooltip',
  name: 'Tooltip',
  category: 'overlay',
  icon: 'message-circle',
  description: 'Ajuda contextual em hover ou foco.',
  playground: {
    initialProps: {
      content: 'Detalhe adicional',
      placement: 'top',
      buttonLabel: 'Passe o mouse',
    },
    controls: [
      { type: 'text', name: 'content', label: 'Content', placeholder: 'Detalhe adicional' },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'text', name: 'buttonLabel', label: 'Button label', placeholder: 'Passe o mouse' },
    ],
    render: (props) => (
      <Labs.Tooltip content={props.content} placement={props.placement}>
        <Labs.Button variant="outline">{props.buttonLabel}</Labs.Button>
      </Labs.Tooltip>
    ),
    code: (props) => wrapSnippet(['Tooltip', 'Button'], [
      'return (',
      `  <Tooltip content="${props.content}" placement="${props.placement}">`,
      `    <Button variant="outline">${props.buttonLabel}</Button>`,
      '  </Tooltip>',
      ');',
    ]),
  },
});

export default tooltipDefinition;
