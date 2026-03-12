import type * as React from 'react';

export type ListVariant = 'default' | 'bordered' | 'divided' | 'checklist';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: ListVariant;
}

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    description?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
}
