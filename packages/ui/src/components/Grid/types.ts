import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';

export interface GridOwnProps {
    children?: React.ReactNode;
    columns?: GridColumns;
    gap?: GridGap;
}

export type GridProps<TElement extends React.ElementType = 'div'> = PolymorphicComponentProps<TElement, GridOwnProps>;
