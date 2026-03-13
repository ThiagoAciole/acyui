import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, DatePickerPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type DatePickerPlaygroundProps = { label: string; placeholder: string; hint: string; disabled: boolean; value: string };

const initialProps: DatePickerPlaygroundProps = {
  label: 'Data',
  placeholder: 'dd/mm/aaaa',
  hint: 'Selecione uma data',
  disabled: false,
  value: '2026-03-12',
};

const datepickerDefinition: ComponentDefinition<DatePickerPlaygroundProps> = defineComponent({
  id: 'date-picker',
  name: 'DatePicker',
  category: 'forms',
  icon: 'calendar',
  description: 'Entrada de data com experiencia guiada.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Data' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'dd/mm/aaaa' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Selecione uma data' },
      { type: 'text', name: 'value', label: 'Value (ISO)', placeholder: '2026-03-12' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <DatePickerPreview {...props} />,
    code: (props) => wrapSnippet(['DatePicker'], [
      'return (',
      `  ${buildOpeningTag('DatePicker', { label: props.label, placeholder: props.placeholder, hint: props.hint, value: props.value, disabled: props.disabled })} />`,
      ');',
    ]),
  },
});

export default datepickerDefinition;
