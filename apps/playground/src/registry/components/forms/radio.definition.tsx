import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, RadioPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type RadioPlaygroundProps = Pick<Labs.RadioProps, 'label' | 'checked' | 'disabled'>;

const initialProps: RadioPlaygroundProps = {
  label: 'Mensal',
  checked: true,
  disabled: false,
};

const radioDefinition: ComponentDefinition<RadioPlaygroundProps> = defineComponent({
  id: 'radio',
  name: 'Radio',
  category: 'forms',
  icon: 'circle-dot',
  description: 'Selecao exclusiva entre opcoes.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Mensal' },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <RadioPreview {...props} />,
    code: (props) => wrapSnippet(['Radio'], [
      'return (',
      `  ${buildOpeningTag('Radio', { ...props, name: 'preview-radio' } as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default radioDefinition;
