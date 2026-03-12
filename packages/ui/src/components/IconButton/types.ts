import type * as React from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant } from '../Button/types';

export type IconButtonVariant = ButtonVariant;
export type IconButtonSize = Extract<ButtonSize, 'sm' | 'md' | 'lg'>;

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
    icon: React.ReactNode | JSX.Element;
    label?: string;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
}
