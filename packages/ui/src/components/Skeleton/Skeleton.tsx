import './Skeleton.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { SkeletonProps } from './types';

export type { SkeletonProps } from './types';

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    animated = true,
    rounded = false
}) => {
    const customStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: rounded ? '9999px' : 'var(--radius-md)'
    };

    return (
        <div
            className={classNames(
                'skeleton',
                animated && 'skeleton--animated',
                rounded && 'skeleton--rounded'
            )}
            style={customStyle}
        />
    );
};

Skeleton.displayName = 'Skeleton';
