import type * as React from 'react';
import type { PolymorphicComponentProps } from '../types';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
    searchThreshold?: number;
    searchPlaceholder?: string;
    children?: React.ReactNode;
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    logo?: React.ReactNode;
    collapsible?: boolean;
}

export interface SidebarItemOwnProps {
    icon?: React.ReactNode | JSX.Element;
    active?: boolean;
    searchText?: string;
    children?: React.ReactNode;
}

export type SidebarItemProps<TElement extends React.ElementType = 'button'> = PolymorphicComponentProps<TElement, SidebarItemOwnProps>;

export interface SidebarGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    leftIcon?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    collapsible?: boolean;
    children?: React.ReactNode;
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
