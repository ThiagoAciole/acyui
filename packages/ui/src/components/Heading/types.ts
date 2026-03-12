import type * as React from 'react';
import type { TokenWeight } from '../../utils/styleTokens';

export type HeadingWeight = Extract<TokenWeight, 'medium' | 'semibold' | 'bold'>;
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface BaseHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    weight?: HeadingWeight;
}
