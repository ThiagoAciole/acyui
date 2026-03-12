import type * as React from 'react';

export type DrawerPlacement = 'left' | 'right';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    placement?: DrawerPlacement;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: DrawerSize;
    className?: string;
    closeOnOverlayClick?: boolean;
}
