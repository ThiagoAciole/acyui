import type * as React from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    content: React.ReactNode;
    placement?: TooltipPlacement;
    children: React.ReactElement;
    delay?: number;
}
