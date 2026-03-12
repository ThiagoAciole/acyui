import type * as React from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps {
    children: React.ReactNode;
    size?: ContainerSize;
    className?: string;
    style?: React.CSSProperties;
}
