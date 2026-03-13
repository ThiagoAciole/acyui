import * as Labs from '@aciole/acyon';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';

type TextAreaPlaygroundProps = Pick<Labs.TextAreaProps, 'label' | 'placeholder' | 'hint' | 'disabled'>;

const initialProps: TextAreaPlaygroundProps = {
  label: 'Descricao',
  placeholder: 'Descreva o contexto',
  hint: 'Mensagem de apoio',
  disabled: false,
};

const textareaDefinition: ComponentDefinition<TextAreaPlaygroundProps> = defineComponent({
  id: 'text-area',
  name: 'TextArea',
  category: 'forms',
  icon: 'form-input',
  description: 'Campo multi-linha para entradas longas.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Descricao' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Descreva o contexto' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Mensagem de apoio' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => (
      <Labs.TextArea
        label={String(props.label ?? '')}
        placeholder={String(props.placeholder ?? '')}
        hint={String(props.hint ?? '')}
        disabled={Boolean(props.disabled)}
        full
      />
    ),
    code: (props) => wrapSnippet(['TextArea'], [
      'return (',
      `  ${buildOpeningTag('TextArea', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default textareaDefinition;
