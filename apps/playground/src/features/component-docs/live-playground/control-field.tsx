import { Input, NumberInput, Select, Switch, TextArea } from 'acioleui';
import type { PlaygroundControl } from '../../../registry/types';

interface ControlFieldProps {
  control: PlaygroundControl;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function ControlField({ control, value, onChange }: ControlFieldProps) {
  if (control.type === 'text') {
    return (
      <Input
        label={control.label}
        value={String(value ?? '')}
        placeholder={control.placeholder}
        onChange={(event) => onChange(event.target.value)}
        full
      />
    );
  }

  if (control.type === 'textarea') {
    return (
      <TextArea
        label={control.label}
        value={String(value ?? '')}
        placeholder={control.placeholder}
        onChange={(event) => onChange(event.target.value)}
        full
      />
    );
  }

  if (control.type === 'boolean') {
    return (
      <div className="component-playground__switch">
        <Switch
          label={control.label}
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
        />
      </div>
    );
  }


  if (control.type === 'number') {
    return (
      <NumberInput
        variant='stepper'
        label={control.label}
        value={Number(value ?? 0)}
        placeholder={control.placeholder}
        min={control.min}
        max={control.max}
        step={control.step}
        onChange={(value) => onChange(value)}
      />
    );
  }

  if (control.type === 'select') {
    return (
      <Select
        label={control.label}
        value={String(value ?? '')}
        onChange={onChange}
        options={control.options}
        full
      />
    );
  }

  return null;
}
