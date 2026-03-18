import * as Labs from 'acioleui';
import * as React from 'react';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';

type NumberInputPlaygroundProps = Pick<
  Labs.NumberInputProps,
  'variant' | 'disabled' | 'invalid' | 'fullWidth'
> & {
  label: string;
  placeholder: string;
  min: string;
  max: string;
  step: string;
};

const initialProps: NumberInputPlaygroundProps = {
  label: 'Quantidade',
  placeholder: '0',
  variant: 'default',
  disabled: false,
  invalid: false,
  fullWidth: false,
  min: '',
  max: '',
  step: '1',
};

function NumberInputPreview(props: NumberInputPlaygroundProps) {
  const [value, setValue] = React.useState<number | undefined>(undefined);

  return (
    <Labs.NumberInput
      label={props.label || undefined}
      placeholder={props.placeholder}
      variant={props.variant}
      disabled={Boolean(props.disabled)}
      invalid={Boolean(props.invalid)}
      fullWidth={Boolean(props.fullWidth)}
      min={props.min !== '' ? Number(props.min) : undefined}
      max={props.max !== '' ? Number(props.max) : undefined}
      step={props.step !== '' ? Number(props.step) : 1}
      value={value}
      onChange={setValue}
    />
  );
}

const numberInputDefinition: ComponentDefinition<NumberInputPlaygroundProps> = defineComponent({
  id: 'number-input',
  name: 'NumberInput',
  category: 'forms',
  icon: 'hash',
  description: 'Campo numÃ©rico acessÃ­vel com suporte a stepper.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Quantidade' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: '0' },
      {
        type: 'select',
        name: 'variant',
        label: 'Variant',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Stepper', value: 'stepper' },
        ],
      },
      { type: 'number', name: 'step', label: 'Step', min: 0.01, placeholder: '1' },
      { type: 'number', name: 'min', label: 'Min', placeholder: 'Sem mÃ­nimo' },
      { type: 'number', name: 'max', label: 'Max', placeholder: 'Sem mÃ¡ximo' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
      { type: 'boolean', name: 'invalid', label: 'Invalid' },
      { type: 'boolean', name: 'fullWidth', label: 'Full Width' },
    ],
    render: (props) => <NumberInputPreview {...(props as NumberInputPlaygroundProps)} />,
    code: (props) => {
      const { min, max, step, ...rest } = props as NumberInputPlaygroundProps;
      const codeProps: Record<string, unknown> = { ...rest };
      if (min !== '') codeProps.min = Number(min);
      if (max !== '') codeProps.max = Number(max);
      if (step !== '' && step !== '1') codeProps.step = Number(step);

      return wrapSnippet(['NumberInput'], [
        buildOpeningTag('NumberInput', codeProps),
        '/>',
      ]);
    },
  },
});

export default numberInputDefinition;
