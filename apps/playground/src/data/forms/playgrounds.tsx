import * as Labs from '@aciole/acyon';
import { buildOpeningTag, CheckboxPreview, DatePickerPreview, MultiSelectPreview, RadioPreview, SelectPreview, SliderPreview, SwitchPreview, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type ButtonPlaygroundProps = Pick<Labs.ButtonProps, 'variant' | 'color' | 'size' | 'full' | 'loading'> & { children: string };
type InputPlaygroundProps = Pick<Labs.InputProps, 'label' | 'placeholder' | 'hint' | 'size' | 'disabled'>;
type TextAreaPlaygroundProps = Pick<Labs.TextAreaProps, 'label' | 'placeholder' | 'hint' | 'disabled'>;
type SearchPlaygroundProps = Pick<Labs.SearchProps, 'label' | 'placeholder' | 'loading'>;
type SelectPlaygroundProps = Pick<Labs.SelectProps, 'label' | 'value' | 'placeholder' | 'disabled'>;
type CheckboxPlaygroundProps = Pick<Labs.CheckboxProps, 'label' | 'checked' | 'disabled'>;
type RadioPlaygroundProps = Pick<Labs.RadioProps, 'label' | 'checked' | 'disabled'>;
type SwitchPlaygroundProps = Pick<Labs.SwitchProps, 'label' | 'checked' | 'disabled' | 'size'>;
type IconButtonPlaygroundProps = Pick<Labs.IconButtonProps, 'variant' | 'color' | 'size' | 'disabled'> & { label: string };
type FileUploadPlaygroundProps = { title: string; description: string; multiple: boolean; disabled: boolean };
type MultiSelectPlaygroundProps = { label: string; placeholder: string; disabled: boolean; selection: 'none' | 'react' | 'react-vue' };
type SliderPlaygroundProps = { label: string; supportText: string; min: string; max: string; value: string };
type DatePickerPlaygroundProps = { label: string; placeholder: string; hint: string; disabled: boolean; value: string };

export const formsPlaygrounds: PlaygroundConfigMap = {

  button: {
    imports: ['Button'],
    initialProps: { variant: 'solid', color: 'primary', size: 'medium', full: false, loading: false, children: 'Click me' },
    controls: [
      {
        type: 'select', name: 'variant', label: 'Variant', options: [
          { label: 'Solid', value: 'solid' },
          { label: 'Soft', value: 'soft' },
          { label: 'Ghost', value: 'ghost' },
          { label: 'Outline', value: 'outline' },
        ]
      },
      {
        type: 'select', name: 'color', label: 'Color', options: [
          { label: 'Primary', value: 'primary' },
          { label: 'Neutral', value: 'neutral' },
          { label: 'Success', value: 'success' },
          { label: 'Warning', value: 'warning' },
          { label: 'Error', value: 'error' },
        ]
      },
      {
        type: 'select', name: 'size', label: 'Size', options: [
          { label: 'ExtraSmall', value: 'extraSmall' },
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
          { label: 'ExtraLarge', value: 'extraLarge' },
        ]
      },
      { type: 'text', name: 'children', label: 'Label', placeholder: 'Click me' },
      { type: 'boolean', name: 'full', label: 'Full Width' },
      { type: 'boolean', name: 'loading', label: 'Loading' },
    ],
    render: (props: ButtonPlaygroundProps) => <Labs.Button variant={props.variant} color={props.color} size={props.size} full={Boolean(props.full)} loading={Boolean(props.loading)}>{String(props.children ?? '')}</Labs.Button>,
    generateCode: (props) => wrapSnippet(['Button'], [
      'return (',
      `  ${buildOpeningTag('Button', { variant: props.variant, color: props.color, size: props.size, full: props.full, loading: props.loading })}>`,
      `    ${props.children}`,
      '  </Button>',
      ');',
    ]),
  } satisfies PlaygroundConfig<ButtonPlaygroundProps>,

  input: {
    imports: ['Input'],
    initialProps: { label: 'Nome', placeholder: 'Digite aqui', size: 'medium', disabled: false, hint: 'Campo de exemplo' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Nome' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Digite aqui' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Campo de exemplo' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: InputPlaygroundProps) => <Labs.Input label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} hint={String(props.hint ?? '')} size={props.size} disabled={Boolean(props.disabled)} full />,
    generateCode: (props) => wrapSnippet(['Input'], [
      'return (',
      `  ${buildOpeningTag('Input', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<InputPlaygroundProps>,

  'text-area': {
    imports: ['TextArea'],
    initialProps: { label: 'Descricao', placeholder: 'Descreva o contexto', hint: 'Mensagem de apoio', disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Descricao' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Descreva o contexto' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Mensagem de apoio' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: TextAreaPlaygroundProps) => <Labs.TextArea label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} hint={String(props.hint ?? '')} disabled={Boolean(props.disabled)} full />,
    generateCode: (props) => wrapSnippet(['TextArea'], [
      'return (',
      `  ${buildOpeningTag('TextArea', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<TextAreaPlaygroundProps>,

  search: {
    imports: ['Search'],
    initialProps: { label: 'Buscar', placeholder: 'Buscar componente', loading: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Buscar' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Buscar componente' },
      { type: 'boolean', name: 'loading', label: 'Loading' },
    ],
    render: (props: SearchPlaygroundProps) => <Labs.Search label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} loading={Boolean(props.loading)} full />,
    generateCode: (props) => wrapSnippet(['Search'], [
      'return (',
      `  ${buildOpeningTag('Search', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SearchPlaygroundProps>,

  select: {
    imports: ['Select'],
    initialProps: { label: 'Area', placeholder: 'Escolha uma area', value: 'design', disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Area' },
      { type: 'select', name: 'value', label: 'Value', options: [{ label: 'Design', value: 'design' }, { label: 'Engineering', value: 'engineering' }, { label: 'Product', value: 'product' }] },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha uma area' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: SelectPlaygroundProps) => <SelectPreview {...props} />,
    generateCode: (props) => wrapSnippet(['Select'], [
      'return (',
      '  <Select',
      `    label="${props.label}"`,
      '    options={[',
      "      { label: 'Design', value: 'design' },",
      "      { label: 'Engineering', value: 'engineering' },",
      "      { label: 'Product', value: 'product' },",
      '    ]}',
      `    value="${props.value}"`,
      `    placeholder="${props.placeholder}"`,
      `${props.disabled ? '    disabled' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<SelectPlaygroundProps>,

  checkbox: {
    imports: ['Checkbox'],
    initialProps: { label: 'Aceitar termos', checked: true, disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Aceitar termos' },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: CheckboxPlaygroundProps) => <CheckboxPreview {...props} />,
    generateCode: (props) => wrapSnippet(['Checkbox'], [
      'return (',
      `  ${buildOpeningTag('Checkbox', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<CheckboxPlaygroundProps>,

  radio: {
    imports: ['Radio'],
    initialProps: { label: 'Mensal', checked: true, disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Mensal' },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: RadioPlaygroundProps) => <RadioPreview {...props} />,
    generateCode: (props) => wrapSnippet(['Radio'], [
      'return (',
      `  ${buildOpeningTag('Radio', { ...props, name: 'preview-radio' } as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<RadioPlaygroundProps>,

  switch: {
    imports: ['Switch'],
    initialProps: { label: 'Ativar notificacoes', checked: true, disabled: false, size: 'medium' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ativar notificacoes' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }] },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: SwitchPlaygroundProps) => <SwitchPreview {...props} />,
    generateCode: (props) => wrapSnippet(['Switch'], [
      'return (',
      `  ${buildOpeningTag('Switch', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SwitchPlaygroundProps>,

  'icon-button': {
    imports: ['IconButton', 'UploadIcon'],
    initialProps: { variant: 'solid', color: 'primary', size: 'medium', disabled: false, label: 'Enviar' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Solid', value: 'solid' }, { label: 'Soft', value: 'soft' }, { label: 'Ghost', value: 'ghost' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Enviar' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: IconButtonPlaygroundProps) => <Labs.IconButton icon={<Labs.UploadIcon size={16} />} label={props.label} variant={props.variant} color={props.color} size={props.size} disabled={Boolean(props.disabled)} />,
    generateCode: (props) => wrapSnippet(['IconButton', 'UploadIcon'], [
      'return (',
      `  ${buildOpeningTag('IconButton', { variant: props.variant, color: props.color, size: props.size, disabled: props.disabled, label: props.label })}`,
      '    icon={<UploadIcon size={16} />}',
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<IconButtonPlaygroundProps>,

  'file-upload': {
    imports: ['FileUpload'],
    initialProps: { title: 'Enviar arquivo', description: 'PDF, PNG ou JPG de ate 5MB.', multiple: false, disabled: false },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Enviar arquivo' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'PDF, PNG ou JPG de ate 5MB.' },
      { type: 'boolean', name: 'multiple', label: 'Multiple' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: FileUploadPlaygroundProps) => <Labs.FileUpload title={props.title} description={props.description} multiple={Boolean(props.multiple)} disabled={Boolean(props.disabled)} />,
    generateCode: (props) => wrapSnippet(['FileUpload'], [
      'return (',
      `  ${buildOpeningTag('FileUpload', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<FileUploadPlaygroundProps>,

  'multi-select': {
    imports: ['MultiSelect'],
    initialProps: { label: 'Tecnologias', placeholder: 'Escolha tecnologias', disabled: false, selection: 'react-vue' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Tecnologias' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha tecnologias' },
      { type: 'select', name: 'selection', label: 'Selection', options: [{ label: 'None', value: 'none' }, { label: 'React', value: 'react' }, { label: 'React + Vue', value: 'react-vue' }] },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: MultiSelectPlaygroundProps) => <MultiSelectPreview {...props} />,
    generateCode: (props) => wrapSnippet(['MultiSelect'], [
      'return (',
      '  <MultiSelect',
      `    label="${props.label}"`,
      '    options={[',
      "      { label: 'React', value: 'react' },",
      "      { label: 'Vue', value: 'vue' },",
      "      { label: 'Svelte', value: 'svelte' },",
      '    ]}',
      `    value={${JSON.stringify(props.selection === 'none' ? [] : props.selection === 'react' ? ['react'] : ['react', 'vue'])}}`,
      `    placeholder="${props.placeholder}"`,
      `${props.disabled ? '    disabled' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<MultiSelectPlaygroundProps>,

  slider: {
    imports: ['Slider'],
    initialProps: { label: 'Volume', supportText: 'Ajuste o valor', min: '0', max: '100', value: '40' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Volume' },
      { type: 'text', name: 'supportText', label: 'Support text', placeholder: 'Ajuste o valor' },
      { type: 'text', name: 'min', label: 'Min', placeholder: '0' },
      { type: 'text', name: 'max', label: 'Max', placeholder: '100' },
      { type: 'text', name: 'value', label: 'Value', placeholder: '40' },
    ],
    render: (props: SliderPlaygroundProps) => <SliderPreview {...props} />,
    generateCode: (props) => wrapSnippet(['Slider'], [
      'return (',
      `  ${buildOpeningTag('Slider', { label: props.label, supportText: props.supportText, min: Number(props.min), max: Number(props.max), value: Number(props.value) })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SliderPlaygroundProps>,

  'date-picker': {
    imports: ['DatePicker'],
    initialProps: { label: 'Data', placeholder: 'dd/mm/aaaa', hint: 'Selecione uma data', disabled: false, value: '2026-03-12' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Data' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'dd/mm/aaaa' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Selecione uma data' },
      { type: 'text', name: 'value', label: 'Value (ISO)', placeholder: '2026-03-12' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: DatePickerPlaygroundProps) => <DatePickerPreview {...props} />,
    generateCode: (props) => wrapSnippet(['DatePicker'], [
      'return (',
      `  ${buildOpeningTag('DatePicker', { label: props.label, placeholder: props.placeholder, hint: props.hint, value: props.value, disabled: props.disabled })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<DatePickerPlaygroundProps>,
};
