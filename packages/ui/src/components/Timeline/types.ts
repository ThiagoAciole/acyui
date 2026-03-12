import type * as React from 'react';

export interface TimelineItemProps {
    title: string;
    description?: React.ReactNode;
    date?: string;
    icon?: React.ReactNode;
    src?: string;
    name?: string;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
