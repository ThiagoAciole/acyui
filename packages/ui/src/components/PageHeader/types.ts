import type * as React from 'react';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    showBack?: boolean;
    onBack?: () => void;
    action?: React.ReactNode;
    width?: string;
}
