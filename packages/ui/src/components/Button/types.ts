import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export type ButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = ColorValue | 'default';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode | JSX.Element;
    iconRight?: boolean;
    full?: boolean;
    color?: ButtonColor;
}
