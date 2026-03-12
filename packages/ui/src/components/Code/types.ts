import type * as React from 'react';
import type { TokenSize, TokenWeight } from '../../utils/styleTokens';

export type CodeSize = TokenSize;
export type CodeWeight = TokenWeight;

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    size?: CodeSize;
    weight?: CodeWeight;
    block?: boolean;
}
