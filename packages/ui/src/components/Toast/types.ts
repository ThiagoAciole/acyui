import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
export type ToastColor = Extract<ColorValue, string>;

export interface ToastData {
    id: string;
    title: string;
    description?: string;
    color?: ToastColor;
    duration?: number;
}

export interface ToastContextValue {
    toast: (data: Omit<ToastData, 'id'>) => void;
    dismiss: (id: string) => void;
}

export interface ToastProviderProps {
    children: React.ReactNode;
    position?: ToastPosition;
    maxToasts?: number;
}
