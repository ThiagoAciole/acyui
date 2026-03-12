import * as Labs from 'acyon';
import * as React from 'react';
import type { ComponentRoute } from './componentRoutes';

type ControlOption = { label: string; value: string };

type PlaygroundControl =
  | {
    type: 'text' | 'textarea';
    name: string;
    label: string;
    placeholder?: string;
  }
  | {
    type: 'boolean';
    name: string;
    label: string;
  }
  | {
    type: 'select';
    name: string;
    label: string;
    options: ControlOption[];
  };

export interface PlaygroundConfig<TProps extends Record<string, unknown> = Record<string, unknown>> {
  imports: string[];
  initialProps: TProps;
  controls: PlaygroundControl[];
  render: { bivarianceHack(props: TProps): React.ReactNode }['bivarianceHack'];
  generateCode: { bivarianceHack(props: TProps): string }['bivarianceHack'];
}

type AvatarPlaygroundProps = Pick<Labs.AvatarProps, 'name' | 'src' | 'size' | 'status'>;
type ButtonPlaygroundProps = Pick<Labs.ButtonProps, 'variant' | 'color' | 'size' | 'full' | 'loading'> & { children: string };
type BadgePlaygroundProps = Pick<Labs.BadgeProps, 'variant' | 'color' | 'size'> & { children: string };
type TagPlaygroundProps = Pick<Labs.TagProps, 'variant' | 'color' | 'size' | 'closable'> & { children: string };
type TextPlaygroundProps = Pick<Labs.TextOwnProps, 'size' | 'color' | 'weight'> & { children: string };
type HeadingPlaygroundProps = { level: 'Heading' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6'; weight?: Labs.HeadingWeight; children: string };
type LinkPlaygroundProps = Pick<Labs.LinkOwnProps, 'color' | 'underline'> & { href: string; children: string };
type InputPlaygroundProps = Pick<Labs.InputProps, 'label' | 'placeholder' | 'supportText' | 'size' | 'disabled'>;
type TextAreaPlaygroundProps = Pick<Labs.TextAreaProps, 'label' | 'placeholder' | 'supportText' | 'disabled'>;
type SearchPlaygroundProps = Pick<Labs.SearchProps, 'label' | 'placeholder' | 'loading'>;
type SelectPlaygroundProps = Pick<Labs.SelectProps, 'label' | 'value' | 'placeholder' | 'disabled'>;
type CheckboxPlaygroundProps = Pick<Labs.CheckboxProps, 'label' | 'checked' | 'disabled'>;
type RadioPlaygroundProps = Pick<Labs.RadioProps, 'label' | 'checked' | 'disabled'>;
type SwitchPlaygroundProps = Pick<Labs.SwitchProps, 'label' | 'checked' | 'disabled' | 'size'>;

function renderPrimitive(value: unknown) {
  if (typeof value === 'string') {
    return JSON.stringify(value);
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  return String(value);
}

function buildOpeningTag(name: string, props: Record<string, unknown>) {
  const entries = Object.entries(props).filter(([, value]) => value !== '' && value !== false && value !== undefined && value !== null);

  if (entries.length === 0) {
    return `<${name}`;
  }

  return [
    `<${name}`,
    ...entries.map(([key, value]) => (typeof value === 'boolean' ? `  ${key}` : `  ${key}={${renderPrimitive(value)}}`.replace('={"', '="').replace('"}', '"'))),
  ].join('\n');
}

function wrapSnippet(imports: string[], body: string[]) {
  return [`const { ${imports.join(', ')} } = Labs;`, '', ...body].join('\n');
}

type PlaygroundConfigMap = Partial<Record<ComponentRoute['id'], PlaygroundConfig>>;

export const playgroundConfigs: PlaygroundConfigMap = {
  avatar: {
    imports: ['Avatar'],
    initialProps: {
      name: 'Thiago Aciole',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      size: 'md',
      status: 'online',
    },
    controls: [
      {
        type: 'select', name: 'size', label: 'Size', options: [
          { label: 'Extra Small', value: 'xs' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ]
      },
      {
        type: 'select', name: 'status', label: 'Status', options: [
          { label: 'Online', value: 'online' },
          { label: 'Offline', value: 'offline' },
          { label: 'Away', value: 'away' },
          { label: 'Busy', value: 'busy' },
        ]
      },
      { type: 'text', name: 'name', label: 'Name', placeholder: 'Thiago Aciole' },
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://...' },
    ],
    render: (props: AvatarPlaygroundProps) => <Labs.Avatar {...props} />,
    generateCode: (props) => wrapSnippet(['Avatar'], [
      'return (',
      `  ${buildOpeningTag('Avatar', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<AvatarPlaygroundProps>,
  button: {
    imports: ['Button'],
    initialProps: { variant: 'solid', color: 'primary', size: 'md', full: false, loading: false, children: 'Click me' },
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
          { label: 'Default', value: 'default' },
          { label: 'Success', value: 'success' },
          { label: 'Warning', value: 'warning' },
          { label: 'Danger', value: 'danger' },
        ]
      },
      {
        type: 'select', name: 'size', label: 'Size', options: [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
          { label: 'XL', value: 'xl' },
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
  badge: {
    imports: ['Badge'],
    initialProps: { variant: 'soft', color: 'primary', size: 'md', children: 'Beta' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Solid', value: 'solid' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }, { label: 'Default', value: 'default' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Beta' },
    ],
    render: (props: BadgePlaygroundProps) => <Labs.Badge variant={props.variant} color={props.color} size={props.size}>{String(props.children ?? '')}</Labs.Badge>,
    generateCode: (props) => wrapSnippet(['Badge'], [
      'return (',
      `  ${buildOpeningTag('Badge', { variant: props.variant, color: props.color, size: props.size })}>${props.children}</Badge>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<BadgePlaygroundProps>,
  tag: {
    imports: ['Tag'],
    initialProps: { variant: 'soft', color: 'primary', size: 'md', children: 'Design System', closable: false },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }, { label: 'Default', value: 'default' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'XS', value: 'xs' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Design System' },
      { type: 'boolean', name: 'closable', label: 'Closable' },
    ],
    render: (props: TagPlaygroundProps) => <Labs.Tag variant={props.variant} color={props.color} size={props.size} closable={Boolean(props.closable)}>{String(props.children ?? '')}</Labs.Tag>,
    generateCode: (props) => wrapSnippet(['Tag'], [
      'return (',
      `  ${buildOpeningTag('Tag', { variant: props.variant, color: props.color, size: props.size, closable: props.closable })}>${props.children}</Tag>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<TagPlaygroundProps>,
  text: {
    imports: ['Text'],
    initialProps: { size: 'md', color: 'default', weight: 'normal', children: 'Texto de exemplo para o playground.' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'XS', value: 'xs' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Default', value: 'default' }, { label: 'Subtle', value: 'subtle' }, { label: 'Muted', value: 'muted' }, { label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Texto de exemplo' },
    ],
    render: (props: TextPlaygroundProps) => <Labs.Text size={props.size} color={props.color} weight={props.weight}>{String(props.children ?? '')}</Labs.Text>,
    generateCode: (props) => wrapSnippet(['Text'], [
      'return (',
      `  ${buildOpeningTag('Text', { size: props.size, color: props.color, weight: props.weight })}>`,
      `    ${props.children}`,
      '  </Text>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TextPlaygroundProps>,
  heading: {
    imports: ['Heading', 'Heading2', 'Heading3', 'Heading4', 'Heading5', 'Heading6'],
    initialProps: { level: 'Heading', weight: 'bold', children: 'Titulo de exemplo' },
    controls: [
      { type: 'select', name: 'level', label: 'Component', options: [{ label: 'Heading', value: 'Heading' }, { label: 'Heading2', value: 'Heading2' }, { label: 'Heading3', value: 'Heading3' }, { label: 'Heading4', value: 'Heading4' }, { label: 'Heading5', value: 'Heading5' }, { label: 'Heading6', value: 'Heading6' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Titulo de exemplo' },
    ],
    render: (props: HeadingPlaygroundProps) => {
      const Component = ((Labs as unknown) as Record<string, React.ElementType>)[String(props.level)] ?? Labs.Heading;
      return <Component weight={props.weight}>{String(props.children ?? '')}</Component>;
    },
    generateCode: (props) => wrapSnippet(['Heading', 'Heading2', 'Heading3', 'Heading4', 'Heading5', 'Heading6'], [
      'return (',
      `  <${props.level} weight="${props.weight}">${props.children}</${props.level}>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<HeadingPlaygroundProps>,
  link: {
    imports: ['Link'],
    initialProps: { href: '#/button', color: 'primary', underline: false, children: 'Abrir Button' },
    controls: [
      { type: 'text', name: 'href', label: 'Href', placeholder: '#/button' },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Default', value: 'default' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }] },
      { type: 'boolean', name: 'underline', label: 'Underline' },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Abrir Button' },
    ],
    render: (props: LinkPlaygroundProps) => <Labs.Link href={String(props.href ?? '#')} color={props.color} underline={Boolean(props.underline)}>{String(props.children ?? '')}</Labs.Link>,
    generateCode: (props) => wrapSnippet(['Link'], [
      'return (',
      `  ${buildOpeningTag('Link', { href: props.href, color: props.color, underline: props.underline })}>${props.children}</Link>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<LinkPlaygroundProps>,
  input: {
    imports: ['Input'],
    initialProps: { label: 'Nome', placeholder: 'Digite aqui', size: 'md', disabled: false, supportText: 'Campo de exemplo' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Nome' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Digite aqui' },
      { type: 'text', name: 'supportText', label: 'Support Text', placeholder: 'Campo de exemplo' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: InputPlaygroundProps) => <Labs.Input label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} supportText={String(props.supportText ?? '')} size={props.size} disabled={Boolean(props.disabled)} full />,
    generateCode: (props) => wrapSnippet(['Input'], [
      'return (',
      `  ${buildOpeningTag('Input', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<InputPlaygroundProps>,
  'text-area': {
    imports: ['TextArea'],
    initialProps: { label: 'Descricao', placeholder: 'Descreva o contexto', supportText: 'Mensagem de apoio', disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Descricao' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Descreva o contexto' },
      { type: 'text', name: 'supportText', label: 'Support Text', placeholder: 'Mensagem de apoio' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: TextAreaPlaygroundProps) => <Labs.TextArea label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} supportText={String(props.supportText ?? '')} disabled={Boolean(props.disabled)} full />,
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
    render: (props: SelectPlaygroundProps) => <Labs.Select label={String(props.label ?? '')} value={String(props.value ?? '')} onChange={() => { }} placeholder={String(props.placeholder ?? '')} disabled={Boolean(props.disabled)} options={[{ label: 'Design', value: 'design' }, { label: 'Engineering', value: 'engineering' }, { label: 'Product', value: 'product' }]} full />,
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
    render: (props: CheckboxPlaygroundProps) => <Labs.Checkbox label={String(props.label ?? '')} checked={Boolean(props.checked)} disabled={Boolean(props.disabled)} readOnly />,
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
    render: (props: RadioPlaygroundProps) => <Labs.Radio name="preview-radio" label={String(props.label ?? '')} checked={Boolean(props.checked)} disabled={Boolean(props.disabled)} readOnly />,
    generateCode: (props) => wrapSnippet(['Radio'], [
      'return (',
      `  ${buildOpeningTag('Radio', { ...props, name: 'preview-radio' } as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<RadioPlaygroundProps>,
  switch: {
    imports: ['Switch'],
    initialProps: { label: 'Ativar notificacoes', checked: true, disabled: false, size: 'md' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ativar notificacoes' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }] },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: SwitchPlaygroundProps) => <Labs.Switch label={String(props.label ?? '')} checked={Boolean(props.checked)} disabled={Boolean(props.disabled)} size={props.size} readOnly />,
    generateCode: (props) => wrapSnippet(['Switch'], [
      'return (',
      `  ${buildOpeningTag('Switch', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SwitchPlaygroundProps>,
};
