import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
    error?: string;
    color?: ColorValue;
}
