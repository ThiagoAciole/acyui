import type * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    circle?: boolean;
    radius?: string | number;
    animated?: boolean;
}
