import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';
import type { ColorValue } from '../../utils/styleTokens';

export interface LinkOwnProps {
    color?: ColorValue;
    underline?: boolean;
    active?: boolean;
    to?: string;
}

export type LinkProps<TElement extends React.ElementType = 'a'> = PolymorphicComponentProps<TElement, LinkOwnProps>;
