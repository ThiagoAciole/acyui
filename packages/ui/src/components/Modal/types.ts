import type * as React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    size?: ModalSize;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    closeOnOverlayClick?: boolean;
}
