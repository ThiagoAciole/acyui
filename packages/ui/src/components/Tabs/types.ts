import type * as React from 'react';

export interface TabItem {
    value: string;
    label: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    href?: string;
}

export type TabsVariant = 'default' | 'pills';
export type TabsSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
    tabs: TabItem[];
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    variant?: TabsVariant;
    size?: TabsSize;
}
