import React from 'react';
import './Container.css';
import { classNames } from '../../utils/classNames';
import type { ContainerProps } from './types';

export type { ContainerProps, ContainerSize } from './types';

export const Container: React.FC<ContainerProps> = ({
    children,
    size = 'lg',
    className,
    style
}) => {
    return (
        <div
            className={classNames('container', `container--${size}`, className)}
            style={style}
        >
            {children}
        </div>
    );
};





