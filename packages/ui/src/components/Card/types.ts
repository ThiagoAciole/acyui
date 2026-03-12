import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost';

export interface CardOwnProps {
    padding?: CardPadding;
    variant?: CardVariant;
    children?: React.ReactNode;
}

export type CardProps<TElement extends React.ElementType = 'div'> = PolymorphicComponentProps<TElement, CardOwnProps>;

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}

export type CardSectionProps = React.HTMLAttributes<HTMLDivElement>;
