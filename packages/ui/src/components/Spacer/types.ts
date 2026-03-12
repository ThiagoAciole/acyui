import type * as React from 'react';

export type SpacerAxis = 'horizontal' | 'vertical';

export interface SpacerProps {
    size?: number | string;
    axis?: SpacerAxis;
    style?: React.CSSProperties;
}
