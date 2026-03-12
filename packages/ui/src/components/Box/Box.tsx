import React from 'react';
import './Box.css';
import { classNames } from '../../utils/classNames';
import type { BoxProps } from './types';

export type { BoxOwnProps, BoxPadding, BoxProps, BoxRounded, BoxShadow, BoxSurface } from './types';

export const Box = React.forwardRef(function Box<TElement extends React.ElementType = 'div'>({
    as,
    padding = '0',
    rounded = 'none',
    shadow = 'none',
    surface = 'default',
    border = false,
    className,
    children,
    ...props
}: BoxProps<TElement>, ref: React.ForwardedRef<Element>) {
    const Component = (as || 'div') as React.ElementType;

    return (
        <Component
            ref={ref}
            className={classNames(
                'box',
                `box-padding--${padding}`,
                `box-rounded--${rounded}`,
                `box-shadow--${shadow}`,
                `box-surface--${surface}`,
                border && 'box--border',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}) as <TElement extends React.ElementType = 'div'>(
    props: BoxProps<TElement> & { ref?: React.ForwardedRef<Element> }
) => React.ReactElement | null;
