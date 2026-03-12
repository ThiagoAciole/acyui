import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    indeterminate?: boolean;
    supportText?: string;
    color?: ColorValue;
}
