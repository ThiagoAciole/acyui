import * as Labs from '@aciole/acyon';
import * as React from 'react';
import type { PlaygroundConfig } from './types';

export function ModalPreview(props: {
  title: string;
  description: string;
  body: string;
  confirmLabel: string;
  size: 'small' | 'medium' | 'large' | 'extraLarge';
  closeOnOverlayClick: boolean;
}) {
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

export function DrawerPreview(props: {
  title: string;
  body: string;
  confirmLabel: string;
  size: 'small' | 'medium' | 'large' | 'full';
  placement: 'left' | 'right';
  closeOnOverlayClick: boolean;
}) {
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

export function PaginationPreview(props: {
  currentPage: string;
  totalPages: string;
  showControls: boolean;
}) {
  const [page, setPage] = React.useState(Number(props.currentPage));

  React.useEffect(() => {
    setPage(Number(props.currentPage));
  }, [props.currentPage]);

  return (
    <Labs.Pagination
      currentPage={page}
      totalPages={Number(props.totalPages)}
      showControls={props.showControls}
      onPageChange={(nextPage) => setPage(nextPage)}
    />
  );
}

export function SelectPreview(props: {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}) {
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

export function CheckboxPreview(props: {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Checkbox label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} onChange={(event) => setChecked(event.target.checked)} />;
}

export function RadioPreview(props: {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Radio name="preview-radio" label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} onChange={() => setChecked(true)} />;
}

export function SwitchPreview(props: {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: Labs.SwitchProps['size'];
}) {
  const [checked, setChecked] = React.useState(Boolean(props.checked));

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return <Labs.Switch label={String(props.label ?? '')} checked={checked} disabled={Boolean(props.disabled)} size={props.size} onChange={(event) => setChecked(event.target.checked)} />;
}

export function MultiSelectPreview(props: {
  label: string;
  placeholder: string;
  disabled: boolean;
  selection: 'none' | 'react' | 'react-vue';
}) {
  const selection = props.selection === 'none' ? [] : props.selection === 'react' ? ['react'] : ['react', 'vue'];
  const [value, setValue] = React.useState<string[]>(selection);

  React.useEffect(() => {
    setValue(selection);
  }, [props.selection]);

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

export function SliderPreview(props: {
  label: string;
  supportText: string;
  min: string;
  max: string;
  value: string;
}) {
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

export function DatePickerPreview(props: {
  label: string;
  placeholder: string;
  hint: string;
  disabled: boolean;
  value: string;
}) {
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

export function ToastPreview(props: {
  title: string;
  description: string;
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
  actionLabel: string;
}) {
  const { toast } = Labs.useToast();

  return (
    <Labs.Button
      onClick={() => toast({
        title: props.title,
        description: props.description || undefined,
        color: props.color,
      })}
    >
      {props.actionLabel}
    </Labs.Button>
  );
}

export function normalizeDimension(value: unknown) {
  if (typeof value === 'number') return `${value}px`;
  if (typeof value !== 'string') return '';

  const normalizedValue = value.trim();
  if (normalizedValue === '') return '';
  if (/^\d+$/.test(normalizedValue)) return `${normalizedValue}px`;

  return normalizedValue;
}

export function renderPrimitive(value: unknown) {
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}

export function buildOpeningTag(name: string, props: Record<string, unknown>) {
  const entries = Object.entries(props).filter(([, value]) => value !== '' && value !== false && value !== undefined && value !== null);

  if (entries.length === 0) {
    return `<${name}`;
  }

  return [
    `<${name}`,
    ...entries.map(([key, value]) => (typeof value === 'boolean' ? `  ${key}` : `  ${key}={${renderPrimitive(value)}}`.replace('={"', '="').replace('"}', '"'))),
  ].join('\n');
}

export function wrapSnippet(imports: string[], body: string[]) {
  const normalizedBody = body[0] === 'return (' && body[body.length - 1] === ');' ? body.slice(1, -1) : body;
  return [`import { ${imports.join(', ')} } from '@aciole/acyon';`, '', ...normalizedBody].join('\n');
}

export function resolveImports<TProps extends Record<string, unknown>>(imports: PlaygroundConfig<TProps>['imports'], props: TProps) {
  return typeof imports === 'function' ? imports(props) : imports;
}
