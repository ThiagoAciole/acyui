import * as Labs from '@aciole/acyon';
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
  imports: string[] | ((props: TProps) => string[]);
  initialProps: TProps;
  controls: PlaygroundControl[];
  render: { bivarianceHack(props: TProps): React.ReactNode }['bivarianceHack'];
  generateCode: { bivarianceHack(props: TProps): string }['bivarianceHack'];
}

type AvatarPlaygroundProps = Pick<Labs.AvatarProps, 'name' | 'src' | 'size' | 'status'>;
type AlertPlaygroundProps = Pick<Labs.AlertProps, 'variant' | 'title'> & { content: string; actionLabel: string };
type ButtonPlaygroundProps = Pick<Labs.ButtonProps, 'variant' | 'color' | 'size' | 'full' | 'loading'> & { children: string };
type BadgePlaygroundProps = Pick<Labs.BadgeProps, 'variant' | 'color' | 'size'> & { children: string };
type TagPlaygroundProps = Pick<Labs.TagProps, 'variant' | 'color' | 'size' | 'closable'> & { children: string };
type TextPlaygroundProps = Pick<Labs.TextOwnProps, 'size' | 'color' | 'weight'> & { children: string };
type HeadingPlaygroundProps = { level: 'Heading' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6'; weight?: Labs.HeadingWeight; children: string };
type LinkPlaygroundProps = Pick<Labs.LinkOwnProps, 'color' | 'underline'> & { href: string; children: string };
type InputPlaygroundProps = Pick<Labs.InputProps, 'label' | 'placeholder' | 'hint' | 'size' | 'disabled'>;
type TextAreaPlaygroundProps = Pick<Labs.TextAreaProps, 'label' | 'placeholder' | 'hint' | 'disabled'>;
type SearchPlaygroundProps = Pick<Labs.SearchProps, 'label' | 'placeholder' | 'loading'>;
type SelectPlaygroundProps = Pick<Labs.SelectProps, 'label' | 'value' | 'placeholder' | 'disabled'>;
type CheckboxPlaygroundProps = Pick<Labs.CheckboxProps, 'label' | 'checked' | 'disabled'>;
type RadioPlaygroundProps = Pick<Labs.RadioProps, 'label' | 'checked' | 'disabled'>;
type SwitchPlaygroundProps = Pick<Labs.SwitchProps, 'label' | 'checked' | 'disabled' | 'size'>;
type IconButtonPlaygroundProps = Pick<Labs.IconButtonProps, 'variant' | 'color' | 'size' | 'disabled'> & { label: string };
type EmptyStatePlaygroundProps = { title: string; description: string; actionLabel: string };
type LoaderPlaygroundProps = Pick<Labs.LoaderProps, 'size' | 'label'> & { color: 'primary' | 'neutral' | 'success' | 'warning' | 'error' };
type SkeletonPlaygroundProps = { width: string; height: string; circle: boolean; animated: boolean };
type ProgressPlaygroundProps = Pick<Labs.ProgressProps, 'value' | 'size' | 'animated' | 'showValue' | 'label'> & { color: 'primary' | 'neutral' | 'success' | 'warning' | 'error' };
type PaginationPlaygroundProps = { currentPage: string; totalPages: string; showControls: boolean };
type TabsPlaygroundProps = Pick<Labs.TabsProps, 'variant' | 'size'> & { defaultValue: 'overview' | 'specs' | 'usage' };
type TooltipPlaygroundProps = { content: string; placement: 'top' | 'bottom' | 'left' | 'right'; buttonLabel: string };
type ModalPlaygroundProps = { title: string; description: string; body: string; confirmLabel: string; size: 'sm' | 'md' | 'lg' | 'xl'; closeOnOverlayClick: boolean };
type DrawerPlaygroundProps = { title: string; body: string; confirmLabel: string; size: 'sm' | 'md' | 'lg' | 'full'; placement: 'left' | 'right'; closeOnOverlayClick: boolean };
type CodePlaygroundProps = { children: string; size: 'sm' | 'md' | 'lg'; weight: 'normal' | 'medium' | 'semibold' | 'bold'; block: boolean };
type FileUploadPlaygroundProps = { title: string; description: string; multiple: boolean; disabled: boolean };
type MultiSelectPlaygroundProps = { label: string; placeholder: string; disabled: boolean; selection: 'none' | 'react' | 'react-vue' };
type SliderPlaygroundProps = { label: string; supportText: string; min: string; max: string; value: string };
type AccordionPlaygroundProps = { type: 'single' | 'multiple'; defaultValue: 'item-1' | 'item-2'; firstTitle: string; secondTitle: string };
type CardPlaygroundProps = { title: string; description: string; content: string; variant: 'default' | 'outlined'; padding: 'sm' | 'md' | 'lg' };
type ImagePlaygroundProps = { src: string; alt: string; objectFit: 'cover' | 'contain' | 'fill'; radius: 'none' | 'sm' | 'md' | 'lg' | 'full' };
type ListPlaygroundProps = { variant: 'default' | 'divided' | 'checklist'; activeItem: 'none' | 'first' | 'second' };
type TablePlaygroundProps = { striped: boolean; hover: boolean; compact: boolean; stickyHeader: boolean };
type TimelinePlaygroundProps = { firstTitle: string; secondTitle: string; thirdTitle: string };
type BreadcrumbPlaygroundProps = { separator: '/' | '>' | '-'; currentLabel: string };
type TopBarPlaygroundProps = { navPosition: 'center' | 'right'; themeToggle: boolean; sticky: boolean; contentInside: boolean };
type BoxPlaygroundProps = { padding: '0' | '2' | '4' | '6'; rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl'; shadow: 'none' | 'sm' | 'md' | 'lg'; surface: 'default' | 'subtle' | 'inverse'; border: boolean; children: string };
type ContainerPlaygroundProps = { size: 'sm' | 'md' | 'lg' | 'xl' | 'full'; children: string };
type DividerPlaygroundProps = { orientation: 'horizontal' | 'vertical'; label: string };
type FlexPlaygroundProps = { direction: 'row' | 'column'; align: 'flex-start' | 'center' | 'flex-end' | 'stretch'; justify: 'flex-start' | 'center' | 'flex-end' | 'space-between'; gap: '0' | '2' | '4' | '6' };
type GridPlaygroundProps = { columns: '1' | '2' | '3' | '4'; gap: '2' | '4' | '6' };
type PageHeaderPlaygroundProps = { title: string; description: string; showBack: boolean };
type SidebarPlaygroundProps = { collapsed: boolean; groupTitle: string };
type SpacerPlaygroundProps = { axis: 'horizontal' | 'vertical'; size: string };
type DatePickerPlaygroundProps = { label: string; placeholder: string; hint: string; disabled: boolean; value: string };

function ModalPreview(props: ModalPlaygroundProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Labs.Button onClick={() => setOpen(true)}>Abrir modal</Labs.Button>
      <Labs.Modal
        open={open}
        onClose={() => setOpen(false)}
        title={props.title}
        description={props.description}
        size={props.size}
        closeOnOverlayClick={props.closeOnOverlayClick}
        footer={(
          <Labs.Flex justify="flex-end" gap="2">
            <Labs.Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Labs.Button>
            <Labs.Button onClick={() => setOpen(false)}>{props.confirmLabel}</Labs.Button>
          </Labs.Flex>
        )}
      >
        <Labs.Text>{props.body}</Labs.Text>
      </Labs.Modal>
    </>
  );
}

function DrawerPreview(props: DrawerPlaygroundProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Labs.Button onClick={() => setOpen(true)}>Abrir drawer</Labs.Button>
      <Labs.Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title={props.title}
        placement={props.placement}
        size={props.size}
        closeOnOverlayClick={props.closeOnOverlayClick}
        footer={(
          <Labs.Flex justify="flex-end" gap="2">
            <Labs.Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Labs.Button>
            <Labs.Button onClick={() => setOpen(false)}>{props.confirmLabel}</Labs.Button>
          </Labs.Flex>
        )}
      >
        <Labs.Text>{props.body}</Labs.Text>
      </Labs.Drawer>
    </>
  );
}

function PaginationPreview(props: PaginationPlaygroundProps) {
  const [page, setPage] = React.useState(Number(props.currentPage));
  const totalPages = Number(props.totalPages);

  React.useEffect(() => {
    setPage(Number(props.currentPage));
  }, [props.currentPage]);

  return (
    <Labs.Pagination
      currentPage={page}
      totalPages={totalPages}
      showControls={props.showControls}
      onPageChange={(nextPage) => setPage(nextPage)}
    />
  );
}

function SelectPreview(props: SelectPlaygroundProps) {
  const [value, setValue] = React.useState(String(props.value ?? ''));

  React.useEffect(() => {
    setValue(String(props.value ?? ''));
  }, [props.value]);

  return (
    <Labs.Select
      label={String(props.label ?? '')}
      value={value}
      onChange={setValue}
      placeholder={String(props.placeholder ?? '')}
      disabled={Boolean(props.disabled)}
      options={[
        { label: 'Design', value: 'design' },
        { label: 'Engineering', value: 'engineering' },
        { label: 'Product', value: 'product' },
      ]}
      full
    />
  );
}

function CheckboxPreview(props: CheckboxPlaygroundProps) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Checkbox label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} onChange={(event) => setChecked(event.target.checked)} />;
}

function RadioPreview(props: RadioPlaygroundProps) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Radio name="preview-radio" label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} onChange={() => setChecked(true)} />;
}

function SwitchPreview(props: SwitchPlaygroundProps) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Switch label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} size={props.size} onChange={(event) => setChecked(event.target.checked)} />;
}

function MultiSelectPreview(props: MultiSelectPlaygroundProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selection = props.selection === 'none' ? [] : props.selection === 'react' ? ['react'] : ['react', 'vue'];
  const [value, setValue] = React.useState<string[]>(selection);

  React.useEffect(() => {
    setValue(selection);
  }, [props.selection, selection]);

  return (
    <Labs.MultiSelect
      label={props.label}
      placeholder={props.placeholder}
      disabled={Boolean(props.disabled)}
      value={value}
      onChange={setValue}
      options={[
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}

function SliderPreview(props: SliderPlaygroundProps) {
  const [value, setValue] = React.useState(Number(props.value));

  React.useEffect(() => {
    setValue(Number(props.value));
  }, [props.value]);

  return (
    <Labs.Slider
      label={props.label}
      supportText={props.supportText}
      min={Number(props.min)}
      max={Number(props.max)}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
    />
  );
}

function DatePickerPreview(props: DatePickerPlaygroundProps) {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Labs.DatePicker
      label={props.label}
      placeholder={props.placeholder}
      hint={props.hint}
      disabled={props.disabled}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

function normalizeDimension(value: unknown) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (typeof value !== 'string') {
    return '';
  }

  const normalizedValue = value.trim();

  if (normalizedValue === '') {
    return '';
  }

  if (/^\d+$/.test(normalizedValue)) {
    return `${normalizedValue}px`;
  }

  return normalizedValue;
}

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
  const normalizedBody =
    body[0] === 'return (' && body[body.length - 1] === ');'
      ? body.slice(1, -1)
      : body;

  return [`import { ${imports.join(', ')} } from '@aciole/acyon';`, '', ...normalizedBody].join('\n');
}

function resolveImports<TProps extends Record<string, unknown>>(
  imports: PlaygroundConfig<TProps>['imports'],
  props: TProps,
) {
  return typeof imports === 'function' ? imports(props) : imports;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlaygroundConfigMap = Partial<Record<ComponentRoute['id'], PlaygroundConfig<any>>>;

export const playgroundConfigs: PlaygroundConfigMap = {
  alert: {
    imports: ['Alert', 'Button'],
    initialProps: { variant: 'warning', title: 'Atenção', content: 'Verifique os dados antes de continuar.', actionLabel: 'Revisar' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Atenção' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Verifique os dados antes de continuar.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Revisar' },
    ],
    render: (props: AlertPlaygroundProps) => (
      <Labs.Alert
        variant={props.variant}
        title={props.title}
        action={props.actionLabel ? <Labs.Button size="sm" variant="ghost" color={props.variant}>{props.actionLabel}</Labs.Button> : undefined}
      >
        {props.content}
      </Labs.Alert>
    ),
    generateCode: (props) => wrapSnippet(['Alert', 'Button'], [
      'return (',
      '  <Alert',
      `    variant="${props.variant}"`,
      `    title="${props.title}"`,
      props.actionLabel ? `    action={<Button size="sm" variant="ghost" color="${props.variant}">${props.actionLabel}</Button>}` : undefined,
      '  >',
      `    ${props.content}`,
      '  </Alert>',
      ');',
    ].filter(Boolean) as string[]),
  } satisfies PlaygroundConfig<AlertPlaygroundProps>,
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
          { label: 'Neutral', value: 'neutral' },
          { label: 'Success', value: 'success' },
          { label: 'Warning', value: 'warning' },
          { label: 'Error', value: 'error' },
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
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
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
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
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
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Default', value: 'default' }, { label: 'Neutral', value: 'neutral' }, { label: 'Inverse', value: 'inverse' }, { label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
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
    imports: (props) => [String(props.level ?? 'Heading')],
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
    generateCode: (props) => wrapSnippet(resolveImports((currentProps) => [String(currentProps.level ?? 'Heading')], props), [
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
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
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
    initialProps: { label: 'Nome', placeholder: 'Digite aqui', size: 'md', disabled: false, hint: 'Campo de exemplo' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Nome' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Digite aqui' },
      { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Campo de exemplo' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
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
    initialProps: { label: 'Ativar notificacoes', checked: true, disabled: false, size: 'md' },
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ativar notificacoes' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }] },
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
    initialProps: { variant: 'solid', color: 'primary', size: 'md', disabled: false, label: 'Enviar' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Solid', value: 'solid' }, { label: 'Soft', value: 'soft' }, { label: 'Ghost', value: 'ghost' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
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
  'empty-state': {
    imports: ['EmptyState', 'Button', 'GhostIcon'],
    initialProps: { title: 'Sem itens', description: 'Nenhum item encontrado para esse filtro.', actionLabel: 'Criar item' },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Sem itens' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Nenhum item encontrado.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Criar item' },
    ],
    render: (props: EmptyStatePlaygroundProps) => (
      <Labs.EmptyState
        icon={<Labs.GhostIcon size={20} />}
        title={props.title}
        description={props.description}
        action={<Labs.Button>{props.actionLabel}</Labs.Button>}
      />
    ),
    generateCode: (props) => wrapSnippet(['EmptyState', 'Button', 'GhostIcon'], [
      'return (',
      '  <EmptyState',
      '    icon={<GhostIcon size={20} />}',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `    action={<Button>${props.actionLabel}</Button>}`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<EmptyStatePlaygroundProps>,
  loader: {
    imports: ['Loader'],
    initialProps: { size: 'md', color: 'primary', label: 'Carregando dados' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'XS', value: 'xs' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Carregando dados' },
    ],
    render: (props: LoaderPlaygroundProps) => <Labs.Loader size={props.size} color={props.color} label={props.label} />,
    generateCode: (props) => wrapSnippet(['Loader'], [
      'return (',
      `  ${buildOpeningTag('Loader', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<LoaderPlaygroundProps>,
  skeleton: {
    imports: ['Skeleton'],
    initialProps: { width: '100%', height: '50px', circle: false, animated: true },
    controls: [
      { type: 'text', name: 'width', label: 'Width', placeholder: '100%' },
      { type: 'text', name: 'height', label: 'Height', placeholder: '50' },
      { type: 'boolean', name: 'circle', label: 'Circle' },
      { type: 'boolean', name: 'animated', label: 'Animated' },
    ],
    render: (props: SkeletonPlaygroundProps) => (
      <div style={{ width: 320, padding: '8px 0', display: 'flex', gap: '8px' }}>
        <Labs.Skeleton
          width={normalizeDimension(props.width)}
          height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
          circle={Boolean(props.circle)}
          animated={Boolean(props.animated)}
        />
        <Labs.Skeleton
          width={normalizeDimension(props.width)}
          height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
          circle={Boolean(props.circle)}
          animated={Boolean(props.animated)}
        />
      </div>
    ),
    generateCode: (props) => wrapSnippet(['Skeleton'], [
      'return (',
      `  ${buildOpeningTag('Skeleton', { width: normalizeDimension(props.width), height: props.circle ? undefined : normalizeDimension(props.height), circle: props.circle, animated: props.animated })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SkeletonPlaygroundProps>,
  progress: {
    imports: ['Progress'],
    initialProps: { value: 64, size: 'md', animated: false, showValue: true, label: 'Progresso', color: 'primary' },
    controls: [
      { type: 'text', name: 'value', label: 'Value', placeholder: '64' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Progresso' },
      { type: 'boolean', name: 'animated', label: 'Animated' },
      { type: 'boolean', name: 'showValue', label: 'Show value' },
    ],
    render: (props: ProgressPlaygroundProps) => <Labs.Progress value={Number(props.value)} size={props.size} animated={Boolean(props.animated)} showValue={Boolean(props.showValue)} label={props.label} color={props.color} />,
    generateCode: (props) => wrapSnippet(['Progress'], [
      'return (',
      `  ${buildOpeningTag('Progress', { value: Number(props.value), size: props.size, animated: props.animated, showValue: props.showValue, label: props.label, color: props.color })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<ProgressPlaygroundProps>,
  pagination: {
    imports: ['Pagination'],
    initialProps: { currentPage: '2', totalPages: '8', showControls: true },
    controls: [
      { type: 'text', name: 'currentPage', label: 'Current page', placeholder: '2' },
      { type: 'text', name: 'totalPages', label: 'Total pages', placeholder: '8' },
      { type: 'boolean', name: 'showControls', label: 'Show controls' },
    ],
    render: (props: PaginationPlaygroundProps) => <PaginationPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Pagination } from '@aciole/acyon';\n\nexport function Example() {\n  const [page, setPage] = useState(${Number(props.currentPage)});\n\n  return (\n    <Pagination\n      currentPage={page}\n      totalPages={${Number(props.totalPages)}}\n      showControls={${Boolean(props.showControls)}}\n      onPageChange={setPage}\n    />\n  );\n}`,
  } satisfies PlaygroundConfig<PaginationPlaygroundProps>,
  tabs: {
    imports: ['Tabs'],
    initialProps: { variant: 'default', size: 'md', defaultValue: 'overview' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Pills', value: 'pills' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'defaultValue', label: 'Default tab', options: [{ label: 'Overview', value: 'overview' }, { label: 'Specs', value: 'specs' }, { label: 'Usage', value: 'usage' }] },
    ],
    render: (props: TabsPlaygroundProps) => <Labs.Tabs variant={props.variant} size={props.size} defaultValue={props.defaultValue} tabs={[{ value: 'overview', label: 'Overview', content: 'Visao geral' }, { value: 'specs', label: 'Specs', content: 'Especificacoes' }, { value: 'usage', label: 'Usage', content: 'Guia rapido' }]} />,
    generateCode: (props) => wrapSnippet(['Tabs'], [
      'return (',
      '  <Tabs',
      '    tabs={[',
      "      { value: 'overview', label: 'Overview', content: 'Visao geral' },",
      "      { value: 'specs', label: 'Specs', content: 'Especificacoes' },",
      "      { value: 'usage', label: 'Usage', content: 'Guia rapido' },",
      '    ]}',
      `    defaultValue="${props.defaultValue}"`,
      `    variant="${props.variant}"`,
      `    size="${props.size}"`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<TabsPlaygroundProps>,
  tooltip: {
    imports: ['Tooltip', 'Button'],
    initialProps: { content: 'Detalhe adicional', placement: 'top', buttonLabel: 'Passe o mouse' },
    controls: [
      { type: 'text', name: 'content', label: 'Content', placeholder: 'Detalhe adicional' },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'text', name: 'buttonLabel', label: 'Button label', placeholder: 'Passe o mouse' },
    ],
    render: (props: TooltipPlaygroundProps) => <Labs.Tooltip content={props.content} placement={props.placement}><Labs.Button variant="outline">{props.buttonLabel}</Labs.Button></Labs.Tooltip>,
    generateCode: (props) => wrapSnippet(['Tooltip', 'Button'], [
      'return (',
      `  <Tooltip content="${props.content}" placement="${props.placement}">`,
      `    <Button variant="outline">${props.buttonLabel}</Button>`,
      '  </Tooltip>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TooltipPlaygroundProps>,
  modal: {
    imports: ['Button', 'Modal', 'Text', 'Flex'],
    initialProps: { title: 'Confirmar acao', description: 'Revise os detalhes antes de continuar.', body: 'Este modal usa o componente real da biblioteca.', confirmLabel: 'Confirmar', size: 'md', closeOnOverlayClick: true },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Confirmar acao' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Revise os detalhes antes de continuar.' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do modal' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Confirmar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props: ModalPlaygroundProps) => <ModalPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Button, Flex, Modal, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir modal</Button>\n      <Modal\n        open={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        description="${props.description}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Modal>\n    </>\n  );\n}`,
  } satisfies PlaygroundConfig<ModalPlaygroundProps>,
  drawer: {
    imports: ['Button', 'Drawer', 'Text', 'Flex'],
    initialProps: { title: 'Filtros', body: 'Use este painel para organizar um fluxo secundario sem sair da pagina.', confirmLabel: 'Aplicar', size: 'md', placement: 'right', closeOnOverlayClick: true },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Filtros' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do drawer' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Aplicar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'Full', value: 'full' }] },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props: DrawerPlaygroundProps) => <DrawerPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Button, Drawer, Flex, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir drawer</Button>\n      <Drawer\n        isOpen={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        placement="${props.placement}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Drawer>\n    </>\n  );\n}`,
  } satisfies PlaygroundConfig<DrawerPlaygroundProps>,
  code: {
    imports: ['Code'],
    initialProps: { children: 'npm install acyon', size: 'sm', weight: 'medium', block: false },
    controls: [
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'npm install acyon' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
      { type: 'boolean', name: 'block', label: 'Block' },
    ],
    render: (props: CodePlaygroundProps) => <Labs.Code size={props.size} weight={props.weight} block={Boolean(props.block)}>{props.children}</Labs.Code>,
    generateCode: (props) => wrapSnippet(['Code'], [
      'return (',
      `  ${buildOpeningTag('Code', { size: props.size, weight: props.weight, block: props.block })}>${props.children}</Code>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<CodePlaygroundProps>,
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
  accordion: {
    imports: ['Accordion'],
    initialProps: { type: 'single', defaultValue: 'item-1', firstTitle: 'Primeiro item', secondTitle: 'Segundo item' },
    controls: [
      { type: 'select', name: 'type', label: 'Type', options: [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }] },
      { type: 'select', name: 'defaultValue', label: 'Default open', options: [{ label: 'Item 1', value: 'item-1' }, { label: 'Item 2', value: 'item-2' }] },
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Primeiro item' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Segundo item' },
    ],
    render: (props: AccordionPlaygroundProps) => (
      <Labs.Accordion type={props.type} defaultValue={props.defaultValue}>
        <Labs.Accordion.Item id="item-1" title={props.firstTitle}>Conteudo do primeiro item.</Labs.Accordion.Item>
        <Labs.Accordion.Item id="item-2" title={props.secondTitle}>Conteudo do segundo item.</Labs.Accordion.Item>
      </Labs.Accordion>
    ),
    generateCode: (props) => wrapSnippet(['Accordion'], [
      'return (',
      `  <Accordion type="${props.type}" defaultValue="${props.defaultValue}">`,
      `    <Accordion.Item id="item-1" title="${props.firstTitle}">Conteudo do primeiro item.</Accordion.Item>`,
      `    <Accordion.Item id="item-2" title="${props.secondTitle}">Conteudo do segundo item.</Accordion.Item>`,
      '  </Accordion>',
      ');',
    ]),
  } satisfies PlaygroundConfig<AccordionPlaygroundProps>,
  card: {
    imports: ['Card', 'CardBody', 'CardHeader', 'Text'],
    initialProps: { title: 'Card title', description: 'Descricao complementar', content: 'Conteudo de exemplo em um card.', variant: 'default', padding: 'md' },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Card title' },
      { type: 'text', name: 'description', label: 'Description', placeholder: 'Descricao complementar' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Conteudo de exemplo em um card.' },
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Outlined', value: 'outlined' }] },
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
    ],
    render: (props: CardPlaygroundProps) => <Labs.Card variant={props.variant} padding={props.padding}><Labs.CardHeader title={props.title} description={props.description} /><Labs.CardBody><Labs.Text>{props.content}</Labs.Text></Labs.CardBody></Labs.Card>,
    generateCode: (props) => wrapSnippet(['Card', 'CardBody', 'CardHeader', 'Text'], [
      'return (',
      `  <Card variant="${props.variant}" padding="${props.padding}">`,
      `    <CardHeader title="${props.title}" description="${props.description}" />`,
      `    <CardBody><Text>${props.content}</Text></CardBody>`,
      '  </Card>',
      ');',
    ]),
  } satisfies PlaygroundConfig<CardPlaygroundProps>,
  image: {
    imports: ['Box', 'Image'],
    initialProps: { src: 'https://picsum.photos/400/240', alt: 'Exemplo', objectFit: 'cover', radius: 'md' },
    controls: [
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://picsum.photos/400/240' },
      { type: 'text', name: 'alt', label: 'Alt', placeholder: 'Exemplo' },
      { type: 'select', name: 'objectFit', label: 'Object fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }, { label: 'Fill', value: 'fill' }] },
      { type: 'select', name: 'radius', label: 'Radius', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'Full', value: 'full' }] },
    ],
    render: (props: ImagePlaygroundProps) => <Labs.Box style={{ width: 320, height: 180 }}><Labs.Image src={props.src} alt={props.alt} objectFit={props.objectFit} radius={props.radius} /></Labs.Box>,
    generateCode: (props) => wrapSnippet(['Box', 'Image'], [
      'return (',
      '  <Box style={{ width: 320, height: 180 }}>',
      `    <Image src="${props.src}" alt="${props.alt}" objectFit="${props.objectFit}" radius="${props.radius}" />`,
      '  </Box>',
      ');',
    ]),
  } satisfies PlaygroundConfig<ImagePlaygroundProps>,
  list: {
    imports: ['List'],
    initialProps: { variant: 'divided', activeItem: 'second' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Divided', value: 'divided' }, { label: 'Checklist', value: 'checklist' }] },
      { type: 'select', name: 'activeItem', label: 'Active item', options: [{ label: 'None', value: 'none' }, { label: 'First', value: 'first' }, { label: 'Second', value: 'second' }] },
    ],
    render: (props: ListPlaygroundProps) => (
      <Labs.List variant={props.variant}>
        <Labs.List.Item active={props.activeItem === 'first'} description="Descricao do item">Primeiro item</Labs.List.Item>
        <Labs.List.Item active={props.activeItem === 'second'} description="Descricao do item">Segundo item</Labs.List.Item>
        <Labs.List.Item description="Descricao do item">Terceiro item</Labs.List.Item>
      </Labs.List>
    ),
    generateCode: (props) => wrapSnippet(['List'], [
      'return (',
      `  <List variant="${props.variant}">`,
      `    <List.Item${props.activeItem === 'first' ? ' active' : ''} description="Descricao do item">Primeiro item</List.Item>`,
      `    <List.Item${props.activeItem === 'second' ? ' active' : ''} description="Descricao do item">Segundo item</List.Item>`,
      '    <List.Item description="Descricao do item">Terceiro item</List.Item>',
      '  </List>',
      ');',
    ]),
  } satisfies PlaygroundConfig<ListPlaygroundProps>,
  table: {
    imports: ['Table', 'Thead', 'Tbody', 'Tr', 'Th', 'Td'],
    initialProps: { striped: true, hover: true, compact: false, stickyHeader: false },
    controls: [
      { type: 'boolean', name: 'striped', label: 'Striped' },
      { type: 'boolean', name: 'hover', label: 'Hover rows' },
      { type: 'boolean', name: 'compact', label: 'Compact' },
      { type: 'boolean', name: 'stickyHeader', label: 'Sticky header' },
    ],
    render: (props: TablePlaygroundProps) => <Labs.Table striped={props.striped} hover={props.hover} compact={props.compact} stickyHeader={props.stickyHeader}><Labs.Thead><Labs.Tr><Labs.Th>Nome</Labs.Th><Labs.Th>Papel</Labs.Th></Labs.Tr></Labs.Thead><Labs.Tbody><Labs.Tr><Labs.Td>Thiago</Labs.Td><Labs.Td>Owner</Labs.Td></Labs.Tr><Labs.Tr><Labs.Td>Acyon</Labs.Td><Labs.Td>System</Labs.Td></Labs.Tr></Labs.Tbody></Labs.Table>,
    generateCode: (props) => wrapSnippet(['Table', 'Thead', 'Tbody', 'Tr', 'Th', 'Td'], [
      'return (',
      `  <Table${props.striped ? ' striped' : ''}${props.hover ? ' hover' : ''}${props.compact ? ' compact' : ''}${props.stickyHeader ? ' stickyHeader' : ''}>`,
      '    <Thead><Tr><Th>Nome</Th><Th>Papel</Th></Tr></Thead>',
      '    <Tbody>',
      '      <Tr><Td>Thiago</Td><Td>Owner</Td></Tr>',
      '      <Tr><Td>Acyon</Td><Td>System</Td></Tr>',
      '    </Tbody>',
      '  </Table>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TablePlaygroundProps>,
  timeline: {
    imports: ['Timeline', 'TimelineItem'],
    initialProps: { firstTitle: 'Criado', secondTitle: 'Em revisao', thirdTitle: 'Publicado' },
    controls: [
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Criado' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Em revisao' },
      { type: 'text', name: 'thirdTitle', label: 'Third title', placeholder: 'Publicado' },
    ],
    render: (props: TimelinePlaygroundProps) => <Labs.Timeline><Labs.TimelineItem title={props.firstTitle} description="Primeiro evento" /><Labs.TimelineItem title={props.secondTitle} description="Segundo evento" /><Labs.TimelineItem title={props.thirdTitle} description="Terceiro evento" /></Labs.Timeline>,
    generateCode: (props) => wrapSnippet(['Timeline', 'TimelineItem'], [
      'return (',
      '  <Timeline>',
      `    <TimelineItem title="${props.firstTitle}" description="Primeiro evento" />`,
      `    <TimelineItem title="${props.secondTitle}" description="Segundo evento" />`,
      `    <TimelineItem title="${props.thirdTitle}" description="Terceiro evento" />`,
      '  </Timeline>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TimelinePlaygroundProps>,
  breadcrumb: {
    imports: ['Breadcrumb'],
    initialProps: { separator: '/', currentLabel: 'Breadcrumb' },
    controls: [
      { type: 'select', name: 'separator', label: 'Separator', options: [{ label: '/', value: '/' }, { label: '>', value: '>' }, { label: '-', value: '-' }] },
      { type: 'text', name: 'currentLabel', label: 'Current label', placeholder: 'Breadcrumb' },
    ],
    render: (props: BreadcrumbPlaygroundProps) => <Labs.Breadcrumb separator={props.separator} items={[{ label: 'Inicio', href: '#/' }, { label: 'Componentes' }, { label: props.currentLabel }]} />,
    generateCode: (props) => wrapSnippet(['Breadcrumb'], [
      'return (',
      '  <Breadcrumb',
      '    items={[',
      "      { label: 'Inicio', href: '#/' },",
      "      { label: 'Componentes' },",
      `      { label: '${props.currentLabel}' },`,
      '    ]}',
      `    separator="${props.separator}"`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<BreadcrumbPlaygroundProps>,
  'top-bar': {
    imports: ['TopBar', 'Heading5'],
    initialProps: { navPosition: 'center', themeToggle: true, sticky: false, contentInside: false },
    controls: [
      { type: 'select', name: 'navPosition', label: 'Nav position', options: [{ label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'themeToggle', label: 'Theme toggle' },
      { type: 'boolean', name: 'sticky', label: 'Sticky' },
      { type: 'boolean', name: 'contentInside', label: 'Content inside' },
    ],
    render: (props: TopBarPlaygroundProps) => <Labs.TopBar logo={<Labs.Heading5>Labs</Labs.Heading5>} navPosition={props.navPosition} themeToggle={props.themeToggle} sticky={props.sticky} contentInside={props.contentInside} navItems={[{ label: 'Playground', href: '#/' }, { label: 'Button', href: '#/button' }]} />,
    generateCode: (props) => wrapSnippet(['TopBar', 'Heading5'], [
      'return (',
      '  <TopBar',
      '    logo={<Heading5>Labs</Heading5>}',
      '    navItems={[',
      "      { label: 'Playground', href: '#/' },",
      "      { label: 'Button', href: '#/button' },",
      '    ]}',
      `    navPosition="${props.navPosition}"`,
      `${props.themeToggle ? '    themeToggle' : ''}`,
      `${props.sticky ? '    sticky' : ''}`,
      `${props.contentInside ? '    contentInside' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<TopBarPlaygroundProps>,
  box: {
    imports: ['Box', 'Text'],
    initialProps: { padding: '4', rounded: 'lg', shadow: 'sm', surface: 'subtle', border: false, children: 'Conteudo dentro do Box.' },
    controls: [
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
      { type: 'select', name: 'rounded', label: 'Rounded', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'select', name: 'shadow', label: 'Shadow', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'surface', label: 'Surface', options: [{ label: 'Default', value: 'default' }, { label: 'Subtle', value: 'subtle' }, { label: 'Inverse', value: 'inverse' }] },
      { type: 'boolean', name: 'border', label: 'Border' },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Conteudo dentro do Box.' },
    ],
    render: (props: BoxPlaygroundProps) => <Labs.Box padding={props.padding} rounded={props.rounded} shadow={props.shadow} surface={props.surface} border={props.border}><Labs.Text>{props.children}</Labs.Text></Labs.Box>,
    generateCode: (props) => wrapSnippet(['Box', 'Text'], [
      'return (',
      `  ${buildOpeningTag('Box', { padding: props.padding, rounded: props.rounded, shadow: props.shadow, surface: props.surface, border: props.border })}>`,
      `    <Text>${props.children}</Text>`,
      '  </Box>',
      ');',
    ]),
  } satisfies PlaygroundConfig<BoxPlaygroundProps>,
  container: {
    imports: ['Container', 'Text'],
    initialProps: { size: 'md', children: 'Area de container.' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: 'Full', value: 'full' }] },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Area de container.' },
    ],
    render: (props: ContainerPlaygroundProps) => <Labs.Container size={props.size}><Labs.Text>{props.children}</Labs.Text></Labs.Container>,
    generateCode: (props) => wrapSnippet(['Container', 'Text'], [
      'return (',
      `  <Container size="${props.size}"><Text>${props.children}</Text></Container>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<ContainerPlaygroundProps>,
  divider: {
    imports: ['Divider', 'Flex', 'Text'],
    initialProps: { orientation: 'horizontal', label: '' },
    controls: [
      { type: 'select', name: 'orientation', label: 'Orientation', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ou' },
    ],
    render: (props: DividerPlaygroundProps) => props.orientation === 'horizontal'
      ? <Labs.Flex direction="column" gap="3"><Labs.Text>Secao A</Labs.Text><Labs.Divider orientation="horizontal" label={props.label || undefined} /><Labs.Text>Secao B</Labs.Text></Labs.Flex>
      : <Labs.Flex align="center" gap="3"><Labs.Text>A</Labs.Text><Labs.Divider orientation="vertical" /><Labs.Text>B</Labs.Text></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Divider'], [
      'return (',
      `  <Divider orientation="${props.orientation}"${props.label ? ` label="${props.label}"` : ''} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<DividerPlaygroundProps>,
  flex: {
    imports: ['Badge', 'Flex'],
    initialProps: { direction: 'row', align: 'center', justify: 'flex-start', gap: '4' },
    controls: [
      { type: 'select', name: 'direction', label: 'Direction', options: [{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }] },
      { type: 'select', name: 'align', label: 'Align', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Stretch', value: 'stretch' }] },
      { type: 'select', name: 'justify', label: 'Justify', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Space Between', value: 'space-between' }] },
      { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
    ],
    render: (props: FlexPlaygroundProps) => <Labs.Flex direction={props.direction} align={props.align} justify={props.justify} gap={props.gap}><Labs.Badge>1</Labs.Badge><Labs.Badge>2</Labs.Badge><Labs.Badge>3</Labs.Badge></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Badge', 'Flex'], [
      'return (',
      `  <Flex direction="${props.direction}" align="${props.align}" justify="${props.justify}" gap="${props.gap}">`,
      '    <Badge>1</Badge><Badge>2</Badge><Badge>3</Badge>',
      '  </Flex>',
      ');',
    ]),
  } satisfies PlaygroundConfig<FlexPlaygroundProps>,
  grid: {
    imports: ['Card', 'CardBody', 'Grid'],
    initialProps: { columns: '3', gap: '4' },
    controls: [
      { type: 'select', name: 'columns', label: 'Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] },
      { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
    ],
    render: (props: GridPlaygroundProps) => <Labs.Grid columns={Number(props.columns) as 1 | 2 | 3 | 4} gap={props.gap}><Labs.Card><Labs.CardBody>A</Labs.CardBody></Labs.Card><Labs.Card><Labs.CardBody>B</Labs.CardBody></Labs.Card><Labs.Card><Labs.CardBody>C</Labs.CardBody></Labs.Card></Labs.Grid>,
    generateCode: (props) => wrapSnippet(['Card', 'CardBody', 'Grid'], [
      'return (',
      `  <Grid columns={${Number(props.columns)}} gap="${props.gap}">`,
      '    <Card><CardBody>A</CardBody></Card>',
      '    <Card><CardBody>B</CardBody></Card>',
      '    <Card><CardBody>C</CardBody></Card>',
      '  </Grid>',
      ');',
    ]),
  } satisfies PlaygroundConfig<GridPlaygroundProps>,
  'page-header': {
    imports: ['Button', 'PageHeader'],
    initialProps: { title: 'PageHeader', description: 'Descricao da pagina', showBack: false },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'PageHeader' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Descricao da pagina' },
      { type: 'boolean', name: 'showBack', label: 'Show back button' },
    ],
    render: (props: PageHeaderPlaygroundProps) => <Labs.PageHeader title={props.title} description={props.description} showBack={props.showBack} action={<Labs.Button>Salvar</Labs.Button>} />,
    generateCode: (props) => wrapSnippet(['Button', 'PageHeader'], [
      'return (',
      '  <PageHeader',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `${props.showBack ? '    showBack' : ''}`,
      '    action={<Button>Salvar</Button>}',
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<PageHeaderPlaygroundProps>,
  sidebar: {
    imports: ['Icon', 'Sidebar'],
    initialProps: { collapsed: false, groupTitle: 'Navigation' },
    controls: [
      { type: 'boolean', name: 'collapsed', label: 'Collapsed' },
      { type: 'text', name: 'groupTitle', label: 'Group title', placeholder: 'Navigation' },
    ],
    render: (props: SidebarPlaygroundProps) => (
      <div style={{ width: props.collapsed ? 80 : 280 }}>
        <Labs.Sidebar collapsed={props.collapsed}>
          <Labs.Sidebar.Item icon={<Labs.Icon name="home" size={16} />} active>Home</Labs.Sidebar.Item>
          <Labs.Sidebar.Group title={props.groupTitle} leftIcon={<Labs.Icon name="external-link" size={16} />} defaultOpen>
            <Labs.Sidebar.Item icon={<Labs.Icon name="folder" size={16} />}>Tabs</Labs.Sidebar.Item>
            <Labs.Sidebar.Item icon={<Labs.Icon name="milestone" size={16} />}>Breadcrumb</Labs.Sidebar.Item>
          </Labs.Sidebar.Group>
        </Labs.Sidebar>
      </div>
    ),
    generateCode: (props) => wrapSnippet(['Icon', 'Sidebar'], [
      'return (',
      `  <Sidebar${props.collapsed ? ' collapsed' : ''}>`,
      '    <Sidebar.Item icon={<Icon name="home" size={16} />} active>Home</Sidebar.Item>',
      `    <Sidebar.Group title="${props.groupTitle}" leftIcon={<Icon name="external-link" size={16} />} defaultOpen>`,
      '      <Sidebar.Item icon={<Icon name="folder" size={16} />}>Tabs</Sidebar.Item>',
      '      <Sidebar.Item icon={<Icon name="milestone" size={16} />}>Breadcrumb</Sidebar.Item>',
      '    </Sidebar.Group>',
      '  </Sidebar>',
      ');',
    ]),
  } satisfies PlaygroundConfig<SidebarPlaygroundProps>,
  spacer: {
    imports: ['Badge', 'Flex', 'Spacer'],
    initialProps: { axis: 'horizontal', size: '24px' },
    controls: [
      { type: 'select', name: 'axis', label: 'Axis', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'size', label: 'Size', placeholder: '24px' },
    ],
    render: (props: SpacerPlaygroundProps) => props.axis === 'horizontal'
      ? <Labs.Flex align="center"><Labs.Badge>Inicio</Labs.Badge><Labs.Spacer axis="horizontal" size={props.size} /><Labs.Badge>Fim</Labs.Badge></Labs.Flex>
      : <Labs.Flex direction="column"><Labs.Badge>Inicio</Labs.Badge><Labs.Spacer axis="vertical" size={props.size} /><Labs.Badge>Fim</Labs.Badge></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Spacer'], [
      'return (',
      `  <Spacer axis="${props.axis}" size="${props.size}" />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SpacerPlaygroundProps>,
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
