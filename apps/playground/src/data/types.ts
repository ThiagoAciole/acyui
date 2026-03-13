import type { IconName } from '@aciole/acyon';
import type * as React from 'react';

export type Category =
  | 'typography'
  | 'forms'
  | 'data-display'
  | 'navigation'
  | 'feedback'
  | 'overlay'
  | 'layout';

export interface ComponentMeta {
  id: string;
  name: string;
  category: Category;
  icon: IconName;
  description: string;
}

export type ControlOption = {
  label: string;
  value: string;
};

export type PlaygroundControl =
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

export type PlaygroundConfigMap = Partial<Record<ComponentMeta['id'], PlaygroundConfig<any>>>;
