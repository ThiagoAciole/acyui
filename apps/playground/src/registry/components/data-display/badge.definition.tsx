import * as Labs from 'acioleui';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type BadgePlaygroundProps = Pick<Labs.BadgeProps, 'variant' | 'color' | 'size'> & {
  children: string;
};

const badgeDefinition: ComponentDefinition<BadgePlaygroundProps> = defineComponent<BadgePlaygroundProps>({
  id: 'badge',
  name: 'Badge',
  category: 'data-display',
  icon: 'badge',
  description: 'Indicadores compactos para status e taxonomia.',
  playground: {
    initialProps: {
      variant: 'soft',
      color: 'primary',
      size: 'medium',
      children: 'Beta',
    },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Solid', value: 'solid' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Beta' },
    ],
    render: (props) => <Labs.Badge variant={props.variant} color={props.color} size={props.size}>{String(props.children ?? '')}</Labs.Badge>,
    code: (props) => wrapSnippet(['Badge'], [
      'return (',
      `  ${buildOpeningTag('Badge', { variant: props.variant, color: props.color, size: props.size })}>${props.children}</Badge>`,
      ');',
    ]),
  },
});

export default badgeDefinition;
