import type * as React from 'react';
import type { ColorValue, TokenSize } from '../../utils/styleTokens';

export type TagVariant = 'soft' | 'outline';
export type TagSize = Extract<TokenSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: TagVariant;
    size?: TagSize;
    color?: ColorValue;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    closable?: boolean;
    onRemove?: () => void;
}
