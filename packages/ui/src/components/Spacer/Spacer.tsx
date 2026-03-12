import React from 'react';
import type { SpacerProps } from './types';

export type { SpacerAxis, SpacerProps } from './types';

export const Spacer: React.FC<SpacerProps> = ({ size = '1rem', axis = 'vertical', style }) => {
    const width = axis === 'horizontal' ? size : 1;
    const height = axis === 'vertical' ? size : 1;

    return <span style={{ display: 'block', width, minWidth: width, height, minHeight: height, ...style }} aria-hidden="true" />;
};
