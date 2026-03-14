import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type FormFieldPlaygroundProps = {
  label: string;
  hint: string;
  error: string;
  full: boolean;
};

const initialProps: FormFieldPlaygroundProps = {
  label: 'Email',
  hint: 'Digite seu email corporativo',
  error: '',
  full: false,
};

const formFieldDefinition: ComponentDefinition<FormFieldPlaygroundProps> = defineComponent({
  id: 'form-field',
  name: 'FormField',
  category: 'forms',
  icon: 'layout-template',
  description: 'Container de campo de formulário com suporte a label, hint e mensagem de erro.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Email' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Digite seu email corporativo' },
      { type: 'text', name: 'error', label: 'Error', placeholder: 'Campo obrigatório' },
      { type: 'boolean', name: 'full', label: 'Full width' },
    ],
    render: (props) => (
      <Labs.FormField
        label={String(props.label ?? '')}
        hint={String(props.hint ?? '') || undefined}
        error={String(props.error ?? '') || undefined}
        full={Boolean(props.full)}
      >
        <Labs.Input placeholder="exemplo@empresa.com" full={Boolean(props.full)} />
      </Labs.FormField>
    ),
    code: (props) => wrapSnippet(['FormField', 'Input'], [
      `<FormField label="${props.label}" hint="${props.hint}" error="${props.error}" full={${props.full}} />`,
    ]),
  },
});

export default formFieldDefinition;
