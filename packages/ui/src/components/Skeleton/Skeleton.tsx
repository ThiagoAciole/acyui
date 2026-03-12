import './Skeleton.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { SkeletonProps } from './types';

export type { SkeletonProps } from './types';

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    circle = false,
    radius,
    animated = true,
    className,
    style,
    ...props
}) => {
    const customStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: circle ? '50%' : (typeof radius === 'number' ? `${radius}px` : radius),
        ...style
    };

    return (
        <div
            className={classNames(
                'skeleton',
                circle && 'skeleton--circle',
                animated && 'skeleton--animated',
                className
            )}
            style={customStyle}
            {...props}
        />
    );
};

Skeleton.displayName = 'Skeleton';
