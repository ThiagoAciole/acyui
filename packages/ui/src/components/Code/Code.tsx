import './Code.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { CodeProps } from './types';

export type { CodeProps, CodeSize, CodeWeight } from './types';

export const Code: React.FC<CodeProps> = ({
    size = 'sm',
    weight = 'medium',
    block = false,
    children,
    className,
    ...props
}) => {
    return (
        <code
            className={classNames(
                'code',
                `code--${size}`,
                `code--${weight}`,
                block && 'code--block',
                className
            )}
            {...props}
        >
            {children}
        </code>
    );
};

Code.displayName = 'Code';
