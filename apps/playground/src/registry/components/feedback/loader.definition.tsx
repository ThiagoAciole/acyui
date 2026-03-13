import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type LoaderPlaygroundProps = Pick<Labs.LoaderProps, 'size' | 'label'> & {
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
};

const loaderDefinition: ComponentDefinition<LoaderPlaygroundProps> = defineComponent<LoaderPlaygroundProps>({
  id: 'loader',
  name: 'Loader',
  category: 'feedback',
  icon: 'loader2',
  description: 'Indicador visual de carregamento.',
  playground: {
    initialProps: {
      size: 'medium',
      color: 'primary',
      label: 'Carregando dados',
    },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Carregando dados' },
    ],
    render: (props) => <Labs.Loader size={props.size} color={props.color} label={props.label} />,
    code: (props) => wrapSnippet(['Loader'], [
      'return (',
      `  ${buildOpeningTag('Loader', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default loaderDefinition;
