import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';

export type BoxPadding = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
export type BoxRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type BoxShadow = 'none' | 'sm' | 'md' | 'lg';
export type BoxSurface = 'default' | 'subtle' | 'raised' | 'inverse';

export interface BoxOwnProps {
    padding?: BoxPadding;
    rounded?: BoxRounded;
    shadow?: BoxShadow;
    surface?: BoxSurface;
    border?: boolean;
}

export type BoxProps<TElement extends React.ElementType = 'div'> = PolymorphicComponentProps<TElement, BoxOwnProps>;
