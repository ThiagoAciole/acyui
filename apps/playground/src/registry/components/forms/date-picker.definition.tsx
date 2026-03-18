import { Box } from 'acioleui';
import { buildOpeningTag, DatePickerPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type DatePickerPlaygroundProps = { label: string; placeholder: string; hint: string; disabled: boolean; value: string };
const today = new Date();
const initialDate = today.toISOString().split('T')[0];

const initialProps: DatePickerPlaygroundProps = {
  label: 'Data',
  placeholder: 'dd/mm/aaaa',
  hint: 'Selecione uma data',
  disabled: false,
  value: initialDate,
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
      { type: 'text', name: 'value', label: 'Value', placeholder: initialDate },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => {
      return (
        <Box style={{ width: '100%', height: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', gap: 'var(--space-4)' }}>
          <DatePickerPreview {...props} />
        </Box>
      );
    },
    code: (props) => wrapSnippet(['DatePicker'], [
      'return (',
      `  ${buildOpeningTag('DatePicker', { label: props.label, placeholder: props.placeholder, hint: props.hint, value: props.value, disabled: props.disabled })} />`,
      ');',
    ]),
  },
});

export default datepickerDefinition;
