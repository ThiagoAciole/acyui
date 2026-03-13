import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type ProgressPlaygroundProps = Pick<Labs.ProgressProps, 'value' | 'size' | 'animated' | 'showValue' | 'label'> & {
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
};

const progressDefinition: ComponentDefinition<ProgressPlaygroundProps> = defineComponent<ProgressPlaygroundProps>({
  id: 'progress',
  name: 'Progress',
  category: 'feedback',
  icon: 'activity',
  description: 'Indicador de progresso linear.',
  playground: {
    initialProps: {
      value: 64,
      size: 'medium',
      animated: false,
      showValue: true,
      label: 'Progresso',
      color: 'primary',
    },
    controls: [
      { type: 'text', name: 'value', label: 'Value', placeholder: '64' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Progresso' },
      { type: 'boolean', name: 'animated', label: 'Animated' },
      { type: 'boolean', name: 'showValue', label: 'Show value' },
    ],
    render: (props) => <Labs.Progress value={Number(props.value)} size={props.size} animated={Boolean(props.animated)} showValue={Boolean(props.showValue)} label={props.label} color={props.color} />,
    code: (props) => wrapSnippet(['Progress'], [
      'return (',
      `  ${buildOpeningTag('Progress', { value: Number(props.value), size: props.size, animated: props.animated, showValue: props.showValue, label: props.label, color: props.color })} />`,
      ');',
    ]),
  },
});

export default progressDefinition;
