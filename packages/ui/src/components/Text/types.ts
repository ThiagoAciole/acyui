import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';
import type { TokenTextColor, TokenWeight, TokenSize } from '../../utils/styleTokens';

export type TextSize = TokenSize;
export type TextColor = TokenTextColor;
export type TextWeight = TokenWeight;

export interface TextOwnProps {
    size?: TextSize;
    color?: TextColor;
    weight?: TextWeight;
    htmlFor?: string;
}

export type TextProps<TElement extends React.ElementType = 'p'> = PolymorphicComponentProps<TElement, TextOwnProps>;
