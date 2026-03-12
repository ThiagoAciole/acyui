import type * as React from 'react';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    id?: string;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
}

export type AccordionComponent = React.FC<AccordionProps> & { Item: React.FC<AccordionItemProps> };
