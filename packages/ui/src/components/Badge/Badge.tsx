import './Badge.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar, isTokenColor } from '../../utils/styleTokens';
import type { BadgeProps } from './types';

export type { BadgeColor, BadgeProps, BadgeSize, BadgeVariant } from './types';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
    children,
    variant = 'soft',
    color = 'primary',
    size = 'md',
    className,
    ...props
}, ref) => {
    const tokenColor = isTokenColor(color) ? color : undefined;

    return (
        <span
            ref={ref}
            className={classNames('badge', `badge--${variant}`, tokenColor && `badge--${tokenColor}`, `badge--${size}`, className)}
            style={!tokenColor ? { ['--badge-color' as string]: colorVar(color) } : undefined}
            {...props}
        >
            {children}
        </span>
    );
});

Badge.displayName = 'Badge';
