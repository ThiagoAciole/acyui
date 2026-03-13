import * as Labs from '@aciole/acyon';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';

type InputPlaygroundProps = Pick<Labs.InputProps, 'label' | 'placeholder' | 'hint' | 'size' | 'disabled'>;

const initialProps: InputPlaygroundProps = {
  label: 'Nome',
  placeholder: 'Digite aqui',
  size: 'medium',
  disabled: false,
  hint: 'Campo de exemplo',
};

const inputDefinition: ComponentDefinition<InputPlaygroundProps> = defineComponent({
  id: 'input',
  name: 'Input',
  category: 'forms',
  icon: 'text-cursor',
  description: 'Campo de texto padronizado.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Nome' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Digite aqui' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Campo de exemplo' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => (
      <Labs.Input
        label={String(props.label ?? '')}
        placeholder={String(props.placeholder ?? '')}
        hint={String(props.hint ?? '')}
        size={props.size}
        disabled={Boolean(props.disabled)}
        full
      />
    ),
    code: (props) => wrapSnippet(['Input'], [
      'return (',
      `  ${buildOpeningTag('Input', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default inputDefinition;
