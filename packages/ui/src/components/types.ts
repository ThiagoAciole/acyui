import type * as React from 'react';

export type LooseStringUnion<T extends string> = T | (string & object);

export type PropsOf<TElement extends React.ElementType> = React.ComponentPropsWithoutRef<TElement>;

export type PolymorphicRef<TElement extends React.ElementType> = React.ComponentPropsWithRef<TElement>['ref'];

export type PolymorphicComponentProps<
    TElement extends React.ElementType,
    TOwnProps = object,
> = TOwnProps & {
    as?: TElement;
} & Omit<PropsOf<TElement>, keyof TOwnProps | 'as'>;
