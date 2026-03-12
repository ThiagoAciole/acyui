import type * as React from 'react';
import type { ColorValue, TokenSize } from '../../utils/styleTokens';

export type BadgeVariant = 'solid' | 'outline' | 'soft';
export type BadgeColor = ColorValue;
export type BadgeSize = Extract<TokenSize, 'sm' | 'md' | 'lg'>;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    color?: BadgeColor;
    size?: BadgeSize;
}
