import type * as React from 'react';

export type AlertVariant = 'primary' | 'neutral' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    title?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}
