import React from 'react';
import './Grid.css';
import { classNames } from '../../utils/classNames';
import type { GridProps } from './types';

export type { GridColumns, GridGap, GridOwnProps, GridProps } from './types';

export const Grid = <TElement extends React.ElementType = 'div'>({
    children,
    columns = 1,
    gap = '4',
    className,
    style,
    as,
    ...props
}: GridProps<TElement>) => {
    const Component = (as || 'div') as React.ElementType;

    return (
        <Component
            className={classNames(
                'grid',
                `grid-cols--${columns}`,
                `grid-gap--${gap}`,
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </Component>
    );
};





