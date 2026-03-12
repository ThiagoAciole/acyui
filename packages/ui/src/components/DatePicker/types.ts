import type * as React from 'react';
import type { InputProps } from '../Input/types';

export interface DatePickerProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange'> {
    value?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
