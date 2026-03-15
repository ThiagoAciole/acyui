import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export type ButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type ButtonSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
export type ButtonColor = ColorValue;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    iconRight?: boolean;
    full?: boolean;
    color?: ButtonColor;
}
