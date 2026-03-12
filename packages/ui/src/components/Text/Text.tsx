import React from 'react';
import { classNames } from '../../utils/classNames';
import { isTokenColor, textColorVar } from '../../utils/styleTokens';
import './Text.css';
import type { TextProps } from './types';

export type { TextColor, TextOwnProps, TextProps, TextSize, TextWeight } from './types';

export const Text = <TElement extends React.ElementType = 'p'>({
    size = 'md',
    color = 'default',
    weight = 'normal',
    as,
    className,
    children,
    style,
    ...props
}: TextProps<TElement>) => {
    const Component = (as || 'p') as React.ElementType;
    const tokenColorClass = isTokenColor(color) || ['default', 'subtle', 'muted', 'inverse'].includes(color)
        ? `text--color-${color}`
        : undefined;

    return (
        <Component
            className={classNames(
                'text',
                `text--size-${size}`,
                tokenColorClass,
                `text--weight-${weight}`,
                className
            )}
            style={!tokenColorClass ? { ...style, color: textColorVar(color) } : style}
            {...props}
        >
            {children}
        </Component>
    );
};
